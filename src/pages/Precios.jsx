import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Precios.module.css';

const Pricing = () => {
  const plans = [
    {
      name: "Principiantes",
      price: "20",
      period: "mes",
      features: [
        "10 GB almacenamiento de fotos",
        "Subida ilimitada en baja resolución",
        "3 galerías privadas",
        "Marca de agua personalizable",
        "Soporte básico"
      ],
      featured: false
    },
    {
      name: "Profesional",
      price: "35",
      period: "mes",
      features: [
        "50 GB almacenamiento de fotos",
        "Subida en alta resolución",
        "15 galerías privadas",
        "Venta directa de fotos",
        "Clientes ilimitados",
        "Plantillas de portafolio",
        "Soporte prioritario"
      ],
      featured: true
    },
    {
      name: "Estudio",
      price: "50",
      period: "mes",
      features: [
        "200 GB almacenamiento",
        "Subida en RAW + JPG",
        "Galerías ilimitadas",
        "Sistema de pedidos avanzado",
        "Hasta 5 usuarios",
        "Portafolio premium",
        "Estadísticas avanzadas",
        "Soporte 24/7"
      ],
      featured: false
    }
  ];

  return (
    <section className={styles.pricing}>
      <h2 className={styles.title}>Planes para Fotógrafos   </h2>
      <p className={styles.subtitle}>Elige el plan que mejor se adapte a tus necesidades</p>
      
      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`${styles.planCard} ${plan.featured ? styles.featured : ''}`}
          >
            {plan.featured && <div className={styles.recommended}>Recomendado</div>}
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.priceContainer}>
              <span className={styles.currency}>Bs</span>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.period}>/{plan.period}</span>
            </div>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={styles.subscribeButton}>
              Suscribirse
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;