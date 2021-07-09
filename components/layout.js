import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import SNSLinks from './snsLinks';

const koreanName = '김성태';
const englishName = 'Seongtae Kim';
export const siteTitle = 'Seongtae Kim';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.headerTop}>
              <img
                priority="true"
                src="/images/flower.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={englishName}
              />
              <div className={styles.headerTitle}>
                <h1 className={utilStyles.heading2Xl}>
                  {koreanName}
                  <br />
                  {englishName}
                </h1>
              </div>
            </div>
            <SNSLinks />
          </>
        ) : (
          <>
            <div className={styles.headerTop}>
              <div>
                <Link href="/">
                  <a>
                    <img
                      priority="true"
                      src="/images/flower.jpg"
                      className={utilStyles.borderCircle}
                      height={48}
                      width={48}
                      alt={englishName}
                    />
                  </a>
                </Link>
              </div>
              <SNSLinks />
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>
              <img priority="true" src="/images/back.svg" height={64} width={64} alt="back" />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
