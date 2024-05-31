import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from './Contact.module.css'

const Contact = () => {
  const members = [
    {
      id: 1,
      name: "Sai Sushreeta lenka",
      email: "saisushreeta@gmail.com",
      phone: "8984321202",
    },
    {
      id: 2,
      name: "Sriya Samruddhi Tripathi",
      email: "SriyaSamruddhi@gmail.com",
      phone: "0934567890",
    },
    {
      id: 3,
      name: "Gautam Kumar",
      email: "Gautamkumar@gmail.com",
      phone: "0987654321",
    },
    {
      id: 4,
      name: "Prachi",
      email: "Prachi@gmail.com",
      phone: "7022334455",
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <div className={styles.membersList}>
          {members.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <h2>{member.name}</h2>
              <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
              <p>Phone: <a href={`tel:${member.phone}`}>{member.phone}</a></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
