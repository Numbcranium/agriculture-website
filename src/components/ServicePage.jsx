import React from 'react';
import styles from './ServicePage.module.css';

const services = [
  {
    title: 'Crop Consultation',
    description: 'Expert advice tailored to your soil, climate, and crops. We help you maximize yield and reduce costs with data-driven insights.',
    icon: '🌿',
  },
  {
    title: 'Farm Management',
    description: 'We provide digital tools and guidance to streamline operations, monitor crop health, and manage your workforce.',
    icon: '🧑‍🌾',
  },
  {
    title: 'Irrigation Planning',
    description: 'Smart irrigation strategies based on weather patterns, soil moisture, and plant needs. Save water, save money.',
    icon: '💧',
  },
  {
    title: 'Sustainability Audits',
    description: 'Ensure your farming practices align with sustainable agriculture principles. We assess, report, and recommend improvements.',
    icon: '🌱',
  },
];

const faqs = [
  {
    question: 'How do I get started?',
    answer: 'Just contact us through the form below or via email, and our agritech team will reach out to schedule a consultation.',
  },
  {
    question: 'Are your services location-dependent?',
    answer: 'We serve both local and international clients. Some services may have regional limitations, which we’ll clarify in our initial call.',
  },
];
const ServicePage = () => {
  return (
    <section className={styles.servicePage}>
      <header className={styles.header}>
        <h1>Our Services</h1>
        <p>Empowering modern agriculture with smart, sustainable solutions tailored to your farm.</p>
      </header>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <article className={styles.card} key={index} aria-label={service.title}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </article>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <h2>Ready to transform your farm?</h2>
        <p>Book a free consultation with our experts and discover how we can support your journey toward smarter agriculture.</p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
      <section className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <details key={idx} className={styles.faqItem}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </section>
  );
};

export default ServicePage;
