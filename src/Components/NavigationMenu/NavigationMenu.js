// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavigationMenu.css";

// export default function NavigationMenu() {
//   return (
//     <div className="container">
//       <header className="header">
//         <img src="/images/logo.jpg" alt="Логотип" className="logo" />

//         {/* Контакты */}
//         < className="header-contacts">
//           <div className="phone-block">
//             <a href="tel:+77001090923">+7 (700) 109-09-23</a>
//             <a
//               href="https://wa.me/77001090923"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="whatsapp-link"
//             >
//             </a>
//           </div>
//           <a href="mailto:mit.asia@mail.ru">mit.asia@mail.ru</a>

//         <nav>
//           <ul className="nav-menu">
//             <li>
//               <Link to="/about">Главная</Link>
//             </li>
//             <li>
//               <Link to="/vacancies">Вакансии</Link>
//             </li>

//             <li className="dropdown">
//               <a className="dropdown-link">Каталог</a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <Link to="/thermoplastic">Термопластик</Link>
//                 </li>
//                 <li>
//                   <Link to="/coldplastic">Холодный пластик</Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css";

export default function NavigationMenu() {
  return (
    <div className="container">
      <header className="header">
        {/* Логотип-ссылка */}
        <Link to="/about">
          <img src="/images/logo.jpg" alt="Логотип" className="logo" />
        </Link>
        {/* Меню + контакты */}
        <nav>
          <ul className="nav-menu">
            <li>
              <Link to="/about">Главная</Link>
            </li>
            <li>
              <Link to="/partners">Партнеры</Link>
            </li>

            <li>
              <Link to="/vacancies">Вакансии</Link>
            </li>

            <li className="dropdown">
              <span className="dropdown-link">Каталог</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/thermoplastic">Термопластик</Link>
                </li>
                <li>
                  <Link to="/coldplastic">Холодный пластик</Link>
                </li>
              </ul>
            </li>

            {/* Контакты справа */}
            <li className="nav-contact">
              <a href="tel:+77001090923">+7 (700) 109-09-23</a>
<a
  href="https://wa.me/77001090923"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-link"
>
  <span className="sr-only">WhatsApp</span>
</a>
            </li>
            <li className="nav-contact">
              <a href="mailto:mit.asia@mail.ru">mit.asia@mail.ru</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
