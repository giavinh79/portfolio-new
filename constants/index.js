/* Import new project data here and update Projects.jsx accordingly */
export const PROJECTS_DATA = {
  PLOP: {
    title: 'Plop',
    description:
      'Open-source project management web application for teams. It is implemented with <strong>React.js</strong> for the frontend, <strong>Adonis.js</strong> (Node.js framework) as the REST API backend, <strong>Cloudinary</strong> for image storage, and a <strong>PostgreSQL</strong> database. It uses <strong>Ant Design</strong> for UI styling. Some features include task drag-and-drop dashboards, administration hierarchy, chat, logs, and analytics.',
    github: 'https://github.com/GV79/Plop',
    demo: 'https://plop.team',
    numImages: 6,
    imageName: 'plop',
    imageExtension: '.png',
    tags: ['react', 'javascript', 'adonis js', 'postgresql', 'ant design', 'node.js', 'styled-components'],
  },
  CODECONNECT: {
    title: 'CodeConnect',
    description:
      'Platform for facilitating collaboration between software developers and establishing an online portfolio. The web app is built using <strong>React.js</strong>, <strong>TypeScript</strong>, <strong>Redux Toolkit</strong> (for state management) and is styled using <strong>Material-UI</strong> and <strong>styled-components</strong>. The mobile app is built with <strong>React Native</strong>. The backend REST API is built with <strong>Django (Python)</strong>. It is still a work in progress (WIP).',
    numImages: 4,
    imageName: 'codeconnect',
    imageExtension: '.png',
    tags: [
      'react',
      'typescript',
      'python',
      'postgresql',
      'react native',
      'django',
      'redux',
      'styled-components',
      'material ui',
    ],
  },
  GYMTRACK: {
    title: 'GymTrack',
    description:
      "This progressive web application allows users to track and manage their fitness journey easily on mobile or web. It is written using <strong>React.js</strong>, <strong>TypeScript</strong>, and <strong>Redux Toolkit</strong>. For styling, <strong>Reactstrap</strong> (Bootstrap) and <strong>SASS/SCSS</strong> (with BEM methodology) is used. It connects with <strong>Google's Firebase</strong> for authentication and uses <strong>MongoDB</strong>   for application storage (ie. user credentials, routines... etc.). It is still a work in progress (WIP).",
    github: 'https://github.com/GV79/GymTrack',
    numImages: 3,
    imageName: 'gymtrack',
    imageExtension: '.png',
    tags: ['react', 'typescript', 'sass', 'mongodb', 'node.js', 'express', 'firebase', 'bootstrap'],
  },
  'REACT BODY HIGHLIGHTER': {
    title: 'React Body Highlighter',
    description:
      'Open-source <strong>React.js</strong> NPM package that provides posterior (back) and anterior (front) views of a body model and accepts a variety of props to highlight different muscles. I created this as I could not find a compatible solution to use myself for my React.js fitness web application (GymTrack). This NPM package is also written in <strong>TypeScript</strong> to provide type safety and IntelliSense.',
    numImages: 1,
    imageName: 'reactbodyhighlighter',
    imageExtension: '.png',
    tags: ['react', 'typescript', 'npm'],
  },
  'LEGO-FRONTEND': {
    title: 'Lego ML Project',
    description:
      'This was a design project done for school which is composed of many different modules (frontend, backend, data extractor module, reinforcement environment...). I mainly worked on the front-end application for the project demo, the data extraction module, and the machine learning environment\'s reward function. The main RL environment repo is hosted privately. The first image represents the basic frontend demo skeleton. The project\'s code and deployment link can be found <a class="description-link" target="_blank" href="https://github.com/GV79/lego-ml-frontend" rel="noopener noreferrer" aria-label="Lego Frontend">here</a> and was created using <span style="color: #32738c">React.js</span> and <span style="color: #32738c">Material-UI</span>. The second image represents the backend data scraper however has been deprecated due to no longer needing this type of data. Written with <span style="color: #32738c">Node.js</span>, this web-scraping and API calling application\'s repo can be found <a class="description-link" target="_blank" href="https://github.com/GV79/lego-data-collection" rel="noopener noreferrer" aria-label="Lego Data Scraper">here</a>. Finally, the third image represents some output from the build stability reward function I designed for the Lego RL environment. This module was programmed in <span style="color: #32738c">Python 3</span> using PyCharm. Code for this project along with the Jupyter Notebook can be found <a class="description-link" target="_blank" href="https://github.com/GV79/lego-build-stability" rel="noopener noreferrer" aria-label="Lego Build Stability function">here.</a>',
    numImages: 3,
    imageName: 'lego',
    imageExtension: '.png',
    tags: ['react', 'javascript', 'material-ui', 'html', 'redux', 'css', 'python', 'node.js', 'webscraping'],
  },
  'BANANA-RIPENESS-DETECTOR': {
    description:
      'Open-ended CIS4720 (image processing) project for detecting the ripeness of a banana. The web application makes it easy to test whether a banana is ripe, overripe, or underripe. This project was created using <strong>React.js</strong> (frontend) and <span style="color: #32738c">Python 3</span> (backend). I personally worked on the Python algorithm and design for this project while my group members worked on the frontend and backend.',
    numImages: 1,
    imageName: 'banana',
    imageExtension: '.png',
    tags: ['react', 'javascript', 'python', 'html', 'css'],
  },
  PASSPORT: {
    description:
      '<span style="font-weight: bold">Passport 4.0:</span> This project was designed to completely reimagine the UI and UX of NCR\'s product Passport in <span style="color: #32738c">React.js</span>. Passport is a product which allows depositing checks at various locations however it was plagued by poor routing, UX, and design with JSPs (Java Server Pages). This application was developed by a group of co-ops for a two day long hackathon (NCR\'s Global Hackathon) and consists of a frontend web app, backend (<span style="color: #32738c">Node.js</span>), and mobile app (<span style="color: #32738c">React Native</span>). In addition to the frontend overhaul, the mobile app used web sockets and QR code scanning to show a potential solution to a problem a teller might have using Passport (if the scanner breaks, the teller may take a picture of the check and send it directly to the correct deposit). I mainly worked on the frontend design and functionality. Code and project dependencies can be found <a class="description-link" target="_blank" href="https://github.com/GV79/Passport-4.0" rel="noopener noreferrer" aria-label="Passport-4.0 GitHub">here.</a> For more information about the project and its functionality, check out it\'s video <a class="description-link" target="_blank" href="https://drive.google.com/drive/folders/1fKULu7cGncxJtD5hclkiOCwozIWdttxj?fbclid=IwAR3fvf87TdViuHd2iH-KcyvfyUCqCMaGF2C1e49KyjY5O2ZhqBVbME6lfW4" rel="noopener noreferrer" aria-label="Passport-4.0 Video">here.</a> As it was a hackathon, the code structure and styling could be made a lot better.',
    numImages: 5,
    imageName: 'passport',
    imageExtension: '.jpg',
    tags: ['react', 'javascript', 'html', 'css', 'material-ui'],
  },
  'MR.FLATBEDS': {
    description:
      '<span style="font-weight: bold">MR.Flatbeds:</span> This is currently a WIP and currently in a private repository. I used <span style="color: #32738c">React.js</span> to overhaul the frontend design of this company landing page. Accessibility, responsiveness, and loading times (optimizing image sizes) were also improved. The first picture shows my revamp to the company\'s homepage and the second picture shows the original.',
    numImages: 2,
    imageName: 'mrflatbeds',
    imageExtension: '.jpg',
    tags: ['react', 'javascript', 'html', 'css', 'reactstrap'],
  },
  REYNOLDS: {
    description:
      '<span style="font-weight: bold">Reynold\'s Digital Signage:</span> Open-ended CIS3750 project of sample digital signage. This <a class="description-link" target="_blank" rel="noopener noreferrer" href="http://socsreynolds.site" aria-label="Reynolds Digital Signage">website </a> (no longer deployed) comes with a full fledged login and signup system and allows admins to manipulate content for a dashboard. This project was created using <span style="color: #32738c">Node.js</span>, <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS (Bootstrap)</span>, and <span style="color: #32738c">JavaScript (jQuery)</span>. <span style="color: #32738c">MongoDB</span> and <span style="color: #32738c">Cloudinary</span> were used for data storage (accounts, images... etc.). Additional modules and services such as <span style="color: #32738c">nodemailer</span> (for email signup system), <span style="color: #32738c">Dropzone.js</span> (file drag and drop capability) and <span style="color: #32738c">Openweather API</span> (for temperature information) were also used. Code and project dependencies can be found <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/GV79/reynoldstest" aria-label="Reynolds Digital Signage GitHub">here.</a>',
    numImages: 5,
    imageName: 'signage',
    imageExtension: '.png',
    tags: ['node.js', 'javascript', 'cloudinary', 'nodemailer', 'dropzone.js', 'html', 'css', 'mongodb', 'noSQL'],
  },
  'CHAT-CLIENT': {
    description:
      '<span style="font-weight: bold">Chat Client:</span> This is a <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://obscure-harbor-66476.herokuapp.com/" aria-label="Chat Client">chat client </a> web app I made for fun. It was created with <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS (Bootstrap)</span>, <span style="color: #32738c">JavaScript (jQuery)</span>, <span style="color: #32738c">Node.js</span>, <span style="color: #32738c">Express</span>, and <span style="color: #32738c">Socket.IO</span>. The chat works for anonymous users and also has account functionality via <span style="color: #32738c">mongoDB</span>. The DB key is exposed on the GitHub repo so test with username: \'user\' and password: \'default\'. Code can be found <a class="description-link" target="_blank" href="https://github.com/GV79/chatclient" rel="noopener noreferrer">here.</a> Due to hosting settings, the website will initially take some time to load.',
    numImages: 2,
    imageName: 'ChatClient',
    imageExtension: '.png',
    tags: ['node.js', 'socket.io', 'express', 'javascript', 'mongodb', 'nosql', 'html', 'css'],
  },
  'MARK-MANAGEMENT': {
    description:
      '<span style="font-weight: bold">Mark Management:</span> A full stack website I created for fun in order to help users manage and predict their grades (no longer hosted). It was created using <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS</span>, <span style="color: #32738c">Javascript</span>, <span style="color: #32738c">Java (Servlets and JSPs)</span> and <span style="color: #32738c">mySQL</span>. It is still a WIP (Work in Progress). Functionality includes: Pages set up, form validation, signing up, logging in, responsive design, and adding/removing grades. To do: enhance grades page, SQL injection protection, and cookies. Test with username: \'user\' and password: \'default\'. Code can be found <a class="description-link" target="_blank" href="https://github.com/GV79/markmanagement" rel="noopener noreferrer">here.</a>',
    numImages: 1,
    imageName: 'markmanagement',
    imageExtension: '.png',
    tags: ['java', 'jsp', 'servlet', 'html', 'css', 'mysql', 'sql'],
  },
  'JAVA-STORE': {
    description:
      '<span style="font-weight: bold">Java Store:</span> <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/GV79/JavaStore" aria-label="Java Electronic Store">Java program</a> which allows users to store books/electronics, search the store using filters, and supports saving to/loading from text files. The program uses object-oriented concepts (polymorphism, encapsulation, abstraction, and inheritance), data structures like HashMaps and ArrayLists, Swing for the GUI, and has defensive programming/exception handling.',
    numImages: 4,
    imageName: 'store',
    imageExtension: '.png',
    tags: ['java'],
  },
  ICALENDAR: {
    description:
      '<span style="font-weight: bold">iCalendar:</span> (<a class="description-link" target="_blank" rel="noopener noreferrer" href="https://tools.ietf.org/html/rfc5545">.ics files</a>) parser and information extractor. The frontend was created using <span style="color: #32738c">Python 3 (TkInter)</span>, logic/core functionality was implemented with <span style="color: #32738c">C</span>, and <span style="color: #32738c">Python</span> was used to communicate with the <span style="color: #32738c">mySQL</span> database. This program was setup and created all in the Linux terminal. Code can be found <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/GV79/calendarPlus-SQL">here.</a>',
    numImages: 3,
    imageName: 'calendar',
    imageExtension: '.jpg',
    tags: ['c', 'python', 'sql', 'mysql'],
  },
  'FRENCH-CONJUGATOR': {
    description:
      '<span style="font-weight: bold">French Conjugator:</span> An Android app I created for fun to help users with their french conjugation skills. It was created using <span style="color: #32738c">Java</span> in <span style="color: #32738c">Android Studio</span> and is still a WIP.',
    numImages: 4,
    imageName: 'french',
    imageExtension: '.png',
    tags: ['java', 'android'],
  },
};
