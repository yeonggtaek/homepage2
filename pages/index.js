import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import HeadArea from "@/components/Headarea";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeadArea/>
      <Header/>
      <main className={`${styles.main}`}>
      </main>
      <Footer/>
    </>
  );
}
