import React, { useEffect } from "react";
import "./Home.css";
// importação de icones


// importação de imagens
import image1 from "../../Assets/Padre-Rafael.png";
import img from "../../Assets/Padre-Rafael.png";

import Aos from "aos";
import "aos/dist/aos.css";

// vamos usar o método map para percorrer uma lista de propriedades
const properties = [
  {
    id: 1,
    image: image1,
    name: "Propriedade rural, Itália",
    desc: "Uma luxuosa vila balinesa cercada por jardins exuberantes",
  },

  {
    id: 2,
    image: image1,
    name: "Mansão de água",
    desc: "Uma opulenta mansão aquática em Miami Beach com cais privado",
  },
];

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Listing container section">
      <div className="secContainer">
        <div className="secHeader">
          <span className="orangeText">Chamados à Missão</span>
          <h1 data-aos="fade-up" className="title">
          Jornada dos Nossos Seminaristas
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
          <div data-aos="fade-down" className="imgDiv">
            <img src={img} alt="House Image"></img>
          </div>
          <div data-aos="fade-up" className="info">
            <h2 className="name">Pe. Rafael Dionísio de Sousa </h2>
            <p>
              Lorem ipsum dolor sit amet . Os operadores gráficos e tipográficos
              sabem disso bem, na realidade, todas as profissões que lidam com o
              universo da comunicação têm um relacionamento estável com essas
              palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer
              sentido. É uma seqüência de palavras latinas que, como estão
              posicionadas, não formem frases com um sentido completo, mas dão
              vida a um texto de teste útil para preencher espaços que irão
              Posteriormente serão ocupados a partir de textos ad hoc compostos
              por profissionais de comunicação. É certamente o texto de marcador
              de posição mais famoso , mesmo que existam diferentes versões
              distinguíveis da ordem em que as palavras latinas são repetidas.
              Lorem ipsum contém as tipos de letra mais em uso, um aspecto que
              permite que você tenha uma visão geral da renderização do texto em
              termos de escolha da fonte e tamanho da fonte . Ao se referir a
              Lorem ipsum, diferentes expressões são usadas, nomeadamente texto
              de preenchimento , texto fictício , texto cego ou texto do espaço
              reservado: em suma, seu significado também pode ser zero, mas sua
              utilidade é tão clara quanto ao longo dos séculos e resiste às
              versões irônicas e modernas que vieram com a chegada da web.
            </p>
          </div>
        </div>

        <div className="secContent grid">
          {/* método de matriz de mapa */}
          {properties.map(({ id, image, name, price, desc, beds }) => {
            return (
              <div key={id} className="singleListing">
                <div data-aos="fade-down" className="imgDiv">
                  <img src={image} alt="House Image"></img>
                </div>
                <div data-aos="fade-up" className="info">
                  <h2 className="name">{name}</h2>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
