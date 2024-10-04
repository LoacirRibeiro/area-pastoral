import React, { useEffect } from "react";
import "./home.css"; 
import Aos from "aos";
import "aos/dist/aos.css";

// Importação de imagens
import image1 from "../../Assets/joey.jpeg";

const properties = [
  {
    id: 1,
    imagem: image1,
    name: "Fotos da comunidade, Festejo, Etc.",
    desc: "orem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido. É uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um texto de teste útil para preencher",
  },
  {
    id: 2,
    imagem: image1,
    name: "Fotos da comunidade, Festejo, Etc.",
    desc: "orem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido. É uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um texto de teste útil para preencher",
  },
];

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="comunidade container section">
    <div className="secContainer">
      <div className="secHeader">
        <span className="orangeText">Área Pastoral Missionária São José de Anchieta</span>
        <h1 data-aos="fade-up" className="title">
          Eventos da nossa Área Pastoral
          <span data-aos="fade-up" className="orangeDot"> . </span>
        </h1>
        <p data-aos="fade-up">
          Juntos, estamos construindo uma comunidade de fé e amor.
        </p>
      </div>

      <div className="primaryListings">
        {properties.map(({ id, imagem, name, desc }) => (
          <div key={id} className="listing" data-aos="fade-up">
              <h2 className="name">{name}</h2>
            <div className="imgDiv">
              <img src={imagem} alt={name} />
            </div>
            <div className="info">
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}


export default Home;
