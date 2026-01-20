import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import {Analytics} from '@vercel/analytics/react';
import type {AppProps} from 'next/app';
import {memo} from 'react';
import React from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): React.JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
});

export default MyApp;
