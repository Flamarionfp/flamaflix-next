import { Fragment } from 'react';
import { SectionTitleProps } from './section-title.types';

export const SectionTitle = (props: SectionTitleProps) => {
  const { title } = props;

  return (
    <Fragment>
      <h3 className='mb-2 text-lg font-bold'>{title}</h3>
    </Fragment>
  );
};
