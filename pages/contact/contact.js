import styles from "./Contact.module.css";
import Header from "@/components/Header/header";
import HeadArea from "@/components/Headarea/headarea";
import Footer from "@/components/Footer/footer";

export default function Contact() {
  return (
    <>
      <HeadArea />
      <Header />
      <main className={`${styles.contact}`}></main>
      <Footer />
    </>
  );
}
