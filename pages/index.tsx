import type { NextPage } from 'next';
import Head from 'next/head';
import { AssetsContainer } from '../components/Assets/AssetsContainer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Assets</title>
        <meta name="description" content="Assets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AssetsContainer />
      </main>
    </div>
  );
};

export default Home;
