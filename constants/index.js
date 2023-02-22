/* Map for badges (technologies to icons/images) */
export const BADGE_ICONS = {
  adonisjs: {
    devicon: false,
    link: '/images/icons/adonisjs.svg',
  },
  android: {
    devicon: true,
    link: 'devicon-android-plain colored',
  },
  'ant design': {
    devicon: false,
    link: '/images/icons/antdesign.svg',
  },
  bootstrap: {
    devicon: true,
    link: 'devicon-bootstrap-plain colored',
  },
  c: {
    devicon: true,
    link: 'devicon-c-plain colored',
  },
  css: {
    devicon: true,
    link: 'devicon-css3-plain colored',
  },
  django: {
    devicon: true,
    link: 'devicon-django-plain',
  },
  express: {
    devicon: true,
    link: 'devicon-express-original',
  },
  html: {
    devicon: true,
    link: 'devicon-html5-plain colored',
  },
  firebase: {
    devicon: false,
    link: '/images/icons/firebase.svg',
  },
  java: {
    devicon: true,
    link: 'devicon-java-plain colored',
  },
  javascript: {
    devicon: true,
    link: 'devicon-javascript-plain colored',
  },
  'node.js': {
    devicon: true,
    link: 'devicon-nodejs-plain colored',
  },
  npm: {
    devicon: true,
    link: 'devicon-npm-original-wordmark colored',
  },
  'material ui': {
    devicon: false,
    link: '/images/icons/materialui.svg',
  },
  mongodb: {
    devicon: true,
    link: 'devicon-mongodb-plain colored',
  },
  mysql: {
    devicon: true,
    link: 'devicon-mysql-plain',
  },
  postgresql: {
    devicon: true,
    link: 'devicon-postgresql-plain colored',
  },
  python: {
    devicon: true,
    link: 'devicon-python-plain',
  },
  react: {
    devicon: true,
    link: 'devicon-react-original',
  },
  'react native': {
    devicon: true,
    link: 'devicon-react-original colored',
  },
  redux: {
    devicon: false,
    link: '/images/icons/redux.svg',
  },
  sass: {
    devicon: true,
    link: 'devicon-sass-original colored',
  },
  typescript: {
    devicon: true,
    link: 'devicon-typescript-plain colored',
  },
};

export const CSS_TO_LAZY_LOAD = ['https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css'];

/* Import new project data here and update Projects.jsx accordingly */
export const PROJECTS_DATA = {
  PLOP: {
    title: 'Plop',
    description:
      'Open-source project management web application for teams. It is implemented with <strong>React.js</strong> for the frontend, <strong>Adonis.js</strong> (Node.js framework) as the REST API backend, <strong>Cloudinary</strong> for image storage, and a <strong>PostgreSQL</strong> database. It uses <strong>Ant Design</strong> for UI styling. Some features include task drag-and-drop dashboards, administration hierarchy, chat, logs, and analytics.',
    github: 'https://github.com/giavinh79/Plop',
    demo: 'https://www.plopapp.me/',
    numImages: 6,
    imageName: 'plop',
    tags: ['react', 'javascript', 'adonisjs', 'postgresql', 'ant design', 'node.js', 'styled-components'],
  },
  CODECONNECT: {
    title: 'CodeConnect',
    description:
      'Platform for facilitating collaboration between software developers and establishing an online portfolio. The web app is built using <strong>React.js</strong>, <strong>TypeScript</strong>, <strong>Redux Toolkit</strong> (for state management) and is styled using <strong>Material-UI</strong> and <strong>styled-components</strong>. The mobile app is built with <strong>React Native</strong>. The backend REST API is built with <strong>Django (Python)</strong>. It is still a work in progress (WIP).',
    numImages: 4,
    imageName: 'codeconnect',
    tags: [
      'react',
      'typescript',
      'docker',
      'python',
      'postgresql',
      'react native',
      'django',
      'redux',
      'styled-components',
      'travis',
      'material ui',
    ],
  },
  GYMTRACK: {
    title: 'GymTrack',
    description:
      "This progressive web application allows users to track and manage their fitness journey easily on mobile or web. It is written using <strong>React.js</strong>, <strong>TypeScript</strong>, and <strong>Redux Toolkit</strong>. For styling, <strong>Reactstrap</strong> (Bootstrap) and <strong>SASS/SCSS</strong> (with BEM methodology) is used. It connects with <strong>Google's Firebase</strong> for authentication and uses <strong>MongoDB</strong>   for application storage (ie. user credentials, routines... etc.). It is still a work in progress (WIP).",
    github: 'https://github.com/giavinh79/GymTrack',
    numImages: 3,
    imageName: 'gymtrack',
    tags: ['react', 'typescript', 'sass', 'mongodb', 'node.js', 'express', 'firebase', 'bootstrap'],
  },
  'REACT BODY HIGHLIGHTER': {
    title: 'React Body Highlighter',
    description:
      'Open-source <strong>React.js</strong> NPM package that provides posterior (back) and anterior (front) views of a body model and accepts a variety of props to highlight different muscles. I created this as I could not find a compatible solution to use myself for my React.js fitness web application (GymTrack). This NPM package is also written in <strong>TypeScript</strong> to provide type safety and IntelliSense.',
    github: 'https://github.com/giavinh79/react-body-highlighter',
    demo: 'https://codesandbox.io/s/magical-kowalevski-rzw9d',
    numImages: 1,
    imageName: 'reactbodyhighlighter',
    tags: ['react', 'typescript', 'npm'],
  },
  LEGO: {
    title: 'Lego',
    description:
      'This group engineering project is composed of many different modules (frontend, backend, data extractor module, and reinforcement environment). I worked on the front-end application for the project demo, the data extraction module, and the machine learning environment\'s reward function. The image above shows the basic <strong>React.js</strong> frontend demo skeleton and can be found in this <a class="description-link" target="_blank" href="https://github.com/giavinh79/lego-ml-frontend" rel="noopener noreferrer" aria-label="Lego Frontend">repository</a> and was created using <strong>React.js</strong> and <strong>Material-UI</strong>. The data extraction module was written in <strong>Node.js</strong>. The web scraping and API calling code can be found in this <a class="description-link" target="_blank" href="https://github.com/giavinh79/lego-data-collection" rel="noopener noreferrer" aria-label="Lego Data Scraper">repository</a>. Finally, the build stability reward function I designed for the reinforcement learning environment was programmed in <strong>Python 3</strong>. Code for this module along with the Jupyter Notebook can be found in this <a class="description-link" target="_blank" href="https://github.com/giavinh79/lego-build-stability" rel="noopener noreferrer" aria-label="Lego Build Stability function">repository.</a>',
    github: 'https://github.com/giavinh79/lego-ml-frontend',
    demo: 'https://wizardly-wright-3e4b68.netlify.app',
    numImages: 1,
    imageName: 'lego',
    tags: ['react', 'javascript', 'material ui', 'redux', 'python', 'node.js', 'webscraping'],
  },
  'BANANA RIPENESS DETECTOR': {
    title: 'Banana Ripeness Detector',
    description:
      'Open-ended CIS4720 (image processing) project for detecting the ripeness of a banana. The web application makes it easy to test whether a banana is ripe, overripe, or underripe. This project was created using <strong>React.js</strong> (frontend) and <strong>Python 3</strong> (backend). I personally worked on the Python algorithm and design for this project while my group members worked on the frontend and backend components. The initial load for the demo may take a while as it is hosted for free using Heroku Dynos.',
    github: 'https://github.com/giavinh79/bananascript',
    demo: 'http://stark-gorge-37151.herokuapp.com',
    numImages: 1,
    imageName: 'banana',
    tags: ['react', 'javascript', 'python'],
  },
  'PROJECT FALCON': {
    title: 'Project Falcon',
    description:
      'This was a weekend project I created as a take home assignment which is a very bare-bones form builder similar to Google Forms. It was created with <strong>React.js</strong>, <strong>Redux Toolkit</strong>, <strong>Node.js (Express)</strong>, <strong>PostgreSQL</strong> (w/ ElephantSQL hosting), and <strong>Object.js</strong> + Knex as an ORM & query building solution. It features creation and sharing of forms on a public dashboard. The frontend is hosted with Netlify and the backend is/was hosted with Heroku.',
    github: 'https://github.com/giavinh79/Project-Falcon',
    demo: 'https://infallible-blackwell-0b463a.netlify.app/edit?id=c19993d6-6884-40a8-8e5d-7143bd9b8429',
    numImages: 6,
    imageName: 'projectfalcon',
    tags: ['react', 'redux', 'javascript', 'postgresql', 'node.js', 'object.js'],
  },
  PASSPORT: {
    title: 'Passport',
    description:
      'This project was designed to revamp the UI and UX of NCR\'s product Passport in <strong>React.js</strong>. Passport is a product which allows depositing checks at various locations however it was plagued by poor routing, UX, and design with JSPs (Java Server Pages). This application was developed by a group of co-ops for a two day long hackathon (NCR\'s Global Hackathon) and consists of a frontend web application, backend (<strong>Node.js</strong>), and mobile app (<strong>React Native</strong>). A feature using websockets and QR code scanning was added to solve a problem a teller might run into where the scanner breaks. Now, the teller may take a picture of the check and send it directly to the correct deposit. I mainly worked on the frontend design and functionality. For more information about the project and its functionality, check out the video <a href="https://drive.google.com/drive/folders/1fKULu7cGncxJtD5hclkiOCwozIWdttxj?fbclid=IwAR3fvf87TdViuHd2iH-KcyvfyUCqCMaGF2C1e49KyjY5O2ZhqBVbME6lfW4" target="_blank" rel="noopener noreferrer" aria-label="Passport-4.0 Video">here.</a>',
    github: 'https://github.com/giavinh79/Passport-4.0',
    numImages: 5,
    imageName: 'passport',
    tags: ['react', 'javascript', 'html', 'css', 'material ui'],
  },
  'MR.FLATBEDS': {
    description:
      'This is currently a WIP and currently in a private repository. I used <span style="color: #32738c">React.js</span> to overhaul the frontend design of this company landing page. Accessibility, responsiveness, and loading times (optimizing image sizes) were also improved. The first picture shows my revamp to the company\'s homepage and the second picture shows the original.',
    numImages: 2,
    imageName: 'mrflatbeds',
    tags: ['react', 'javascript', 'html', 'css', 'reactstrap'],
  },
  REYNOLDS: {
    description:
      '<span style="font-weight: bold">Reynold\'s Digital Signage:</span> Open-ended CIS3750 project of sample digital signage. This <a class="description-link" target="_blank" rel="noopener noreferrer" href="http://socsreynolds.site" aria-label="Reynolds Digital Signage">website </a> (no longer deployed) comes with a full fledged login and signup system and allows admins to manipulate content for a dashboard. This project was created using <span style="color: #32738c">Node.js</span>, <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS (Bootstrap)</span>, and <span style="color: #32738c">JavaScript (jQuery)</span>. <span style="color: #32738c">MongoDB</span> and <span style="color: #32738c">Cloudinary</span> were used for data storage (accounts, images... etc.). Additional modules and services such as <span style="color: #32738c">nodemailer</span> (for email signup system), <span style="color: #32738c">Dropzone.js</span> (file drag and drop capability) and <span style="color: #32738c">Openweather API</span> (for temperature information) were also used. Code and project dependencies can be found <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/giavinh79/reynoldstest" aria-label="Reynolds Digital Signage GitHub">here.</a>',
    numImages: 5,
    imageName: 'signage',
    tags: ['node.js', 'javascript', 'cloudinary', 'nodemailer', 'dropzone.js', 'html', 'css', 'mongodb', 'noSQL'],
  },
  'CHAT-CLIENT': {
    description:
      '<span style="font-weight: bold">Chat Client:</span> This is a <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://obscure-harbor-66476.herokuapp.com/" aria-label="Chat Client">chat client </a> web app I made for fun. It was created with <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS (Bootstrap)</span>, <span style="color: #32738c">JavaScript (jQuery)</span>, <span style="color: #32738c">Node.js</span>, <span style="color: #32738c">Express</span>, and <span style="color: #32738c">Socket.IO</span>. The chat works for anonymous users and also has account functionality via <span style="color: #32738c">mongoDB</span>. The DB key is exposed on the GitHub repo so test with username: \'user\' and password: \'default\'. Code can be found <a class="description-link" target="_blank" href="https://github.com/giavinh79/chatclient" rel="noopener noreferrer">here.</a> Due to hosting settings, the website will initially take some time to load.',
    numImages: 2,
    imageName: 'ChatClient',
    tags: ['node.js', 'socket.io', 'express', 'javascript', 'mongodb', 'nosql', 'html', 'css'],
  },
  'MARK MANAGEMENT': {
    description:
      '<span style="font-weight: bold">Mark Management:</span> A full stack website I created for fun in order to help users manage and predict their grades (no longer hosted). It was created using <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS</span>, <span style="color: #32738c">Javascript</span>, <span style="color: #32738c">Java (Servlets and JSPs)</span> and <span style="color: #32738c">mySQL</span>. It is still a WIP (Work in Progress). Functionality includes: Pages set up, form validation, signing up, logging in, responsive design, and adding/removing grades. To do: enhance grades page, SQL injection protection, and cookies. Test with username: \'user\' and password: \'default\'. Code can be found <a class="description-link" target="_blank" href="https://github.com/giavinh79/markmanagement" rel="noopener noreferrer">here.</a>',
    numImages: 1,
    imageName: 'markmanagement',
    tags: ['java', 'jsp', 'servlet', 'html', 'css', 'mysql', 'sql'],
  },
  'JAVA STORE': {
    description:
      '<span style="font-weight: bold">Java Store:</span> <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/giavinh79/JavaStore" aria-label="Java Electronic Store">Java program</a> which allows users to store books/electronics, search the store using filters, and supports saving to/loading from text files. The program uses object-oriented concepts (polymorphism, encapsulation, abstraction, and inheritance), data structures like HashMaps and ArrayLists, Swing for the GUI, and has defensive programming/exception handling.',
    numImages: 4,
    imageName: 'store',
    tags: ['java'],
  },
  ICALENDAR: {
    description:
      '<span style="font-weight: bold">iCalendar:</span> (<a class="description-link" target="_blank" rel="noopener noreferrer" href="https://tools.ietf.org/html/rfc5545">.ics files</a>) parser and information extractor. The frontend was created using <span style="color: #32738c">Python 3 (TkInter)</span>, logic/core functionality was implemented with <span style="color: #32738c">C</span>, and <span style="color: #32738c">Python</span> was used to communicate with the <span style="color: #32738c">mySQL</span> database. This program was setup and created all in the Linux terminal. Code can be found <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/giavinh79/calendarPlus-SQL">here.</a>',
    numImages: 3,
    imageName: 'calendar',
    tags: ['c', 'python', 'sql', 'mysql'],
  },
  'FRENCH CONJUGATOR': {
    title: 'French Conjugator',
    description:
      'An <strong>Android</strong> app I created for fun to help users with their french conjugation skills. It was created using <strong>Java</strong> in Android Studio.',
    numImages: 3,
    imageName: 'french',
    tags: ['java', 'android'],
  },
};
