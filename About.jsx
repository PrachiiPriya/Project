import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.text}>
          <h3>About Us</h3>
         
          <p>
            Welcome to HouseRental, where finding your perfect home rental is
            our passion!
           
          </p>
          <h4>Who We Are</h4>
          <p>
            At HouseRental, we specialize in connecting tenants with their ideal
            rental homes. With years of experience in the real estate industry,
            our dedicated team is committed to providing a seamless and
            personalized rental experience for both tenants and property owners.
          
          </p>
          <h4>Our Mission</h4>
          
          <p>
            Our mission is simple: to make renting a home easy, enjoyable, and
            stress-free. We aim to provide a diverse range of high-quality
            rental properties that cater to different lifestyles and budgets,
            ensuring that everyone can find a place they can call home.
           
          </p>

          <h4>What We Offer</h4>
         
          <p>
            - <b>Extensive Listings:</b> Explore a wide variety of rental homes,
            from cozy apartments to spacious houses, in various locations to
            suit your needs.
            <br />- <b>Easy Search Tools:</b> Use our intuitive search tools to
            filter properties by location, price, size, and amenities, making it
            easy to find exactly what you’re looking for.
            <br />- <b>Verified Properties:</b> Rest assured that all our
            listings are thoroughly vetted and verified for quality and
            accuracy.
            <br />- <b>Personalized Service:</b> Our friendly team is here to
            assist you at every step, offering personalized advice and support
            to help you make the best decision.
            <br />- <b>Secure Transactions:</b> We prioritize your safety with
            secure and transparent rental transactions, ensuring peace of mind
            for both tenants and landlords.
            
          </p>

          <h4>Why Choose Us?</h4>
          
          <p>
            - <b>Local Expertise:</b> With in-depth knowledge of the local
            rental market, we provide insights and guidance to help you find the
            perfect home.
            <br />- <b>Customer-Centric Approach:</b> Your satisfaction is our
            top priority. We listen to your needs and go above and beyond to
            meet them.
            <br />- <b>Innovation and Technology:</b> We leverage the latest
            technology to enhance your rental experience, from virtual tours to
            online application processes.
            <br />- <b>Community Focus:</b> We believe in building strong
            communities. Our properties are chosen not just for their features,
            but for their locations in vibrant, safe, and welcoming
            neighborhoods.
           
          </p>

          <h4>Our Values</h4>
        
          <p>
            - <b>Integrity:</b> We operate with honesty and transparency in all
            our dealings.
            <br />- <b>Commitment:</b> We are dedicated to providing exceptional
            service and building lasting relationships.
            <br />- <b>Innovation:</b> We continuously seek new ways to improve
            the rental experience for our clients.
            <br />- <b>Community:</b> We strive to contribute positively to the
            communities we serve.
           
          </p>

          <h4>Meet the Team</h4>
          <div className={styles.team}>
            <p>SAI SUSHREETA LENKA</p>
            <p>SHREYA SAMRUDDHI TRIPATHI</p>
            <p>GAUTAM KUMAR</p>
            <p>PRACHI</p>
          </div>
          <br />
          <br />
          <p>
            Our team of experienced professionals is here to support you. From
            property managers to customer service representatives, every member
            of our team is committed to making your rental journey as smooth and
            enjoyable as possible.
           
          </p>

          <p>
            Thank you for choosing HouseRental. We look forward to helping you
            find your perfect rental home.
            
          </p>

          <p>
            For any inquiries, feel free to <a href="/Contact">Contact Us</a>.
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default About;