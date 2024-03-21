import { useState } from "react";
import styles from "@/styles/Contact.module.css";
import Header from "@/components/Header/header";
import HeadArea from "@/components/Headarea/headarea";
import Footer from "@/components/Footer/footer";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeFristName = (e) => {
    setFirstName(e.target.value);
  };
  const onChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeAgree = (e) => {
    setAgree(e.target.checked);
  };
  const isOk = () => {
    return (
      firstName.length > 1 &&
      lastName.length > 1 &&
      EmailBox(email) &&
      agree
    );
  };
  const EmailBox = (text) => {
    if (!text || text.length < 1) return false;
    const myEmail = /^([A-z0-9_\.-]+)@([A-z0-9_\.-]+)(\.[A-z0-9_-]+)$/;
    return myEmail.test(text);
  };
  const onClickSubmit = () => {
    setIsSubmit(true);
  };

  return (
    <>
      <HeadArea/>
      <Header/>
      <main className={`${styles.contact}`}>
        <section className={styles.titleSection}>
          <h1>Contact Us</h1>
        </section>
        {isSubmit ? (
          <p>Thank you, your form has been submitted</p>
        ) : (
          <section className={styles.formSection}>
            <div className={styles.formInner}>
              <div className={styles.title}>Have any questions?</div>
              <div className={styles.form}>
                <label className={styles.formInputWrap}>
                  First Name:
                  <input
                    type="text"
                    value={firstName}
                    onChange={onChangeFristName}
                  />
                </label>
                <label className={styles.formInputWrap}>
                  Last Name:
                  <input
                    type="text"
                    value={lastName}
                    onChange={onChangeLastName}
                  />
                </label>
                <label className={styles.formInputWrap}>
                  Email:
                  <input type="email" value={email} onChange={onChangeEmail}/>
                </label>
                <label>
                  Do you agree to the terms?:
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={onChangeAgree}
                  />
                </label>
              </div>
            </div>
            <button
              className={`${styles.submit} ${
                isOk() ? styles.ok : styles.hidden
              }`}
              onClick={onClickSubmit}
            >
              Submit
            </button>
          </section>
        )}
      </main>
      <Footer/>
    </>
  );
}