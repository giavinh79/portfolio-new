import Head from 'next/head';

import { Introduction } from 'components/Profile/';
import { Tabs } from 'components/Navigation/';

export default function Home() {
  return (
    <>
      <Head>
        <title>Giavinh Lam</title>
        <meta
          name='description'
          content="Giavinh Lam is a software developer working with languages like JavaScript (React.js) and Java. He graduated with a Bachelor's in Computer Engineering at the University of Guelph."
        />
      </Head>

      <Introduction />
      <Tabs />
    </>
  );
}
