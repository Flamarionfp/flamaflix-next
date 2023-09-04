import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, BannerCarrousel, SearchInput } from "@/components";
import { TitleShowcase } from "@/components/title-showcase";

const headerLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Movies",
    path: "/",
  },
  {
    name: "Series",
    path: "/",
  },
  {
    name: "News",
    path: "/",
  },
];

export default async function Home() {
  return (
    <Fragment>
      <header className="p-8 flex justify-around items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              quality={100}
            />
          </Link>

          <h1 className="font-bold">FLAMAFLIX</h1>
        </div>

        <div className="flex gap-20">
          {headerLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <span className="hover:text-primary-500">{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex gap-6">
          <SearchInput />
          <button>
            <Avatar
              src="https://avatars.githubusercontent.com/u/83596149?v=4"
              alt="Avatar do usuário"
            />
          </button>
        </div>
      </header>

      <main>
        <section>
          <BannerCarrousel />
        </section>

        <div className="py-10">
          <TitleShowcase sectionTitle="Saga Batman" titleQuery="batman" />
        </div>

        <div className="py-10">
          <TitleShowcase
            sectionTitle="Piratas do Caribe"
            titleQuery="pirates of the caribbean"
          />
        </div>
      </main>
    </Fragment>
  );
}
