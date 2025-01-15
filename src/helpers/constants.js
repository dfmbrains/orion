export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
export const EMAIL_JS_TEMPLATE_ID_FOR_EMAIL =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_EMAIL;
export const EMAIL_JS_TEMPLATE_ID_FOR_CALCULATION =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_CALCULATION;
export const EMAIL_JS_TEMPLATE_ID_FOR_CONTACT =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_CONTACT;
export const EMAIL_JS_TEMPLATE_ID_FOR_REVIEW =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_REVIEW;

export const CAPTCHA_SITE_KEY = process.env.REACT_APP_CAPTCHA_SITE_KEY;
export const CAPTCHA_SECRET_KEY = process.env.REACT_APP_CAPTCHA_SEKRET_KEY;

export const ENVIROMENT = process.env.REACT_APP_ENV;
export const APP_URL = process.env.REACT_APP_URL;

export const defaultAppLanguage = 'ru';
export const languages = [
  { value: 'ru', title: 'Русский' },
  { value: 'en', title: 'English' },
  {
    value: 'zh',
    title: '简体中文',
  },
];

export const HEADER_BURGER_MENU = [
  {
    text: 'menu.home',
    link: '/home',
    ariaLabel: 'menu.home',
  },
  {
    text: 'menu.services',
    link: '/services',
    ariaLabel: 'menu.services',
    subLinks: [
      {
        link: '/services/1',
        text: 'subMenuServices.subMenu1',
        ariaLabel: 'subMenuServices.subMenu1',
      },
      {
        link: '/services/2',
        text: 'subMenuServices.subMenu2',
        ariaLabel: 'subMenuServices.subMenu2',
      },
      {
        link: '/services/3',
        text: 'subMenuServices.subMenu3',
        ariaLabel: 'subMenuServices.subMenu3',
      },
      {
        link: '/services/4',
        text: 'subMenuServices.subMenu4',
        ariaLabel: 'subMenuServices.subMenu4',
      },
      // {
      //   link: '/services/5',
      //   text: 'subMenuServices.subMenu5',
      //   ariaLabel: 'subMenuServices.subMenu5',
      // },
      {
        link: '/services/6',
        text: 'subMenuServices.subMenu6',
        ariaLabel: 'subMenuServices.subMenu6',
      },
      {
        link: '/services/7',
        text: 'subMenuServices.subMenu7',
        ariaLabel: 'subMenuServices.subMenu8',
      },
      {
        link: '/services/8',
        text: 'subMenuServices.subMenu8',
        ariaLabel: 'subMenuServices.subMenu9',
      },
    ],
  },
  {
    text: 'menu.company',
    link: '/about',
    ariaLabel: 'menu.company',
    subLinks: [
      {
        link: '/about',
        text: 'subMenuCompany.subMenu1',
        ariaLabel: 'subMenuCompany.subMenu1',
      },
      {
        link: '/about#aboutSection6',
        text: 'subMenuCompany.subMenu2',
        ariaLabel: 'subMenuCompany.subMenu2',
      },
      {
        link: '/about#aboutSection9',
        text: 'subMenuCompany.subMenu3',
        ariaLabel: 'subMenuCompany.subMenu3',
      },
    ],
  },
  {
    text: 'menu.clientsAndPartners',
    link: '/clients-&-partners',
    ariaLabel: 'menu.clientsAndPartners',
    subLinks: [
      {
        link: '/clients-&-partners?part=0',
        text: 'subMenuClientsAndPartners.subMenu1',
        title: 'Learn about our partners - Group 1',
        ariaLabel: 'subMenuClientsAndPartners.subMenu1',
      },
      {
        link: '/clients-&-partners?part=1',
        text: 'subMenuClientsAndPartners.subMenu2',
        ariaLabel: 'subMenuClientsAndPartners.subMenu2',
      },
      {
        link: '/clients-&-partners#testimonialsSection',
        text: 'subMenuClientsAndPartners.subMenu3',
        ariaLabel: 'subMenuClientsAndPartners.subMenu3',
      },
    ],
  },
  {
    text: 'menu.blogs',
    link: '/blog',
    ariaLabel: 'menu.blogs',
    subLinks: [
      {
        link: '/blog/4',
        text: 'subMenuBlogs.subMenu1',
        ariaLabel: 'subMenuBlogs.subMenu1',
      },
      {
        link: '/blog/1',
        text: 'subMenuBlogs.subMenu2',
        ariaLabel: 'subMenuBlogs.subMenu2',
      },
      {
        link: '/blog/10',
        text: 'subMenuBlogs.subMenu3',
        ariaLabel: 'subMenuBlogs.subMenu3',
      },
    ],
  },
  {
    text: 'menu.contacts',
    link: '/contact?form=0',
    title: 'Get in touch with us', // Subtitle to describe contact page
    ariaLabel: 'menu.contacts',
    subLinks: [
      {
        link: '/contact?form=0#contactContentSection',
        text: 'buttons.contactUs',
        ariaLabel: 'buttons.contactUs',
      },
      {
        link: '/contact?form=1#contactContentSection',
        text: 'menu.leaveReview',
        ariaLabel: 'menu.leaveReview',
      },
    ],
  },
];

export const ImageErrorUrl =
  'https://placehold.co/1920x1080/webp?font=roboto&text=Error';
