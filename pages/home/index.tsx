import cn from 'classnames';
import { NextSeo } from 'next-seo';
import React from 'react';

import { SectionFirstScreen } from '@/components/Pages/Home/SectionFirstScreen';
import { SectionLatest } from '@/components/Pages/Home/SectionLatest';

import styles from './_index.module.scss';

const Home = () => {
  return (
    <>
      <NextSeo title="Home page" description="Home page of flow market place" />
      <div className={cn(styles.Home, 'container')}>
        <SectionFirstScreen />
        <SectionLatest />
      </div>
    </>
  );
};

export default Home;
