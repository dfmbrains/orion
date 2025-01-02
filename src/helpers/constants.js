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
  { title: 'menu.home', link: '/' },
  {
    title: 'menu.services',
    link: '/services',
    subLinks: [
      { link: '/services/1', title: 'subMenuServices.subMenu1' },
      { link: '/services/2', title: 'subMenuServices.subMenu2' },
      { link: '/services/3', title: 'subMenuServices.subMenu3' },
      { link: '/services/4', title: 'subMenuServices.subMenu4' },
      { link: '/services/5', title: 'subMenuServices.subMenu5' },
      { link: '/services/6', title: 'subMenuServices.subMenu6' },
      { link: '/services/9', title: 'subMenuServices.subMenu7' },
      { link: '/services/7', title: 'subMenuServices.subMenu8' },
      { link: '/services/8', title: 'subMenuServices.subMenu9' },
    ],
  },
  {
    title: 'menu.company',
    link: '/about',
    subLinks: [
      { link: '/about', title: 'subMenuCompany.subMenu1' },
      { link: '/about#aboutSection6', title: 'subMenuCompany.subMenu2' },
      { link: '/about#aboutSection9', title: 'subMenuCompany.subMenu3' },
    ],
  },
  {
    title: 'menu.clientsAndPartners',
    link: '/clients-&-partners',
    subLinks: [
      {
        link: '/clients-&-partners?part=0',
        title: 'subMenuClientsAndPartners.subMenu1',
      },
      {
        link: '/clients-&-partners?part=1',
        title: 'subMenuClientsAndPartners.subMenu2',
      },
      {
        link: '/clients-&-partners#testimonialsSection',
        title: 'subMenuClientsAndPartners.subMenu3',
      },
    ],
  },
  {
    title: 'menu.blogs',
    link: '/blog',
    subLinks: [
      { link: '/blog/4', title: 'subMenuBlogs.subMenu1' },
      { link: '/blog/1', title: 'subMenuBlogs.subMenu2' },
      { link: '/blog/10', title: 'subMenuBlogs.subMenu3' },
    ],
  },
  {
    title: 'menu.contact',
    link: '/contact?form=0',
    subLinks: [
      {
        link: '/contact?form=0#contactContentSection',
        title: 'menu.getInTouch',
      },
      {
        link: '/contact?form=1#contactContentSection',
        title: 'menu.leaveReview',
      },
    ],
  },
];

export const ImageErrorUrl =
  'https://placehold.co/1920x1080/webp?font=roboto&text=Error';
