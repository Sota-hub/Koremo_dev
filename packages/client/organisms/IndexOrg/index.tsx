import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import IndexInstructions from "../../molecules/IndexInstructions";
import { Map, ArrowDown } from "../../public/images";
import styles from "./styles.module.css";

const IndexOrg: FC = (props) => {
  return (
    <>
      <main className={styles.wrap_up}>
        <div className={`${styles.full} ${styles.image}`}>
          <Image src={Map} alt="map" layout="fill" />
        </div>
        <div className={`${styles.full} ${styles.cover}`} />
        <div className={styles.container}>
          <p className={styles.headline}>
            Buy a little something for your family and friends, vice versa
          </p>
          <Link href="/login" passHref>
            <a className={styles.link}>LOGIN</a>
          </Link>
          <Link href="/signup" passHref>
            <a className={styles.link}>SIGN UP</a>
          </Link>
          <div className={styles.arrow}>
            <Image src={ArrowDown} alt="arrow down" layout="fill" />
          </div>
        </div>
      </main>
      <div className={styles.wrap_bottom}>
        <IndexInstructions />
      </div>
    </>
  );
};

export default IndexOrg;
