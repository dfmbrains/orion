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
    title: 'menu.home',
    link: '/',
    subtitle: 'Go to the homepage', // Subtitle used for the title attribute
    ariaLabel: 'Go to home page',
  },
  {
    title: 'menu.services',
    link: '/services',
    subtitle: 'Explore our services', // Subtitle with detailed description
    ariaLabel: 'View our services',
    subLinks: [
      {
        link: '/services/1',
        title: 'subMenuServices.subMenu1',
        subtitle: 'Learn about service 1',
        ariaLabel: 'View details about service 1',
      },
      {
        link: '/services/2',
        title: 'subMenuServices.subMenu2',
        subtitle: 'Learn about service 2',
        ariaLabel: 'View details about service 2',
      },
      {
        link: '/services/3',
        title: 'subMenuServices.subMenu3',
        subtitle: 'Learn about service 3',
        ariaLabel: 'View details about service 3',
      },
      {
        link: '/services/4',
        title: 'subMenuServices.subMenu4',
        subtitle: 'Learn about service 4',
        ariaLabel: 'View details about service 4',
      },
      {
        link: '/services/5',
        title: 'subMenuServices.subMenu5',
        subtitle: 'Learn about service 5',
        ariaLabel: 'View details about service 5',
      },
      {
        link: '/services/6',
        title: 'subMenuServices.subMenu6',
        subtitle: 'Learn about service 6',
        ariaLabel: 'View details about service 6',
      },
      {
        link: '/services/9',
        title: 'subMenuServices.subMenu7',
        subtitle: 'Learn about service 7',
        ariaLabel: 'View details about service 7',
      },
      {
        link: '/services/7',
        title: 'subMenuServices.subMenu8',
        subtitle: 'Learn about service 8',
        ariaLabel: 'View details about service 8',
      },
      {
        link: '/services/8',
        title: 'subMenuServices.subMenu9',
        subtitle: 'Learn about service 9',
        ariaLabel: 'View details about service 9',
      },
    ],
  },
  {
    title: 'menu.company',
    link: '/about',
    subtitle: 'Learn more about our company', // Subtitle with helpful info
    ariaLabel: 'Learn more about our company',
    subLinks: [
      {
        link: '/about',
        title: 'subMenuCompany.subMenu1',
        subtitle: 'Discover our company overview',
        ariaLabel: 'Learn about the company overview',
      },
      {
        link: '/about#aboutSection6',
        title: 'subMenuCompany.subMenu2',
        subtitle: 'Explore our history and achievements',
        ariaLabel: 'Learn more about our history in section 6',
      },
      {
        link: '/about#aboutSection9',
        title: 'subMenuCompany.subMenu3',
        subtitle: 'Understand our mission and vision',
        ariaLabel: 'Learn more about our mission in section 9',
      },
    ],
  },
  {
    title: 'menu.clientsAndPartners',
    link: '/clients-&-partners',
    subtitle: 'Meet our clients and partners', // Subtitle for context
    ariaLabel: 'Explore our clients and partners',
    subLinks: [
      {
        link: '/clients-&-partners?part=0',
        title: 'subMenuClientsAndPartners.subMenu1',
        subtitle: 'Learn about our partners - Group 1',
        ariaLabel: 'Learn more about partner group 1',
      },
      {
        link: '/clients-&-partners?part=1',
        title: 'subMenuClientsAndPartners.subMenu2',
        subtitle: 'Learn about our partners - Group 2',
        ariaLabel: 'Learn more about partner group 2',
      },
      {
        link: '/clients-&-partners#testimonialsSection',
        title: 'subMenuClientsAndPartners.subMenu3',
        subtitle: 'See what our clients say about us',
        ariaLabel: 'Read testimonials from our clients',
      },
    ],
  },
  {
    title: 'menu.blogs',
    link: '/blog',
    subtitle: 'Read our latest blog posts', // Subtitle for SEO and context
    ariaLabel: 'Visit our blog',
    subLinks: [
      {
        link: '/blog/4',
        title: 'subMenuBlogs.subMenu1',
        subtitle: 'Read blog post 1 about [Topic]',
        ariaLabel: 'Read blog post 1',
      },
      {
        link: '/blog/1',
        title: 'subMenuBlogs.subMenu2',
        subtitle: 'Read blog post 2 about [Topic]',
        ariaLabel: 'Read blog post 2',
      },
      {
        link: '/blog/10',
        title: 'subMenuBlogs.subMenu3',
        subtitle: 'Read blog post 3 about [Topic]',
        ariaLabel: 'Read blog post 3',
      },
    ],
  },
  {
    title: 'menu.contact',
    link: '/contact?form=0',
    subtitle: 'Get in touch with us', // Subtitle to describe contact page
    ariaLabel: 'Contact us',
    subLinks: [
      {
        link: '/contact?form=0#contactContentSection',
        title: 'menu.getInTouch',
        subtitle: 'Reach out to us through the contact form',
        ariaLabel: 'Get in touch with us through the contact form',
      },
      {
        link: '/contact?form=1#contactContentSection',
        title: 'menu.leaveReview',
        subtitle: 'Leave feedback or review our services',
        ariaLabel: 'Leave us a review through the contact form',
      },
    ],
  },
];

export const ImageErrorUrl =
  'https://placehold.co/1920x1080/webp?font=roboto&text=Error';
