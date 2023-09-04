"use client";
import Image from "next/image";

export const SearchInput = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <input
          className="rounded-lg p-2 bg-gray-700 min-w-[25rem] outline-none"
          placeholder="Pesquise algo..."
        />
        <button type="submit">
          <Image
            className="absolute top-2.5 right-6"
            src="/icons/search-icon.svg"
            alt="ícone de busca"
            width={20}
            height={20}
          />
        </button>
      </div>
    </form>
  );
};
