import Image from 'next/image';
import { AvatarProps } from './avatar.types';

export const Avatar = (props: AvatarProps) => {
  const { src, alt, size = 40 } = props;

  const a = 'b';

  return (
    <Image
      className='rounded-full'
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  );
};
