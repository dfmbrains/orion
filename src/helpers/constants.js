export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
export const EMAIL_JS_TEMPLATE_ID_FOR_EMAIL =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_EMAIL;
export const EMAIL_JS_TEMPLATE_ID_FOR_CALCULATION =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_CALCULATION;
export const EMAIL_JS_TEMPLATE_ID_FOR_CONTACT =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID_FOR_CONTACT;

export const teamFirebasePath = 'team';
export const blogFirebasePath = 'blog';
export const companyFirebasePath = 'company';
export const serviceFirebasePath = 'service';
export const reviewsFirebasePath = 'reviews';
export const partnersFirebasePath = 'partners';

export const defaultAppLanguage = 'ru';
export const languages = [
  { value: 'ru', title: 'Русский' },
  { value: 'en', title: 'English' },
  {
    value: 'cn',
    title: '简体中文',
  },
];

export const HEADER_BURGER_MENU = [
  { title: 'menu.home', link: '/' },
  { title: 'menu.services', link: '/services' },
  { title: 'menu.company', link: '/about' },
  { title: 'menu.clientsAndPartners', link: '/clients-&-partners' },
  { title: 'menu.blogs', link: '/blog' },
  { title: 'menu.contact', link: '/contact?form=0' },
];

export const ImageErrorUrl =
  'https://placehold.co/1920x1080/webp?font=roboto&text=Error';
