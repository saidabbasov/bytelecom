import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./ContentCard.module.css"
import note from "./../../../images/note111.webp"

const ContentCard = ({mobileName, price}) => {
  return <div className={styles.contentCard}>
    <div className={styles.container}>
        <div>
        <Link href="/">
            <a>
                <Image alt="Bytelecom"  height={200} src={note} width={200} />
            </a>
        </Link>
        </div>
        <div className={styles.mobileName}>{mobileName}</div>
        <div className={styles.contentSale}>
          <div>{price} ₼</div>
          <div className={styles.btn}><button>Buy</button></div>
        </div>
    </div>
  </div>
}

export default ContentCard