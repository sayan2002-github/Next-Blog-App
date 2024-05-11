"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.homePageContainer}>
      <div className={`container ${styles.innerContainer}`}>
        <div className={styles.homePageDesc}>
          <h1 className={styles.heading}>Creative Thoughts Agency</h1>
          <p>
            Although it’s not required, you can wrap a navbar in a .container to
            center it on a page–though note that an inner container is still
            required. Or you can add a container inside the .navbar to only
            center the contents of a
          </p>
          <div className={styles.btnGrp}>
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-light">Contact</button>
          </div>
          <div className={styles.socialLinks}>
            <Link href="#"><FaFacebook className={styles.link}/></Link>
            <Link href="#"><FaGithub className={styles.link}/></Link>
            <Link href="#"><FaLinkedin className={styles.link}/></Link>
            <Link href="#"><FaTwitter className={styles.link}/></Link>
          </div>
        </div>
        <div className={styles.homePageImg}>
          <Image src="/home-page-img.png" alt="" fill></Image>
        </div>
      </div>
    </div>
  );
}
