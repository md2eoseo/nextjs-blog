import Link from 'next/link';
import styles from './layout.module.css';

export default function SNSLinks() {
  return (
    <div className={styles.headerSNSs}>
      <Link href="https://github.com/md2eoseo">
        <a target="_blank" className={styles.headerSNS}>
          <img priority="true" src="/images/github.svg" height={32} width={32} alt="github" />
        </a>
      </Link>
      <Link href="https://www.instagram.com/2eoseo/">
        <a target="_blank" className={styles.headerSNS}>
          <img priority="true" src="/images/instagram.svg" height={32} width={32} alt="instagram" />
        </a>
      </Link>
      <Link href="mailto:md2eoseo@gmail.com">
        <a className={styles.headerSNS}>
          <img priority="true" src="/images/mail.svg" height={32} width={32} alt="mail" />
        </a>
      </Link>
    </div>
  );
}
