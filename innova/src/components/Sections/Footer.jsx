import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo.png"; // Asegúrate de que esta es la ruta correcta

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            {/* Logo y título */}
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <Logo src={LogoImg} alt="Fanatic Logo" /> {/* Cambio a etiqueta <img> */}
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Innova
              </h1>
            </Link>

            {/* Texto con año y derechos */}
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Innova</span> All Rights Reserved a pan
            </StyleP>

            {/* Enlace "Back to top" */}
            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 50px; /* Ajusta el tamaño del logo */
  height: auto;
`;

const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
