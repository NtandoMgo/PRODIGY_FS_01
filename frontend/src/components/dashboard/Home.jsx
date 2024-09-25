import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to My Dashboard</h1>
        <p>Prodigy Full-Stack Development Internship Task_01</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I’m Ntandoyabalele Mngomezulu, an aspiring full-stack developer. I’m passionate about building scalable web applications
          and constantly learning new technologies. Currently, I’m working as a Full-Stack Developer intern at Prodigy, where I
          have been tasked with building an authentication system using React and Flask.
        </p>
      </section>

      <section className="task">
        <h2>Task Explanation</h2>
        <p>
          My task involves developing a user authentication system. The users can register and log in using a simple yet secure
          interface. I used React for the front-end, which communicates with a Flask back-end API for handling user registration
          and login. The passwords are securely hashed using Bcrypt, ensuring that sensitive information is protected.
        </p>
        <p>
          I’ve also implemented CORS for smooth communication between the React app and the Flask server, and in-memory storage
          for managing users in this phase of development, due to time and nature of the task. This project showcases my ability to handle full-stack development
          challenges and integrate front-end and back-end systems seamlessly.
        </p>
      </section>

      <section className="skills">
        <h2>Skills Utilized</h2>
        <ul>
          <li>React (for creating interactive UIs)</li>
          <li>Flask (for back-end API development)</li>
          <li>Flask-Bcrypt (for password hashing)</li>
          <li>JavaScript, HTML, CSS</li>
          <li>Cross-Origin Resource Sharing (CORS)</li>
          <li>In-memory data storage for prototyping</li>
        </ul>
      </section>

      <section className="branding">
        <h2>Why Choose Me?</h2>
        <p>
          As a full-stack developer, I am passionate about delivering high-quality code and building applications that solve real-world problems.
          My internship at Prodigy has allowed me to enhance my technical skills, especially in integrating front-end and back-end technologies.
          I am always eager to learn more, tackle complex challenges, and contribute to meaningful projects.
        </p>
      </section>
    </div>
  );
};

export default Home;
