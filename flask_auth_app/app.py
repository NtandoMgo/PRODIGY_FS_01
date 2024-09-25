from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from email_validator import validate_email, EmailNotValidError
from flask_cors import CORS     

from werkzeug.security import check_password_hash       #for login
# from models import User

app = Flask(__name__)       # Init Flask appl
CORS(app)                   # enable CORS for all routes by default

bcrypt = Bcrypt(app)        # Init Bcrypt -- password hashing

users = {}      # In-memory user storage -- just a proj, no real database

@app.route('/')     # basic route to test the app
def home():
    return jsonify(message="Welcome to the Flask Authentication System")

@app.route('/register', methods=['POST'])   # User registration route
def register():
    data = request.get_json()        # Get the request data, username(enail) + password
    
    name = data.get('name')
    username = data.get('email')
    password = data.get('password')

    # Validate email format
    try:
        valid = validate_email(username)        # validate and get normalized email
        username = valid.email
    except EmailNotValidError as err:
        return jsonify(message=str(err)), 400

    if username in users:       # Check if the email already exists
        return jsonify(message="User already exists"), 400
    
    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    #store users info in in-memory database
    users[username] = {
        'name' : name,
        'password' : hashed_password
    }

    return jsonify(message="User registered successfully"), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('email')
    password = data.get('password')

    if username not in users:
        return jsonify (message="Need to register before you sign-in"), 404
    
    user_password = users[username]['password']

    if bcrypt.check_password_hash(user_password, password):
        return jsonify(message="Login successful"), 200
    else:
        return jsonify(message="Invalid credentials"), 401

if __name__ == '__main__':
    app.run(debug=True)