import React from "react";
import "./Partners.css";

export default function Partners() {
  const partners = [
    {
      name: "ТОО «СМЭУ»",
      city: "г. Павлодар",
      description:
        "Изготовление и установка дорожных знаков по современным стандартам. Используются прочные материалы и светоотражающие покрытия, что обеспечивает долговечность и безопасность.",
      link: "https://smeu.kz",
    },
    {
      name: "ТОО «НикшомаС»",
      city: "г. Павлодар",
      description:
        "Нанесение горизонтальной дорожной разметки термопластиком, холодным пластиком и красками. Современное оборудование и материалы обеспечивают яркость и долговечность.",
      link: "https://nikshomas.kz",
    },
    {
      name: "ООО «Материалы и Технологии»",
      city: "г. Новосибирск",
      description:
        "Филиал компании, занимающийся поставками материалов для дорожной разметки: термопластика, холодного пластика и микростеклошариков для светоотражения.",
      link: "https://materials-tech.ru",
    },
  ];

  return (
    <div className="partners-page">
      <h2 className="partners-title">Наши партнёры</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <h3>{partner.name}</h3>
            <p className="partner-city">{partner.city}</p>
            <p className="partner-desc">{partner.description}</p>
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              Подробнее →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
