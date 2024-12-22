export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
export const EMAIL_JS_TEMPLATE_ID_FOR_EMAIL =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_EMAIL;
export const EMAIL_JS_TEMPLATE_ID_FOR_CALCULATION =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_CALCULATION;
export const EMAIL_JS_TEMPLATE_ID_FOR_CONTACT =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_CONTACT;

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
      { link: '/services', title: 'subMenuServices.subMenu1' },
      { link: '/services', title: 'subMenuServices.subMenu2' },
      { link: '/services', title: 'subMenuServices.subMenu3' },
      { link: '/services', title: 'subMenuServices.subMenu4' },
      { link: '/services', title: 'subMenuServices.subMenu5' },
      { link: '/services', title: 'subMenuServices.subMenu6' },
      { link: '/services', title: 'subMenuServices.subMenu7' },
      { link: '/services', title: 'subMenuServices.subMenu8' },
      { link: '/services', title: 'subMenuServices.subMenu9' },
    ],
  },
  {
    title: 'menu.company',
    link: '/about',
    subLinks: [
      { link: '/about', title: 'subMenuCompany.subMenu1' },
      { link: '/about', title: 'subMenuCompany.subMenu2' },
      { link: '/about', title: 'subMenuCompany.subMenu3' },
    ],
  },
  {
    title: 'menu.clientsAndPartners',
    link: '/clients-&-partners',
    subLinks: [
      {
        link: '/clients-&-partners',
        title: 'subMenuClientsAndPartners.subMenu1',
      },
      {
        link: '/clients-&-partners',
        title: 'subMenuClientsAndPartners.subMenu2',
      },
      {
        link: '/clients-&-partners',
        title: 'subMenuClientsAndPartners.subMenu3',
      },
    ],
  },
  {
    title: 'menu.blogs',
    link: '/blog',
    subLinks: [
      { link: '/blog', title: 'subMenuBlogs.subMenu1' },
      { link: '/blog', title: 'subMenuBlogs.subMenu2' },
      { link: '/blog', title: 'subMenuBlogs.subMenu3' },
    ],
  },
  { title: 'menu.contact', link: '/contact?form=0' },
];

export const ImageErrorUrl =
  'https://placehold.co/1920x1080/webp?font=roboto&text=Error';
