import { atom } from 'recoil';
import BlogImg from '../assets/images/logo.png';

export const blogRecoil = atom({
  key: 'blogRecoilState',
  default: [
    {
      subtitle:
        'International Rail Freight: Everything you need to know about Rail Freight',
      id: 'xpluFbTsaBdpkItXavHB',
      postId: 'xpluFbTsaBdpkItXavHB',
      created: '11/25/2024',
      title: 'Everything About Freight Transportation',
      content: [
        {
          title: 'Rail Transportation: An Overview',
          text: 'The use of railroads and trains to convey cargo on land is known as rail freight transport. Rail transport is popular, especially in continents with extensive journey durations, such as China, Russia, the United States and Europe. Freight trains can transport a variety of cargo, including freight containers, automobiles, cattle, grains, coal, minerals and metals. Bulk goods, standardized shipping containers, or particularly constructed carriages for a specific sort of freight can all be transported by freight trains. Rail freight travels far more quickly than ocean freight. It costs more than sea freight, but less than air freight. Moving high-value industrial products like automobiles, electronics, and computer equipment, as well as promotional items, by train is ideal.',
        },
        {
          text: 'While we consider energy use, rail freight might be one of the most efficient models of transportation. Six times lower than the road to be precise, especially for transporting goods over vast distances. It makes good economic and environmental sense: freight rails generate roughly 95% lower carbon emissions than airplanes and nearly 80% to 100% lower emissions than comparable road transport. Being environmentally friendly transportation follows the latest trends in modern society, thus rail freight logistics will always be supported. In addition, there are fewer accidents on railroads than on roadways.',
          title: 'Benefits Of Choosing Rail Freight Transport',
        },
        {
          title: 'Latest Freight Trends',
          text: "In order to demonstrate the significance and exposure of the rail freight let’s take a look at the numbers. There are 1.1 million kilometers of train tracks in the world. The United States takes the lion's share of this, accounting for 32 percent. Then there's Asia with 30% and Europe with 24%. Last year's statistics demonstrate that rail freight traffic is increasing globally. In Europe and Turkey alone, commodities traveled 3.1 billion ton- kilometers by rail in 2019. In Asia/Oceania and the Middle East this figure was about 3.5 billion ton-kilometers. The role of freight transportation has even increased during the pandemic. COVID-19 had a mixed influence on the rail freight business, with regions such as North and South America seeing a fall in rail freight traffic while Asia and Europe witnessed a spike, which is a considerable benefit for our company and region we operate. The regional share of rail freight is likely to grow significantly in the long run. Along with this, more investment, infrastructure expansion, and technology implementation to digitize rail freight are expected.",
        },
      ],
      images: [{ file: BlogImg, name: 'blogImg' }],
    },
  ],
});

export const blogDetailsRecoil = atom({
  key: 'blogDetailsRecoilState',
  default: null,
});

export const serviceRecoil = atom({
  key: 'serviceRecoilState',
  default: [
    {
      created: '11/25/2024',
      id: '13dfeef8-87e4-48f9-82cb-fe76f30dfed9',
      title: 'Test IMGS',
      content: [
        {
          text: 'dasdasd',
          title: 'asdasd',
        },
        {
          title: 'asdasd',
          text: 'asdasd',
        },
      ],
      subtitle: 'dasdasd',
      images: { file: BlogImg, name: '' },
    },
    {
      subtitle:
        'International Rail Freight: Everything You Need To Know About Rail Freight',
      title: 'Export-Import And Transit Rail Rates Payments 6',
      id: '4ehPxd9RtkVnHHUXSJ2k',
      created: '11/25/2024',
      postId: '4ehPxd9RtkVnHHUXSJ2k',
      content: [
        {
          title: 'Rail Transportation: An Overview',
          text: 'The use of railroads and trains to convey cargo on land is known as rail freight transport. Rail transport is popular, especially in continents with extensive journey durations, such as China, Russia, the United States and Europe. Freight trains can transport a variety of cargo, including freight containers, automobiles, cattle, grains, coal, minerals and metals. Bulk goods, standardized shipping containers, or particularly constructed carriages for a specific sort of freight can all be transported by freight trains. Rail freight travels far more quickly than ocean freight. It costs more than sea freight, but less than air freight. Moving high-value industrial products like automobiles, electronics, and computer equipment, as well as promotional items, by train is ideal.',
        },
        {
          text: 'While we consider energy use, rail freight might be one of the most efficient models of transportation. Six times lower than the road to be precise, especially for transporting goods over vast distances. It makes good economic and environmental sense: freight rails generate roughly 95% lower carbon emissions than airplanes and nearly 80% to 100% lower emissions than comparable road transport. Being environmentally friendly transportation follows the latest trends in modern society, thus rail freight logistics will always be supported. In addition, there are fewer accidents on railroads than on roadways.',
          title: 'Benefits Of Choosing Rail Freight Transport',
        },
      ],
      images: { name: '', file: BlogImg },
    },
  ],
});

export const serviceDetailsRecoil = atom({
  key: 'serviceDetailsRecoilState',
  default: null,
});

export const teamRecoil = atom({
  key: 'teamRecoilState',
  default: [
    {
      lastName: 'Toktomushev',
      birthDate: '11/25/2024',
      gender: 'Мужской',
      position: 'Senior Logistics Manager & Specialist',
      about:
        'Altynbek  is our senior logistics manager & specialist, with a wealth of knowledge and experience in this sphere/ He is specialising in managing the whole logistics process and will make sure that your cargo will be shipped with no delays and successful.',
      email: 'Altynbek@gmail.com',
      workPeriod: {
        from: '11/25/2024',
        to: null,
      },
      phoneNumber: '+996700868068',
      status: true,
      midName: 'Altynbek',
      contacts: {
        address: 'Бишкек',
        email: 'Altynbek@gmail.com',
        phoneNumber: '+996700868068',
      },
      address: 'Бишкек',
      id: '85d3d048-a06d-404c-adf5-9fec48d621c3',
      firstName: 'Altynbek',
      images: { name: '', file: BlogImg },
    },
    {
      email: 'maxabdurasulov@gmail.com',
      phoneNumber: '+996700868068',
      status: true,
      lastName: 'Abdurasulov',
      midName: 'Radzhabovich',
      position: 'Back end разработчик',
      workPeriod: {
        to: null,
        from: '11/25/2024',
      },
      id: '9f0dbe98-30b6-43be-b4c6-4e235abf107e',
      contacts: {
        address: 'Федорова',
        email: 'maxabdurasulov@gmail.com',
        phoneNumber: '+996700868068',
      },
      address: 'Федорова',
      firstName: 'Maksat 1123123',
      about: 'qwe',
      birthDate: '11/25/2000',
      gender: 'Мужской',
      images: { file: BlogImg, name: '' },
    },
  ],
});

export const partnersRecoil = atom({
  key: 'partnersRecoilState',
  default: [
    {
      name: '1 test update',
      email: 'dasd@gmail.com',
      created: '11/25/2024',
      id: '6bf0fa16-a9d0-48f3-8ffd-58daef1a9276',
      images: { file: BlogImg, name: '' },
    },
    {
      email: 'pgk@gmail.com',
      name: 'ПГК',
      created: '11/25/2024',
      id: 'vdwT4hH4bO7z1TnkgXd6',
      images: { file: BlogImg, name: '' },
    },
  ],
});

export const companyRecoil = atom({
  key: 'companyRecoilState',
  default: {
    socialMedia: {
      instagram: {
        id: '1',
        link: 'real link',
      },
      skype: {
        id: '3',
        link: 'skype link',
      },
      whatsapp: {
        id: '5',
        link: 'asdasd',
      },
      facebook: {
        id: '2',
        link: 'faceboook link',
      },
      telegram: {
        id: '4',
        link: 'assad',
      },
    },
    id: 'Fi9so2860hoIwqzhdBKO',
    about: {
      address: 'г. Бишкек, ул. Фёдорова 67',
      email: 'maxabdurasulov@gmail.com',
      phoneNumber2: '+996707567676',
      phoneNumber1: '+996705006088',
    },
  },
});

export const reviewsRecoil = atom({
  key: 'reviewsRecoilState',
  default: [
    {
      text: '“The most distinctive features of “Orion-Trans LLC ” is their business approach, a high staff professionalism and a strong team spirit. This company is a reliable, responsible and highly qualified partner. “Orenbi Trading LLC ” totally recommend to the businesses “Orion-Trans  LLC” as a reliable and stable partner.”',
      name: 'Alina',
      id: '4oHQ8O5LXsrOO8RN2JD2',
      created: '11/25/2024',
      company: 'Orenbi',
      status: true,
    },
  ],
});
