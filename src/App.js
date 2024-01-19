import React from "react";
import "./App.css";

const images = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

const ProjectItem = ({ imgSrc, text }) => (
  <div>
    <img src={imgSrc} alt="Project" />
    <p>{text}</p>
  </div>
);

const App = () => (
  <div>
    <header className="header">
      <h1>Beren ATEŞ</h1>
      <nav className="navbar">
        <a href="#">Anasayfa</a>
        <a href="#">Hakkında</a>
        <a href="#">İletişim</a>
        <a href="#">Projeler</a>
      </nav>
    </header>

    <section className="profile">
      <div className="logo-text">
        <img src={process.env.PUBLIC_URL + "/vesika.png"} alt="Beren ATEŞ" />
        <div className="text">
          <h1>Beren ATEŞ</h1>
          <a href="#">Projelerim</a>
          <div className="decoration">
            <p>
              Merhaba, ben Beren Ateş. 1999 yılında Bursa'nın Nilüfer ilçesinde
              doğdum. Gebze Teknik Üniversitesi Harita Mühendisliği bölümünden
              2023 yılında mezun oldum.
            </p>
          </div>
        </div>
      </div>
      <div className="box-container">
        {images.map((imageSrc, index) => (
          <ProjectItem key={index} imgSrc={imageSrc} text="YAZI" />
        ))}
      </div>
    </section>

    <footer>
      <div className="text-container">
        <h3>Gördüklerinden memnun musun?</h3>
        <a href="#">Bana Ulaş</a>
      </div>
    </footer>
  </div>
);

export default App;
