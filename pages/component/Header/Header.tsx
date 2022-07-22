import Link from "next/link";
import { FC } from "react"
import styles from "./Header.module.css";
import logo from "./../../images/logo.svg"
import comparison from "./../../images/imgOne.svg"
import basket from "./../../images/imgTwo.svg"
import komp from "./../../images/komp.png"
import tel from "./../../images/tel.png"
import aks from "./../../images/aks.png"
import Image from "next/image";

const Header:FC = () => {
  return <div className={styles.header}>
    
    <div className={styles.nav}>
        <div className={styles.navBlock}>
        <Link href="/">
        <a>
            <Image alt="Bytelecom"  height={24} src={komp} width={24} />
        </a>
      </Link>
          <Link href="/"><a>Notebook</a></Link>
        </div>
        <div className={styles.navBlock}>
        <Link href="/">
        <a>
            <Image alt="Bytelecom"  height={24} src={tel} width={24} />
        </a>
      </Link>
          <Link href="/"><a>Smartphone</a></Link>
        </div>
        <div className={styles.navBlock}>
        <Link href="/">
        <a>
            <Image alt="Bytelecom"  height={24} src={aks} width={24} />
        </a>
      </Link>
          <Link href="/"><a>Aksessuar</a></Link>
        </div>
    </div>
    <div className={styles.logo}>
    <Link href="/">
        <a>
            <Image alt="Bytelecom"  height={50} src={logo} width={200} />
        </a>
    </Link>
    </div>
    <div className={styles.headerBar}>
      <div>
      <Link href="/">
        <a>
            <Image alt="Bytelecom"  height={30} src={comparison} width={80} />
        </a>
      </Link>
      <div>
      Comparison
      </div>
      </div>
      <div className={styles.basket}>
      <Link href="/">
        <a>
            <Image alt="Bytelecom"  height={30} src={basket} width={80} />
        </a>
      </Link>
      <div className={styles.basketTitle}>
      Basket
      </div>
      </div>
    </div>
  </div>
}

export default Header