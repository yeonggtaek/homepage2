import styles from "@/styles/About.module.css";
import Header from "@/components/Header/header";
import HeadArea from "@/components/Headarea/headarea";
import Footer from "@/components/Footer/footer";
import DesignGoals from "@/components/DesignGoals/designgoals";

export default function About() {
  return (
    <>
      <HeadArea />
      <Header />
      <main className={`${styles.about}`}>
        <section className={styles.section1}>
          <img
            className={styles.imgCampus}
            src="/BCIT-Burnaby-Campus.jpg"
            alt="BCIT-Burnaby-Campus"
          />
          <div>
            <h1>About</h1>
            <p>
              Different than a college or university, the British Columbia
              Istitute of Technology offers practice experience.
            </p>
          </div>
        </section>
        <section className={styles.designgoalsContainer}>
          <DesignGoals />
        </section>
      </main>
      <Footer />
    </>
  );
}
