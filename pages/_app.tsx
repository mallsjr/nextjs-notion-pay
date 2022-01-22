import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';

/**
 *
 * @param {Component} Component
 * @param {Props} pageProps
 * @return {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
