// src/Components/ProductDocuments/ProductDocuments.js
import React from "react";
import "./ProductDocuments.css";

export default function ProductDocuments() {
  return (
    <section className="product-documents">
      <h2>Документы по продукту</h2>
      <p>Все наши материалы имеют необходимые документы и соответствуют требованиям РК.</p>
      <div className="documents-container">
        <div className="document-card">
          <img src="/images/ct-kz.jpg" alt="" />
          <h3>СТ-KZ</h3>
          
        </div>
        <div className="document-card">
          <img src="/images/declaracia.jpg" alt="Декларация соответствия" />
          <h3>Декларация соответствия</h3>
                 </div>
        <div className="document-card">
          <img src="/images/passport.jpg" alt="Паспорт качества" />
          <h3>Паспорт качества</h3>
      
        </div>
      </div>
    </section>
  );
}
