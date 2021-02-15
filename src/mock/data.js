import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tomek Jabko | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tomek',
  subtitle: "I'm a Junior Front-end Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: ' ',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'Hairstyle studio web page with possibility of making appointments',
    info2: '',
    url: 'https://uigy.github.io/hairstyle-studio/',
    repo: 'https://github.com/uigy/hairstyle-studio', // if no repo, the button will not show up
    inProgress: true,
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'uigy@pm.me',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/uigy/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
