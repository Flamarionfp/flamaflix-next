'use client';
import Image from 'next/image';

export const SearchInput = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='relative'>
        <input
          id='search-input'
          className='min-w-[25rem] rounded-lg bg-gray-700 p-2 outline-none'
          placeholder='Pesquise algo...'
        />
        <button type='submit'>
          <Image
            className='absolute right-6 top-2.5'
            src='/icons/search-icon.svg'
            alt='ícone de busca'
            width={20}
            height={20}
          />
        </button>
      </div>
    </form>
  );
};
