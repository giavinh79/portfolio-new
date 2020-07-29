export const PROJECT = {
  PLOP: 'plop,',
  NONE: 'none',
};

/* Import new project data here and update Projects.jsx accordingly */
export const PROJECTS_DATA = [
  {
    description:
      '<span style="font-weight: bold">Plop:</span> This web application side project is a simple project management tool for small teams. It is currently at version 0.8 and the main features currently in development are web sockets (to show live changes, have chat, and have real-time notifications) and administration levels (to manage members and have a hierarchy in place). This project was created using <span style="color: #32738c">React.js</span>, <span style="color: #32738c">Ant Design</span> and <span style="color: #32738c">Adonis.js</span> (backend Node.js web framework). The application is currently deployed on <a class="description-link" target="_blank" href="https://plop.team" rel="noopener noreferrer" aria-label="Plop website">https://plop.team</a> using Netlify and communicates with the REST API hosted at <a class="description-link" target="_blank" href="https://github.com/GV79/Plop" rel="noopener noreferrer" aria-label="Plop Backend">https://plopwebapp.herokuapp.com</a> through Heroku. Code and project dependencies can be found <a class="description-link" target="_blank" href="https://github.com/GV79/Plop" rel="noopener noreferrer" aria-label="Plop GitHub">here.</a>',
    numImages: 5,
    imageName: 'plop',
    imageExtension: '.png',
    tags: ['react', 'javascript', 'adonis', 'html', 'mysql', 'postgresql', 'orm', 'ant design', 'node.js', 'css'],
  },
  {
    description:
      '<span style="font-weight: bold">Lego Project:</span> This is a design project done for school which is composed of many different modules (frontend, backend, data extractor module, reinforcement environment...). I mainly worked on the front-end application for the project demo, the data extraction module, and the machine learning environment\'s reward function. The main RL environment repo is hosted privately. The first image represents the basic frontend demo skeleton. The project\'s code and deployment link can be found <a class="description-link" target="_blank" href="https://github.com/GV79/lego-ml-frontend" rel="noopener noreferrer" aria-label="Lego Frontend">here</a> and was created using <span style="color: #32738c">React.js</span> and <span style="color: #32738c">Material-UI</span>. The second image represents the backend data scraper however has been deprecated due to no longer needing this type of data. Written with <span style="color: #32738c">Node.js</span>, this web-scraping and API calling application\'s repo can be found <a class="description-link" target="_blank" href="https://github.com/GV79/lego-data-collection" rel="noopener noreferrer" aria-label="Lego Data Scraper">here</a>. Finally, the third image represents some output from the build stability reward function I designed for the Lego RL environment. This module was programmed in <span style="color: #32738c">Python 3</span> using PyCharm. Code for this project along with the Jupyter Notebook can be found <a class="description-link" target="_blank" href="https://github.com/GV79/lego-build-stability" rel="noopener noreferrer" aria-label="Lego Build Stability function">here.</a>',
    numImages: 3,
    imageName: 'lego',
    imageExtension: '.png',
    tags: ['react', 'javascript', 'material-ui', 'html', 'redux', 'css', 'python', 'node.js', 'webscraping'],
  },
  {
    description:
      '<span style="font-weight: bold">Banana Ripeness Detector:</span> Open-ended CIS4720 (image processing) project for detecting the ripeness of a banana. This <a class="description-link" target="_blank" rel="noopener noreferrer" href="http://stark-gorge-37151.herokuapp.com/" aria-label="Banana Ripeness Detector">web application </a> makes it easy to test whether a banana is ripe, overripe, or underripe. It may take some time to initially load the website due to being deployed using a free Heroku dyno. This project was created using <span style="color: #32738c">React.js</span> (frontend) and <span style="color: #32738c">Python 3</span> (backend). I worked on the algorithm and front-end design for this project. Code and project dependencies can be found <a class="description-link" target="_blank" href="https://github.com/peken97/BananaRipenessDetector" rel="noopener noreferrer" aria-label="Banana Ripeness Detector GitHub">here.</a>',
    numImages: 1,
    imageName: 'banana',
    imageExtension: '.png',
    tags: ['react', 'javascript', 'python', 'html', 'css'],
  },
  {
    description:
      '<span style="font-weight: bold">Passport 4.0:</span> This project was designed to completely reimagine the UI and UX of NCR\'s product Passport in <span style="color: #32738c">React.js</span>. Passport is a product which allows depositing checks at various locations however it was plagued by poor routing, UX, and design with JSPs (Java Server Pages). This application was developed by a group of co-ops for a two day long hackathon (NCR\'s Global Hackathon) and consists of a frontend web app, backend (<span style="color: #32738c">Node.js</span>), and mobile app (<span style="color: #32738c">React Native</span>). In addition to the frontend overhaul, the mobile app used web sockets and QR code scanning to show a potential solution to a problem a teller might have using Passport (if the scanner breaks, the teller may take a picture of the check and send it directly to the correct deposit). I mainly worked on the frontend design and functionality. Code and project dependencies can be found <a class="description-link" target="_blank" href="https://github.com/GV79/Passport-4.0" rel="noopener noreferrer" aria-label="Passport-4.0 GitHub">here.</a> For more information about the project and its functionality, check out it\'s video <a class="description-link" target="_blank" href="https://drive.google.com/drive/folders/1fKULu7cGncxJtD5hclkiOCwozIWdttxj?fbclid=IwAR3fvf87TdViuHd2iH-KcyvfyUCqCMaGF2C1e49KyjY5O2ZhqBVbME6lfW4" rel="noopener noreferrer" aria-label="Passport-4.0 Video">here.</a> As it was a hackathon, the code structure and styling could be made a lot better.',
    numImages: 5,
    imageName: 'passport',
    imageExtension: '.jpg',
    tags: ['react', 'javascript', 'html', 'css', 'material-ui'],
  },
  {
    description:
      '<span style="font-weight: bold">MR.Flatbeds:</span> This is currently a WIP and currently in a private repository. I used <span style="color: #32738c">React.js</span> to overhaul the frontend design of this company landing page. Accessibility, responsiveness, and loading times (optimizing image sizes) were also improved. The first picture shows my revamp to the company\'s homepage and the second picture shows the original.',
    numImages: 2,
    imageName: 'mrflatbeds',
    imageExtension: '.jpg',
    tags: ['react', 'javascript', 'html', 'css', 'reactstrap'],
  },
  {
    description:
      '<span style="font-weight: bold">Reynold\'s Digital Signage:</span> Open-ended CIS3750 project of sample digital signage. This <a class="description-link" target="_blank" rel="noopener noreferrer" href="http://socsreynolds.site" aria-label="Reynolds Digital Signage">website </a> (no longer deployed) comes with a full fledged login and signup system and allows admins to manipulate content for a dashboard. This project was created using <span style="color: #32738c">Node.js</span>, <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS (Bootstrap)</span>, and <span style="color: #32738c">JavaScript (jQuery)</span>. <span style="color: #32738c">MongoDB</span> and <span style="color: #32738c">Cloudinary</span> were used for data storage (accounts, images... etc.). Additional modules and services such as <span style="color: #32738c">nodemailer</span> (for email signup system), <span style="color: #32738c">Dropzone.js</span> (file drag and drop capability) and <span style="color: #32738c">Openweather API</span> (for temperature information) were also used. Code and project dependencies can be found <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/GV79/reynoldstest" aria-label="Reynolds Digital Signage GitHub">here.</a>',
    numImages: 5,
    imageName: 'signage',
    imageExtension: '.png',
    tags: ['node.js', 'javascript', 'cloudinary', 'nodemailer', 'dropzone.js', 'html', 'css', 'mongodb', 'noSQL'],
  },
  {
    description:
      '<span style="font-weight: bold">Chat Client:</span> This is a <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://obscure-harbor-66476.herokuapp.com/" aria-label="Chat Client">chat client </a> web app I made for fun. It was created with <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS (Bootstrap)</span>, <span style="color: #32738c">JavaScript (jQuery)</span>, <span style="color: #32738c">Node.js</span>, <span style="color: #32738c">Express</span>, and <span style="color: #32738c">Socket.IO</span>. The chat works for anonymous users and also has account functionality via <span style="color: #32738c">mongoDB</span>. The DB key is exposed on the GitHub repo so test with username: \'user\' and password: \'default\'. Code can be found <a class="description-link" target="_blank" href="https://github.com/GV79/chatclient" rel="noopener noreferrer">here.</a> Due to hosting settings, the website will initially take some time to load.',
    numImages: 2,
    imageName: 'ChatClient',
    imageExtension: '.png',
    tags: ['node.js', 'socket.io', 'express', 'javascript', 'mongodb', 'nosql', 'html', 'css'],
  },
  {
    description:
      '<span style="font-weight: bold">Mark Management:</span> A full stack website I created for fun in order to help users manage and predict their grades (no longer hosted). It was created using <span style="color: #32738c">HTML</span>, <span style="color: #32738c">CSS</span>, <span style="color: #32738c">Javascript</span>, <span style="color: #32738c">Java (Servlets and JSPs)</span> and <span style="color: #32738c">mySQL</span>. It is still a WIP (Work in Progress). Functionality includes: Pages set up, form validation, signing up, logging in, responsive design, and adding/removing grades. To do: enhance grades page, SQL injection protection, and cookies. Test with username: \'user\' and password: \'default\'. Code can be found <a class="description-link" target="_blank" href="https://github.com/GV79/markmanagement" rel="noopener noreferrer">here.</a>',
    numImages: 1,
    imageName: 'markmanagement',
    imageExtension: '.png',
    tags: ['java', 'jsp', 'servlet', 'html', 'css', 'mysql', 'sql'],
  },
  {
    description:
      '<span style="font-weight: bold">Java Store:</span> <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/GV79/JavaStore" aria-label="Java Electronic Store">Java program</a> which allows users to store books/electronics, search the store using filters, and supports saving to/loading from text files. The program uses object-oriented concepts (polymorphism, encapsulation, abstraction, and inheritance), data structures like HashMaps and ArrayLists, Swing for the GUI, and has defensive programming/exception handling.',
    numImages: 4,
    imageName: 'store',
    imageExtension: '.png',
    tags: ['java'],
  },
  {
    description:
      '<span style="font-weight: bold">iCalendar:</span> (<a class="description-link" target="_blank" rel="noopener noreferrer" href="https://tools.ietf.org/html/rfc5545">.ics files</a>) parser and information extractor. The frontend was created using <span style="color: #32738c">Python 3 (TkInter)</span>, logic/core functionality was implemented with <span style="color: #32738c">C</span>, and <span style="color: #32738c">Python</span> was used to communicate with the <span style="color: #32738c">mySQL</span> database. This program was setup and created all in the Linux terminal. Code can be found <a class="description-link" target="_blank" rel="noopener noreferrer" href="https://github.com/GV79/calendarPlus-SQL">here.</a>',
    numImages: 3,
    imageName: 'calendar',
    imageExtension: '.jpg',
    tags: ['c', 'python', 'sql', 'mysql'],
  },
  {
    description:
      '<span style="font-weight: bold">French Conjugator:</span> An Android app I created for fun to help users with their french conjugation skills. It was created using <span style="color: #32738c">Java</span> in <span style="color: #32738c">Android Studio</span> and is still a WIP.',
    numImages: 4,
    imageName: 'french',
    imageExtension: '.png',
    tags: ['java', 'android'],
  },
];
