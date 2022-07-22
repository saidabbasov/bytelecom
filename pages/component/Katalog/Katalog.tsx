import React from 'react'
import styles from "./Katalog.module.css";
import Image from 'next/image';
import btnClick from "./../../images/btnClick.svg"
import Link from 'next/link';
import inputSearch from "./../../images/inputSearch.svg"

const Katalog = () => {
  return <div className={styles.katalog}>
    <div className={styles.katalogBtn}>
        <button>
        <div>
        <Link href="/">
            <a>
                <Image alt="Bytelecom"  height={28} src={btnClick} width={13} />
            </a>
        </Link>
        </div>
        <div className={styles.btnTitle}>Katalog</div>
        </button>
    </div>
    <div className={styles.katalogInput}>
        <span className={styles.titleInput}>Какая модель вас интересует ? </span>
        
        <input placeholder='Найти...' />
    </div>
  </div>
}

export default Katalog