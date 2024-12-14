import { atom } from 'recoil';
import ServiceImg1 from '../assets/images/services/service1.png';
import ServiceImg2 from '../assets/images/services/service2.png';
import ServiceImg3 from '../assets/images/services/service3.png';
import ServiceImg4 from '../assets/images/services/service4.png';
import ServiceImg5 from '../assets/images/services/service5.png';
import ServiceImg6 from '../assets/images/services/service6.png';
import ServiceImg7 from '../assets/images/services/service7.png';
import ServiceImg8 from '../assets/images/services/service8.png';
import { defaultAppLanguage, ImageErrorUrl } from '../helpers/constants';
import { teamData } from '../data/team.data';
import { blogData } from '../data/blog.data';
import { reviewsData } from '../data/reviews.data';

const BlogImg = ImageErrorUrl;

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
  // [
  // {
  //   subtitle:
  //     'International Rail Freight: Everything you need to know about Rail Freight',
  //   id: 'xpluFbTsaBdpkItXavHB',
  //   postId: 'xpluFbTsaBdpkItXavHB',
  //   created: '11/25/2024',
  //   title: 'Everything About Freight Transportation',
  //   content: [
  //     {
  //       title: 'Rail Transportation: An Overview',
  //       text: 'The use of railroads and trains to convey cargo on land is known as rail freight transport. Rail transport is popular, especially in continents with extensive journey durations, such as China, Russia, the United States and Europe. Freight trains can transport a variety of cargo, including freight containers, automobiles, cattle, grains, coal, minerals and metals. Bulk goods, standardized shipping containers, or particularly constructed carriages for a specific sort of freight can all be transported by freight trains. Rail freight travels far more quickly than ocean freight. It costs more than sea freight, but less than air freight. Moving high-value industrial products like automobiles, electronics, and computer equipment, as well as promotional items, by train is ideal.',
  //     },
  //     {
  //       text: 'While we consider energy use, rail freight might be one of the most efficient models of transportation. Six times lower than the road to be precise, especially for transporting goods over vast distances. It makes good economic and environmental sense: freight rails generate roughly 95% lower carbon emissions than airplanes and nearly 80% to 100% lower emissions than comparable road transport. Being environmentally friendly transportation follows the latest trends in modern society, thus rail freight logistics will always be supported. In addition, there are fewer accidents on railroads than on roadways.',
  //       title: 'Benefits Of Choosing Rail Freight Transport',
  //     },
  //     {
  //       title: 'Latest Freight Trends',
  //       text: "In order to demonstrate the significance and exposure of the rail freight let’s take a look at the numbers. There are 1.1 million kilometers of train tracks in the world. The United States takes the lion's share of this, accounting for 32 percent. Then there's Asia with 30% and Europe with 24%. Last year's statistics demonstrate that rail freight traffic is increasing globally. In Europe and Turkey alone, commodities traveled 3.1 billion ton- kilometers by rail in 2019. In Asia/Oceania and the Middle East this figure was about 3.5 billion ton-kilometers. The role of freight transportation has even increased during the pandemic. COVID-19 had a mixed influence on the rail freight business, with regions such as North and South America seeing a fall in rail freight traffic while Asia and Europe witnessed a spike, which is a considerable benefit for our company and region we operate. The regional share of rail freight is likely to grow significantly in the long run. Along with this, more investment, infrastructure expansion, and technology implementation to digitize rail freight are expected.",
  //     },
  //   ],
  //   images: [{ file: BlogImg, name: 'blogImg' }],
  // },
  // ],
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
      id: '1',
      title: 'Международные железнодорожные грузоперевозки с Орион-Транс',
      content: [
        {
          text: 'Железнодорожные грузоперевозки — это перевозка грузов на большие расстояния оперативно и хорошим соотношением цена-качество-сроки. Компания ОсОО “Орион-Транс” с более чем 10-летним опытом работы в сфере логистики и экспедирования обеспечивает полный цикл перевозки: от расчета и оплаты железнодорожных тарифов до оформления всех необходимых документов. Наши специалисты подберут оптимальное решение для вашего груза, учитывая все особенности транспортировки. Орион-Транс сотрудничает с надежными представителями железных дорог стран СНГ и других регионов, что гарантирует безопасность и надежное сотрудничество.',
          title:
            'Что Вам необходимо знать об услугах международных железнодорожных грузоперевозках Орион-Транс?',
        },
        {
          title: 'Почему именно перевозка железнодорожным транспортом?',
          text: 'Железнодорожный транспорт — это идеальный выбор для перевозки тяжелых и габаритных грузов, таких как сырья, оборудование и продукция, он обеспечивает большой объем перевозки и высокую степень безопасности. Выбирая Орион-Транс, вы получаете профессиональную поддержку на каждом этапе, конкурентоспособные тарифы и качественное обслуживание. Мы работаем для того, чтобы ваша логистика была простой, надежной и удобной.',
        },
        {
          title: 'Почему именно наши услуги по ж/д перевозкам?',
          text:
            '1. Мы напрямую имеем договора со всеми администрациями железных дорог региональных стран и имеем там своих представителей. Наш 15-летний опыт подтверждает наш высокий профессионализм и ответственность.\n' +
            '2. Мы организуем перевозку любых грузов в любом объеме и проконтролируем весь процесс транспортировки, предоставляя актуальную информацию о местонахождении груза.\n' +
            '3. Вы получите подробную консультацию по каждому этапу, где предварительно рассчитаем стоимость железнодорожного тарифа для любых направлений бесплатно\n' +
            '4. Качество наших услуг неизменно высокое благодаря опытным специалистам, готовым помочь вам в любое время.\n' +
            '5.Мы предварительно можем брать на себя оплату всех расходов: аренду вагонов, оформление документов, охрану и дополнительные сборы, избавляя вас от лишних затрат и сложностей, которые могли бы возникнуть, если бы вы это делали самостоятельно.\n' +
            '6. Предоставим подходящий тип вагона по вашему запросу: крытые вагоны, полувагоны, цистерны, платформы и контейнеры, а также предоставим оптимальные маршруты для доставки вашего груза.\n',
        },
      ],
      subtitle: '',
      images: { file: ServiceImg1, name: 'wagons' },
    },
    {
      subtitle: '',
      title:
        'Экспедирование грузов: Расчет и оплата ж/д тарифов на экспортно-импортные и транзитные перевозки',
      id: '2',
      created: '11/25/2024',
      content: [
        {
          title: 'Что Вам нужно знать об экспедировании грузов?',
          text: 'Железнодорожное экспедирование грузов является достаточно трудоемкой процедурой, которая координирует и контролирует движение грузов по железной дороге. Этот процесс требует профессионального подхода, чтобы минимизировать простои, задержки и дополнительные расходы. Экспедирование становится особенно актуальным для международных и транзитных перевозок, где важны точность и координация. На сегодняшний день железнодорожное экспедирование грузов остается одним из наиболее экономически выгодных способов транспортировки, подходящим для различных типов грузов, включая порожние и груженые вагоны, а также контейнеры.',
        },
        {
          title: 'Что включает в себя услуга ж/д экспедирования грузов?',
          text: 'Наши транспортно-экспедиторские услуги охватывают экспортно-импортные и транзитные перевозки. Мы экспедируем различные виды грузов, порожних и груженых вагонов/контейнеров, включая насыпные, наливные, контейнерные, опасные и другие - по территориям Узбекистана (УТИ), Кыргызстана (КРГ), Туркменистана (ТРК), Таджикистана (ТДЖ), Казахстана (КЗХ), Китая (КНР), Афганистана (ИГА), а также Ирана (ИРА) и России (РЖД). Железнодорожное экспедирование груза включает в себя расчет ж/д перевозки, где уже учитываются расходы по дополнительным сборам и стоимости охраны. Для этого мы используем специализированную программы для соответствующего расчета тарифа на перевозку грузов. Так как каждая перевозка индивидуальна и требует определенного подхода, мы принимаем во внимание маршрут, вид груза, подвижной состав и подготавливаем все необходимые документы для сопровождения груза, а также согласовываем перемещение товара на всех этапах маршрута. По запросу клиента мы можем организовать охрану груза – это дополнительная услуга, которую мы оказываем через наших проверенных партнеров.',
        },
        {
          title:
            'Благодаря нашему опыту и высокому профессионализму мы делаем все возможное, чтобы ваша транспортировка прошла качественно.',
          text: '',
        },
        {
          title:
            'Обращаясь к нам, вы получаете надежного партнера для экспедирования грузов по выгодным условиям!',
          text: '',
        },
      ],
      images: { name: '', file: ServiceImg2 },
    },
    {
      subtitle: '',
      title: 'Предоставление ж/д подвижного состава',
      id: '3',
      created: '11/25/2024',
      content: [
        {
          title:
            'Что Вам необходимо знать о предоставлении подвижного состава от компании Орион-Транс?',
          text: 'Орион-Транс предоставляет услуги по предоставлению подвижного состава любого типа, подходящего для вашего груза. Вы можете ознакомиться с характеристиками каждого вида вагонов, перейдя к соответствующей иллюстрации.',
        },
        {
          title: '',
          text: 'Мы подберем определенный вагон для перевозки вашего груза, который идеально будет соответствовать вашим требованиям. Особое внимание уделяется проверке состояния вагонов, что позволяет нам подходить к каждому запросу индивидуально. Благодаря своему небольшому парку железнодорожных вагонов и многолетнему сотрудничеству с надежными провайдерами вагонов - мы выстроили крепкие и доверительные отношения. Доверяя нашему опыту, вы экономите время на поиске вагонов и оформлении дополнительных документов.',
        },
        {
          title: 'Почему стоит выбрать нас для аренды подвижного состава?',
          text:
            '1. Плановая подача вагонов - мы обеспечиваем своевременную подачу порожних вагонов под погрузку согласно согласованному графику, что позволяет вам эффективно планировать погрузочно-разгрузочные работы.\n' +
            '2. Оптимальное решение для грузов - арендованный подвижной состав идеально подходит для перевозки сыпучих материалов, промышленных товаров и сырья, а также для любого типа грузов.\n' +
            '3. Экономия ресурсов - аренда вагонов снижает затраты на покупку подвижного состава, а также экономит время на поиски и оформление документов.\n' +
            '4. Доступные тарифы - мы предлагаем конкурентоспособные цены на аренду вагонов, выгодные для вашего бизнеса.\n' +
            '5. Надежные партнерства - сотрудничество с крупными транспортными компаниями позволяет нам предоставлять клиентам стабильные и качественные услуги.\n' +
            '6. Гибкие условия аренды - возможность долгосрочной аренды и другие формы предоставления вагон избавляет вас от необходимости искать вагоны в условиях высокого спроса.',
        },
      ],
      images: { name: '', file: ServiceImg3 },
    },
    {
      subtitle: '',
      title: 'Железнодорожные контейнерные перевозки',
      id: '4',
      created: '11/25/2024',
      content: [
        {
          title: 'Что необходимо знать о контейнерных перевозках?',
          text: 'Железнодорожные контейнеры - это идеальное решение для перевозки грузов на дальние расстояния. Этот вид перевозки является одним из самых экономичных, прогрессирующих и удобных. Стоимость на контейнерные перевозки значительно ниже за счет снижения затрат на контейнеры и складских расходов. Также, перевозка контейнерами дает возможность хорошо сэкономить на погрузочно-разгрузочных работах. По этим всем причинам, контейнерные перевозки остаются самым выгодным способом для оперативной транспортировки грузов в больших объемов.',
        },
        {
          title:
            'Почему важно воспользоваться железнодорожными контейнерами в Орион-Транс?',
          text: 'Железнодорожные контейнерные грузоперевозки позволяют перевозить практически любой груз, независимо от объема и веса, в пределах границ и между странами. Контейнерные перевозки очень активно развивается в перевозках грузов из Китая в страны СНГ и обратно в Китай. Кроме того, существует контейнерная доставка сборных грузов – это хороший вариант для небольших партий товара, при котором заказчик оплачивает место в контейнере, занимаемое его грузом.',
        },
        {
          title: 'Как осуществляется перевозка грузов ж/д контейнерами?',
          text: 'Погрузка и разгрузка контейнеров осуществляются с помощью специального оборудования, которое адаптировано к стандартным размерам контейнеров. Механизированная погрузка и разгрузка сокращают сроки доставки и устраняют человеческий фактор.',
        },
        {
          title: 'Контейнерные перевозки, как мультимодальные',
          text: 'Контейнерные перевозки являются оптимальным выбором для мультимодальных перевозок. Одним из главных преимуществ использования контейнеров для транспортировки грузов между Китаем и странами СНГ, включая Кыргызстан, является возможность преодолевать различия в ширине железнодорожных путей. Железнодорожные пути в Китае имеют стандартную колею (1435 мм), в то время как в странах СНГ используется широкая колея (1520 мм). На границе с Китаем, в пограничных переходных пунктах, со странами СНГ контейнера перегружаются с одного состава на другой, или на другой вид транспорта, который позволяет минимизировать затраты на логистику и сокращает время простоя. Этот процесс делает контейнерные перевозки более удобными и эффективными.',
        },
        {
          title: 'Дополнительные преимущества контейнерных перевозок:',
          text:
            '1.Универсальность: Контейнеры подходят для перевозки различных типов грузов, включая сыпучие, сборные, опасные и температурно-чувствительные грузы.\n' +
            '2.Сохранность груза: Контейнеры обеспечивают надежную защиту груза от внешних воздействий, таких как погодные условия и механические повреждения.\n' +
            '3.Экономия:Перевозка контейнерами позволяет сократить расходы на погрузочно-разгрузочные работы и уменьшить вероятность потерь или повреждений груза.\n' +
            '4.Гибкость маршрутов: Возможность сочетания железнодорожного транспорта с автомобильными и другими транспортами делает контейнерные перевозки особенно удобными для мультимодальных маршрутов, например, доставка груза из Китая в СНГ через автомобильные пункты пропуска далее железнодорожным транспортом до морских портов Каспийского и Черноморского морей.',
        },
        {
          title: '',
          text: 'Контейнерные перевозки между Китаем и Кыргызстаном, а также другими странами СНГ - это надежный и экономически выгодный способ доставки грузов, который отвечает требованиям современного бизнеса.',
        },
      ],
      images: { name: '', file: ServiceImg4 },
    },
    {
      subtitle: '',
      title: 'Ежедневная дислокация вагонов',
      id: '5',
      created: '11/25/2024',
      content: [
        {
          title: '',
          text: '',
        },
      ],
      images: { name: '', file: ServiceImg5 },
    },
    {
      subtitle: '',
      title: 'Для кого наши услуги',
      id: '6',
      created: '11/25/2024',
      content: [
        {
          title: '',
          text: '',
        },
      ],
      images: { name: '', file: ServiceImg6 },
    },
    {
      subtitle: '',
      title:
        'Оформление сопроводительных документов для организации перевозки грузов',
      id: '7',
      created: '11/25/2024',
      content: [
        {
          title: '',
          text: '',
        },
      ],
      images: { name: '', file: ServiceImg7 },
    },
    {
      subtitle: '',
      title: 'Индивидуальное консультирование по железнодорожным перевозкам',
      id: '8',
      created: '11/25/2024',
      content: [
        {
          title: '',
          text: '',
        },
      ],
      images: { name: '', file: ServiceImg8 },
    },
  ],
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
      linkedIn: {
        id: '6',
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
      address: 'Кыргызстан, Бишкек, ул. Турусбекова 109/3',
      email: 'office.oriontrans@gmail.com',
      phoneNumber2: '+996554333293',
      phoneNumber1: '+996705006088',
    },
  },
});

export const reviewsRecoil = atom({
  key: 'reviewsRecoilState',
  default: reviewsData,
});
