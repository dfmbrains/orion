import { blogData } from 'data/blog.data';
import { companyData } from 'data/company.data';
import { companiesData } from 'data/companies.data';
import { reviewsData } from 'data/reviews.data';
import { servicesData } from 'data/services.data';
import { teamData } from 'data/team.data';
import { defaultAppLanguage } from 'helpers/constants';
import { atom } from 'recoil';

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

export const companiesRecoil = atom({
  key: 'companiesRecoilState',
  default: companiesData,
});

export const companyRecoil = atom({
  key: 'companyRecoilState',
  default: companyData,
});

export const reviewsRecoil = atom({
  key: 'reviewsRecoilState',
  default: reviewsData,
});
