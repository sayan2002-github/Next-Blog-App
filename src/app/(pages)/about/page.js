import Image from "next/image";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPageContainer}>
      <div className={`container ${styles.innerContainer}`}>
        <div className={styles.aboutDesc}>
          <h5 style={{color: "blue"}}>About Agency</h5>
          <h1>
            We create digital ideas that are bigger, bolder, better and braver.
          </h1>
          <p>
            Although it’s not required, you can wrap a navbar in a .container to
            center it on a page–though note that an inner container is still
            required. Or you can add a container inside the .navbar to only
            center the contents of a
          </p>
          <div className={styles.glanceContainer}>
            <div className={styles.glance}>
              <h3 style={{color: "blue"}}>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className={styles.glance}>
              <h3 style={{color: "blue"}}>230K+</h3>
              <p>People Reached</p>
            </div>
            <div className={styles.glance}>
              <h3 style={{color: "blue"}}>5K+</h3>
              <p>Services and Plugins</p>
            </div>
          </div>
        </div>
        <div className={styles.aboutImg}>
          <Image src="/about-page-img.jpg" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default About;
