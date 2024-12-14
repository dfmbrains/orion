import { atom } from 'recoil';
import { defaultAppLanguage } from '../helpers/constants';
import { teamData } from '../data/team.data';
import { blogData } from '../data/blog.data';
import { reviewsData } from '../data/reviews.data';
import { servicesData } from '../data/services.data';
import { partnersData } from '../data/partners.data';
import { companyData } from '../data/company.data';

export const selectedLanguageRecoil = atom({
  key: 'selectedLanguageRecoilState',
  default: localStorage.getItem('i18nextLng') || defaultAppLanguage,
});

export const monthsRecoil = atom({
  key: 'mothsRecoilState',
  default: [],
});

export const blogRecoil = atom({
  key: 'blogRecoilState',
  default: blogData,
});

export const blogDetailsRecoil = atom({
  key: 'blogDetailsRecoilState',
  default: null,
});

export const serviceRecoil = atom({
  key: 'serviceRecoilState',
  default: servicesData,
});

export const serviceDetailsRecoil = atom({
  key: 'serviceDetailsRecoilState',
  default: null,
});

export const teamRecoil = atom({
  key: 'teamRecoilState',
  default: teamData,
});

export const partnersRecoil = atom({
  key: 'partnersRecoilState',
  default: partnersData,
});

export const companyRecoil = atom({
  key: 'companyRecoilState',
  default: companyData,
});

export const reviewsRecoil = atom({
  key: 'reviewsRecoilState',
  default: reviewsData,
});
