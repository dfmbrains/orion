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
    title: 'Go to the homepage', // Subtitle used for the title attribute
    ariaLabel: 'menu.home',
  },
  {
    text: 'menu.services',
    link: '/services',
    title: 'Explore our services', // Subtitle with detailed description
    ariaLabel: 'menu.services',
    subLinks: [
      {
        link: '/services/1',
        text: 'subMenuServices.subMenu1',
        title: 'Learn about service 1',
        ariaLabel: 'subMenuServices.subMenu1',
      },
      {
        link: '/services/2',
        text: 'subMenuServices.subMenu2',
        title: 'Learn about service 2',
        ariaLabel: 'subMenuServices.subMenu2',
      },
      {
        link: '/services/3',
        text: 'subMenuServices.subMenu3',
        title: 'Learn about service 3',
        ariaLabel: 'subMenuServices.subMenu3',
      },
      {
        link: '/services/4',
        text: 'subMenuServices.subMenu4',
        title: 'Learn about service 4',
        ariaLabel: 'subMenuServices.subMenu4',
      },
      {
        link: '/services/5',
        text: 'subMenuServices.subMenu5',
        title: 'Learn about service 5',
        ariaLabel: 'subMenuServices.subMenu5',
      },
      {
        link: '/services/6',
        text: 'subMenuServices.subMenu6',
        title: 'Learn about service 6',
        ariaLabel: 'subMenuServices.subMenu6',
      },
      {
        link: '/services/7',
        text: 'subMenuServices.subMenu7',
        title: 'Learn about service 7',
        ariaLabel: 'subMenuServices.subMenu8',
      },
      {
        link: '/services/8',
        text: 'subMenuServices.subMenu8',
        title: 'Learn about service 8',
        ariaLabel: 'subMenuServices.subMenu9',
      },
    ],
  },
  {
    text: 'menu.company',
    link: '/about',
    title: 'Learn more about our company', // Subtitle with helpful info
    ariaLabel: 'menu.company',
    subLinks: [
      {
        link: '/about',
        text: 'subMenuCompany.subMenu1',
        title: 'Discover our company overview',
        ariaLabel: 'subMenuCompany.subMenu1',
      },
      {
        link: '/about#aboutSection6',
        text: 'subMenuCompany.subMenu2',
        title: 'Explore our history and achievements',
        ariaLabel: 'subMenuCompany.subMenu2',
      },
      {
        link: '/about#aboutSection9',
        text: 'subMenuCompany.subMenu3',
        title: 'Understand our mission and vision',
        ariaLabel: 'subMenuCompany.subMenu3',
      },
    ],
  },
  {
    text: 'menu.clientsAndPartners',
    link: '/clients-&-partners',
    title: 'Meet our clients and partners', // Subtitle for context
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
        title: 'Learn about our partners - Group 2',
        ariaLabel: 'subMenuClientsAndPartners.subMenu2',
      },
      {
        link: '/clients-&-partners#testimonialsSection',
        text: 'subMenuClientsAndPartners.subMenu3',
        title: 'See what our clients say about us',
        ariaLabel: 'subMenuClientsAndPartners.subMenu3',
      },
    ],
  },
  {
    text: 'menu.blogs',
    link: '/blog',
    title: 'Read our latest blog posts', // Subtitle for SEO and context
    ariaLabel: 'menu.blogs',
    subLinks: [
      {
        link: '/blog/4',
        text: 'subMenuBlogs.subMenu1',
        title: 'Read blog post 1 about [Topic]',
        ariaLabel: 'subMenuBlogs.subMenu1',
      },
      {
        link: '/blog/1',
        text: 'subMenuBlogs.subMenu2',
        title: 'Read blog post 2 about [Topic]',
        ariaLabel: 'subMenuBlogs.subMenu2',
      },
      {
        link: '/blog/10',
        text: 'subMenuBlogs.subMenu3',
        title: 'Read blog post 3 about [Topic]',
        ariaLabel: 'subMenuBlogs.subMenu3',
      },
    ],
  },
  {
    text: 'menu.contact',
    link: '/contact?form=0',
    title: 'Get in touch with us', // Subtitle to describe contact page
    ariaLabel: 'menu.contact',
    subLinks: [
      {
        link: '/contact?form=0#contactContentSection',
        text: 'buttons.contactUs',
        title: 'Reach out to us through the contact form',
        ariaLabel: 'buttons.contactUs',
      },
      {
        link: '/contact?form=1#contactContentSection',
        text: 'menu.leaveReview',
        title: 'Leave feedback or review our services',
        ariaLabel: 'menu.leaveReview',
      },
    ],
  },
];

export const ImageErrorUrl =
  'https://placehold.co/1920x1080/webp?font=roboto&text=Error';
