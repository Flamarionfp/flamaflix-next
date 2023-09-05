import { Fragment } from 'react';
import Link from 'next/link';

import {
  Avatar,
  BannerCarrousel,
  BannerStandard,
  CategoryShowcase,
  HorizontalBannerGroup,
  Logo,
  SearchInput,
  VerticalBannerGroup,
} from '@/components';
import { TitleShowcase } from '@/components/title-showcase';

const headerLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Movies',
    path: '/',
  },
  {
    name: 'Series',
    path: '/',
  },
  {
    name: 'News',
    path: '/',
  },
];

export default async function Home() {
  return (
    <Fragment>
      <header className='flex items-center justify-around p-8'>
        <Logo />

        <div className='flex gap-20'>
          {headerLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <span className='hover:text-primary-500'>{link.name}</span>
            </Link>
          ))}
        </div>

        <div className='flex gap-6'>
          <SearchInput />
          <button>
            <Avatar
              src='https://avatars.githubusercontent.com/u/83596149?v=4'
              alt='Avatar do usuário'
            />
          </button>
        </div>
      </header>

      <main>
        <BannerCarrousel />

        <TitleShowcase sectionTitle='Saga Batman' titleQuery='batman' />

        <TitleShowcase
          sectionTitle='Piratas do Caribe'
          titleQuery='pirates of the caribbean'
        />

        <section className='flex justify-center py-10'>
          <BannerStandard
            src='/banners/standalone/deadpool.jpg'
            alt='Banner Deadpool'
          />
        </section>

        <CategoryShowcase
          folder='marvel'
          sectionTitle='Filmes de Super Herói'
        />

        <CategoryShowcase
          folder='dc'
          sectionTitle='Nossos destaques'
          slidesPerView={8.5}
        />

        <TitleShowcase
          grid
          maxResults={6}
          sectionTitle='Saga Harry Potter'
          titleQuery='harry potter'
        />

        <VerticalBannerGroup
          banners={[
            {
              src: '/banners/standalone/joker.jpg',
              alt: 'Banner Joker',
            },
            {
              src: '/banners/standalone/joker.webp',
              alt: 'Banner Joker',
            },
          ]}
        />

        <TitleShowcase sectionTitle='Zombies' titleQuery='the walking dead' />

        <TitleShowcase
          sectionTitle='Senhor dos Anéis'
          titleQuery='lord of the rings'
        />

        <TitleShowcase
          sectionTitle='Game Of Thrones'
          titleQuery='game of thrones'
        />

        <CategoryShowcase folder='resident' sectionTitle='Resident Evil' />

        <HorizontalBannerGroup
          banners={[
            {
              src: '/banners/standalone/bigbangtheory.jpg',
              alt: 'Banner The Big Bang Theory',
            },
            {
              src: '/banners/standalone/jumanji.webp',
              alt: 'Banner Jumanji',
            },
          ]}
        />

        <TitleShowcase sectionTitle='Mafia' titleQuery='godfather' />

        <TitleShowcase sectionTitle='Flash' titleQuery='flash' />

        <CategoryShowcase
          folder='jurassic'
          sectionTitle='Jurassic Park'
          slidesPerView={8.5}
        />
      </main>
    </Fragment>
  );
}
