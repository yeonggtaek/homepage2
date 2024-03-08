import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/header";
import HeadArea from "@/components/Headarea/headarea";
import Footer from "@/components/Footer/footer";
import Link from "next/link";

export default function Home() {
  const title = "Home";
  const description =
    "BCIT offers over 300 programs and 1000 part-time courses in 6 general areas of study. Search or browse our catalogues to find the right fit for the next step in your career.";
  return (
    <>
      <HeadArea title={title} description={description}/>
      <Header/>
      <main className={`${styles.main}`}>
        <section className={styles.welcome}>
          <div>
            <h1>Welcome to BCIT</h1>
            <p>
              Different than a college or university, the British Columbia
              Istitute of Technology offers practice experience.
            </p>
            <Link href="/About">About</Link>
          </div>
          <img
            className={styles.imgCampus}
            src="/BCIT-Burnaby-Campus.jpg"
            alt="BCIT-Burnaby-Campus"
          />
        </section>
        <section className={styles.welcome2}>
          <div>
          <img
            className={styles.imgCampus2}
            src="/photo2.jpg"
            alt="photo2"
          />
            <h2>Ready to apply</h2>
            <p>
             Your tuition depends on the type of program you enter.
            </p>
            <img
            className={styles.photo1}
            src="/photo1.jpg"
            alt="photo1.jpg"
          />
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
