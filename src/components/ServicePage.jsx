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

const ServicePage = () => {
  return (
    <section className={styles.servicePage}>
      <header className={styles.header}>
        <h1>Our Services</h1>
        <p>Empowering modern agriculture with smart, sustainable solutions tailored to your farm.</p>
      </header>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
