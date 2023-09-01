import { Fragment } from "react";
import { OMDbSearchResponse } from "@/types/omdb";
import { mapOMDbSearchResponse } from "@/utils/mappers/search";
import Image from "next/image";
import Link from "next/link";
import { Avatar, SearchInput } from "@/components";
import { truncate } from "@/utils/string";
// import { getQueryParams } from "@/utils/url";

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
  // const params = {
  //   apikey: process.env.MEDIA_API_KEY,
  //   s: "spiderman",
  // };

  // const response = await fetch(
  //   `${process.env.MEDIA_API_HOST}/?${getQueryParams(params)})}`
  // );

  //  const data: OMDbSearchResponse = await response.json();

  const spiderManoOmdbData: OMDbSearchResponse = require("../fixtures/spiderman-search-response.json");
  const starWarsmanoOmdbData: OMDbSearchResponse = require("../fixtures/starwars-search-response.json");

  const { data: spiderManSearchData } =
    mapOMDbSearchResponse(spiderManoOmdbData);

  const { data: starWarsSearchData } =
    mapOMDbSearchResponse(starWarsmanoOmdbData);

  return (
    <Fragment>
      <header className="p-8 flex justify-around items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo.png"
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
          <Image
            className="w-full min-h-[300px]"
            width={1236}
            height={300}
            alt="Banner"
            src="/banner1.jpg"
          />
        </section>

        <section className="flex justify-center mt-10">
          <div className="grid grid-cols-3 gap-4 max-w-[1236px] ">
            {spiderManSearchData.map((item) => (
              <div key={item.imdbID}>
                <Image
                  className="rounded-md"
                  src={item.poster}
                  alt={item.title}
                  quality={100}
                  width={300}
                  height={300}
                />
                <p className="text-center mt-2 font-light">
                  {truncate(item.title, 20)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
}
