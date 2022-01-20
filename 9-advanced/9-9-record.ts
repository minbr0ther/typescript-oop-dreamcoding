type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

// 페이지 당 페이지 인포를 묶어준다 (similar with Map)
const nav: Record<Page, PageInfo> = {
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contack' },
};
