import React from 'react';
import styles from '@/styles/Home.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to Kids&Us Vietnam</h1>
        <p>Innovative English courses designed for kids and teenagers!</p>
        <button className={styles.ctaButton}>Explore Courses</button>
      </section>

      {/* Courses Section */}
      <section className={styles.courses}>
        <h2>Our Courses</h2>
        <div className={styles.courseList}>
          <div className={styles.course}>
            <h3>1-2 Years Old</h3>
            <p>Start your child’s language journey early.</p>
          </div>
          <div className={styles.course}>
            <h3>3-8 Years Old</h3>
            <p>Interactive lessons to build a strong foundation.</p>
          </div>
          <div className={styles.course}>
            <h3>9-12 Years Old</h3>
            <p>Develop fluency and confidence.</p>
          </div>
          <div className={styles.course}>
            <h3>13-18 Years Old</h3>
            <p>Prepare for a global future.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.about}>
        <h2>About Kids&Us</h2>
        <p>
          Kids&Us is a leading language learning institute for children and teenagers.
          We use immersive and innovative methods to help young learners excel in English.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Parents Say</h2>
        <blockquote>
          "My daughter loves the classes, and her English has improved significantly!"
        </blockquote>
        <p>- Parent of a 5-year-old student</p>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <p>Email: info@kidsandus.net.vn</p>
        <p>Phone: 1800 6175</p>
      </section>
    </main>
  );
};

export default Main;
