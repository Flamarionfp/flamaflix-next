import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='Logo'
          width={50}
          height={50}
          quality={100}
        />
      </Link>
      <h1 className='font-bold'>FLAMAFLIX</h1>
    </div>
  );
};
