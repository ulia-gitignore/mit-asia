import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Контакты */}
        <div className="footer-block">
          <h4>КОНТАКТЫ</h4>
          <p>
            <a href="tel:+77001090923">+7 (700) 109-09-23</a>
          </p>
          <p>
            <a href="mailto:mit.asia@mail.ru">mit.asia@mail.ru</a>
          </p>
          <p>
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            г. Павлодар, промышленная зона Центральная, строение 2573
          </p>
          <div className="social-icons">
            <a
              href="https://wa.me/77001090923"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* О компании */}
        <div className="footer-block">
          <h4>О КОМПАНИИ</h4>
          <p>ТОО "Материалы и Технологии - Азия"</p>
          <p>
            Производство термопластика и холодного пластика для дорожной
            разметки
          </p>
        </div>

{/* Партнеры */}
<div className="footer-block">
  <h4>ПАРТНЕРЫ</h4>
  <ul className="partners-list">
    <li>
      <strong>
        <a href="https://smeu.kz" target="_blank" rel="noopener noreferrer">
          ТОО «СМЭУ»
        </a>
      </strong>
      <div className="partner-info">
        <span>г. Павлодар</span> · изготовление дорожных знаков
      </div>
    </li>
    <li>
      <strong>
        <a href="https://nikshomas.kz" target="_blank" rel="noopener noreferrer">
          ТОО «НикшомаС»
        </a>
      </strong>
      <div className="partner-info">
        <span>г. Павлодар</span> · нанесение дорожной разметки
      </div>
    </li>
    <li>
      <strong>
        <a href="https://materials-tech.ru" target="_blank" rel="noopener noreferrer">
          ООО «Материалы и Технологии»
        </a>
      </strong>
      <div className="partner-info">
        <span>филиал в г. Новосибирск</span>
      </div>
    </li>
  </ul>
</div>

      </div>

      {/* Нижняя часть */}
      <div className="footer-bottom">
        © 2025 ТОО "Материалы и Технологии - Азия". Все права защищены.
      </div>
    </footer>
  );
}
