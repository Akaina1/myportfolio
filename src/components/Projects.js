// Projects.js
import vkitchenImage from '../IMG/vkitchen.PNG';
import reactCard from '../IMG/card.PNG';
import portfolio1 from '../IMG/portfolio1.PNG';
import businessMan from '../IMG/businessman.PNG';
import advGame from '../IMG/advgame.PNG';
import bankist from '../IMG/bankist-icon.PNG';
import forkify from '../IMG/forkify-icon.PNG';
import mapty from '../IMG/mapty-icon.PNG';
import icLogo from '../IMG/ICLOGO.png';

const projects = [
    {
      id: 1,
      title: 'Venzia Kitchen App',
      image: vkitchenImage,
      technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
      about: 'I wanted to continue practicing with CSS styles and React so I decided to create a simple web app for a fictional restaurant. Created with React, HTML, CSS, and JavaScript. This project is a simple web app that allows users to view the menu and place orders.',
      keyTakeaways: 'I am enjoying React so I decided to create a small app alongside my other course work. This project was a great way to practice my React skills and my CSS styling. The main focus of this was on asthetics and styling to create a visually appealing website. I was able to use my knowledge of CSS to create a responsive website with fluid animations and a clean design.',
      links: {
        github: 'https://github.com/Akaina1/Venezia-Kitchen',
        liveDemo: 'https://akaina1-venezia-kitchen.netlify.app/',
      },
    },
    {
      id: 2,
      title: 'ARG Project',
        image: icLogo, // Replace with the actual image filename or URL
        technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Three.js', 'Framer Motion', 'Redux'],
        about: 'This is my largest project I have ever created, with over 500 working hours.  This is a full stack web application that operates as a central hub for an Augmented Reality Experience.  Players will be given different handmade materials used to solve puzzles.  This is a continuous experience with future updates planned as well as a plan to scale the project as more players join the experience. Due to the nature of this project I cannot release the source code but I am more than happy to talk about the code and show it to any potential employers.',
        keyTakeaways: 'This was my first real project I had to sit down and do a lot of planning for.  It required an intricate database setup and backend to handle my idea of branching paths and differing narratives for players.  Creating a plan for the backend and how it will operate really helped me move quickly when creating the frontend components and logic.  This project has also made me realize the need for device optimization,  future updates will bring better compatibility for different devices.',
        links: {
          liveDemo: 'https://www.insight-collective.org',
        },
    },
    {
        id: 3,
        title: 'Portfolio Website (old version)',
        image: portfolio1, // Replace with the actual image filename or URL
        technologies: ['HTML', 'CSS', 'JavaScript'],
        about: 'This was my latest project after learning HTML, CSS, and JavaScript in my courses as well as taking external courses. This acts as my personal portfolio that I can use to showcase my projects and skills. This project will be continually updated as I learn new skills and create new projects.',
        keyTakeaways: 'I believe this was my favorite project overall as it really let me put my creativity to use. I was able to use my knowledge of HTML, CSS, and JavaScript to create a website that I can be proud to show to others. I was able to use my knowledge of CSS to create a responsive website with fluid animations and a clean design. I was also able to use my knowledge of JavaScript to create a dynamic website that allows users to interact with the website and view my projects. This project really helped me solidify my knowledge of how web design works and the many factors that go into creating visually appealing websites.',
        links: {
          github: 'https://github.com/Akaina1/Akaina1.github.io',
          liveDemo: 'https://akaina1.github.io/',
        },
      },
      {
        id: 4,
        title: 'Business Management System (Console App)',
        image: businessMan, // Replace with the actual image filename or URL
        technologies: ['C#', 'CSVHelper'],
        about: 'This was a project I took on as a final project after learning C#. It is a simple business management system that allows users to manage their inventory, Expenses, Sales, and Marketing. This was the first project I decided to use an external library to manipualte and store data. I used CSVHelper to read and write data to CSV files.',
        keyTakeaways: 'This Project was the first time I had wanted to work on a system to store data from the program. I decided to use CSV files as it was a simple way to store data and I was able to find a library that made it easy to read and write to CSV files. This project was a great way to learn about how to load and save data to files on the users system. I plan to update this project into a web application using the knowledge I have gained.',
        links: {
          github: 'https://github.com/Akaina1/Csharp-Final-Project'
        },
      },
      {
        id: 5,
        title: 'Adventure Game (Console App)',
        image: advGame, // Replace with the actual image filename or URL
        technologies: ['C++'],
        about: 'This was one of my earliest projects that I created from scratch. This is a stylized text adventure game that I created using C++. The game is a simple text based adventure game that allows the user to explore a dungeon and fight monsters. This all runs in the windows console, in the future I may update this project to have a GUI.',
        keyTakeaways: 'This project was my starting point for most of my programming knowledge. Learning a language like C++ was a great way to learn the fundamentals of programming and how to think like a programmer. Understanding how basic functions work and how memory managment works was a great way to learn how to program. This project made me realize the importance of planning and designing a project before starting to code. I had many issues refactoring the project because I had not thought of the data structures I was going to use before starting to code.',
        links: {
          github: 'https://github.com/Akaina1/Adventure-Game'
        },
      },
      {
        id: 6,
        title: 'Bankist Website Landing Page',
        image: bankist, // Replace with the actual image filename or URL
        technologies: ['HTML', 'CSS', 'JavaScript'],
        about: 'This project was created as a part of a course on JavaScript Development by Jonas Schmedtmann. The project is a fictional bank website that allows users to log in, transfer money, request a loan, and close their account. This is the front page of the website. The project was created using HTML, CSS, and JavaScript.',
        keyTakeaways: 'This Project was the first major application we created in the course. It was a great way to learn how to use JavaScript to manipulate the DOM and create a dynamic website. It was also a great way to learn how to use JavaScript objects and arrays to store and manipulate data. This was a good starting foundation that I built upon in later projects. Coming from C++ and C# I found this first project a slight challenge to adapt to a different language and syntax, but I was able to overcome this challenge and learn a lot in the process.',
        links: {
          github: 'https://github.com/Akaina1/bankist-landing',
          liveDemo: 'https://akaina1-bankist.netlify.app/',
        },
      },
      {
        id: 7,
        title: 'Bankist User Account Page',
        image: bankist, // Replace with the actual image filename or URL
        technologies: ['HTML', 'CSS', 'JavaScript'],
        about: 'This was a continuation of the Bankist landing page. This is the user account page that allows users to view their account information, transfer money, request a loan, and close their account. This project was created using HTML, CSS, and JavaScript. Demo can be accessed with the following account info: [username: dw | password: 1111] or [username: jw | password: 2222]',
        keyTakeaways: 'This was a great project that helped me solidify my javascript knowledge. It was great practice in using JavaScript to manipulate the DOM and create a dynamic website. It was also great at teaching how to style a website using CSS to make it look professional.',
        links: {
          github: 'https://github.com/Akaina1/bankist-user-account',
          liveDemo: 'https://akaina1-bankist-user-account.netlify.app',
        },
      },
      {
        id: 8,
        title: 'Mapty Web Application',
        image: mapty, // Replace with the actual image filename or URL
        technologies: ['HTML', 'CSS', 'JavaScript'],
        about: 'This was the second project in my JavaScript course. It was our first project that used a third party library. The project uses the Leaflet library to create a map that allows users to add workouts to the map. The project was created using HTML, CSS, JavaScript. The Leaflet library was used to create the map and the Geolocation API was used to get the users location.',
        keyTakeaways: 'This Project was the first time using an external library as well as learning about APIs. Learning about API requests and responses was a great way to learn about asynchronous JavaScript and how loading content from external sources affects the user experience. This project prompted me to look into various external libraries and APIs that I could use in future projects. This also really made me understand the importance of optimizing our code for all users, including those with slower internet connections.',
        links: {
          github: 'https://github.com/Akaina1/Mapty',
          liveDemo: 'https://akaina1-mapty.netlify.app/',
        },
      },
      {
        id: 9,
        title: 'Forkify Web Application',
        image: forkify, // Replace with the actual image filename or URL
        technologies: ['HTML', 'CSS', 'JavaScript'],
        about: 'This project was our final project in my JavaScript course, it was a culmination of everything we learned in the course. The project uses a custom API created by Jonas Schmedtmann to get recipe data. The project allows users to search for recipes, view the recipe, and create Recipes that can then be saved to local storage. The project was created using HTML, CSS, JavaScript. The project also uses the Parcel bundler to bundle the project files.',
        keyTakeaways: 'This was a great final project that helped me to solidify my knowledge of JavaScript and how to use it to create a dynamic website. This project also helped me to learn about the importance of bundling our code and how it can help to optimize our code for production. It was my first time actually getting code ready for a production environment and it was a great learning experience. Having to get my code ready for production and hosting it on Netlify proved to be a challenge as there was some issues with compatibility between Parcel and the Fractional library that I used for the project. I was able to remedy the issue by switching to a different library and it was a great learning experience in debugging and troubleshooting.',
        links: {
          github: 'https://github.com/Akaina1/Forkify',
          liveDemo: 'https://akaina1-forkify.netlify.app/',
        },
      },
      {
        id: 10,
        title: 'React Profile Card',
        image: reactCard,
        technologies: ['React', 'HTML', 'CSS', 'JavaScript'],
        about: 'After finishing my JavaScript course I decided to learn React and this was the first project I created while in my course. This project is a simple profile card that is a condensed version of my portfolio website. This project was created using React, HTML, CSS, and JavaScript.',
        keyTakeaways: 'I was excited to learn React as it seemed a intuitive way to combine JavaScript, HTML, and CSS. I was able to use my knowledge of these languages to easily create a simple project. As I get further into my React course I will continue to update this project and add more features to it as well as including any new projects I create.',
        links: {
          liveDemo: 'https://akaina1-react-profile.netlify.app/',
      },
      },
    // Add more projects as needed
  ];
  
  export default projects;
  