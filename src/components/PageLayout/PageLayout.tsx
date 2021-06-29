import React, { FC } from 'react';
import { Seo } from 'components';

export interface PageLayoutProps {
  children: JSX.IntrinsicElements['div'];
  title: string;
}

export const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Seo title={title} />
      {children}
    </>
  );
};
