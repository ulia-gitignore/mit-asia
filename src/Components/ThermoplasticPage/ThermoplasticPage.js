import React from "react";
//import { Link } from "react-router-dom";
import "./ThermoplasticPage.css";

export default function ThermoplasticPage() {
  return (
    <div className="container">
      <h1 className="page-title">Термопластики</h1>
      <main>
        <section className="product">
          <img
            src="/images/imgTP-Equator.png"
            alt="Термопластик"
            className="product-image"
          />
          <div className="product-info">
            <h2>Термопластик</h2>
            <p>
              Термопластик – композиционный материал на основе полиэфирного
              связующего, содержащий пигменты, наполнители, пластификаторы и
              функциональные добавки. Содержит микростеклошарики (100–600 мкм) в
              количестве 10–20 %. Предназначен для нанесения на асфальтобетон
              автодорог.
            </p>

            <h3>Условия применения</h3>
            <p>
              Смесь плавят при 180–220 °C, мешают 1.5 ч до полной гомогенизации.
              Наносят механизированно (экструдер) или вручную. Расход: ≥ 6.5
              кг/м² (3 мм слой), стеклошарики ≥ 300 г/м² (лучше 400–1500 мкм).
            </p>

            <h3>Упаковка и хранение</h3>
            <p>
              Полиэтиленовые мешки по 25 кг. Хранить при +5…+30 °C, избегая
              влаги и солнца. Срок хранения — 12 мес.
            </p>

            <h3>Цвета</h3>
            <ul className="color-list">
              <li className="color white"></li>
              <li className="color yellow"></li>
            </ul>

            <div className="product-table">
              <h3>Технические характеристики</h3>
              <table>
                <thead>
                  <tr>
                    <th>Характеристика</th>
                    <th>Значение</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Цвет</td>
                    <td>белый / жёлтый</td>
                  </tr>
                  <tr>
                    <td>Яркость, %</td>
                    <td>≥ 80 (белый), ≥ 50 (жёлтый)</td>
                  </tr>
                  <tr>
                    <td>Температура размягчения (КиШ), °C</td>
                    <td>≥ 90</td>
                  </tr>
                  <tr>
                    <td>Время отверждения (до степени 3), мин</td>
                    <td>≤ 10</td>
                  </tr>
                  <tr>
                    <td>Растекаемость, см</td>
                    <td>11–14</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
