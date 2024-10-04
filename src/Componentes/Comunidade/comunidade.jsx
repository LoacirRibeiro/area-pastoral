import React, { useEffect } from "react";
import "./comunidade.css";
import Aos from "aos";
import "aos/dist/aos.css";

// Importação de imagens
import image1 from "../../Assets/joey.jpeg";


const properties = [
  {
    id: 1,
    imagem: image1,
    name: "Fotos da comunidade ",
    desc: "orem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido. É uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um texto de teste útil para preencher",
  },
  {
    id: 2,
    imagem: image1,
    name: "Fotos da comunidade ",
    desc: "orem ipsum dolor sit amet . Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido. É uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido com",
  },
];

function Comunidade() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="comunidade container section">
      <div className="secContainer">
        <div className="secHeader">
          <span className="orangeText">
            Área Pastoral Missionária São José de Anchieta
          </span>
          
          
          <h1 data-aos="fade-up" className="title">
            Conheça nossa Área Pastoral
            <span data-aos="fade-up" className="orangeDot">
              {" "}
              .{" "}
            </span>
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

        <div class="celebracoes">
          <h2>Celebrações</h2>
          <p>
            <strong>Domingo:</strong> 8h
          </p>
          <p>
            <strong>Quinta:</strong> 19h30
          </p>
        </div>

        <div className="google-maps-container">
      <h2>Como Chegar</h2>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.8278036222!2d-48.38817069652889!3d-10.181263300564719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d6827a0c12343f%3A0x4227c3b510f59972!2sAv.%20An%C3%A1polis%2C%201090%20-%20Jardim%20Aeroporto%20(Taquaralto)!5e0!3m2!1spt-BR!2sbr!4v1689020125642!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="endereco">
        <p>Av. Anápolis, 1090 - Jardim Aeroporto (Taquaralto)</p>
      </div>
      <div className="como-chegar">
        <a
          className="maps-link"
          href="https://www.google.com/maps/dir/?api=1&destination=Av.+An%C3%A1polis%2C+1090+-+Jardim+Aeroporto+(Taquaralto)"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no Google Maps
        </a>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Comunidade;
