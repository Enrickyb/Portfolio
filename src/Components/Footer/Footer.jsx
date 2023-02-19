/** @jsxImportSource theme-ui */
import React from "react";

export default function Footer() {
  return (
    <div className="footer" id="foot" sx={{ backgroundColor: "bgblue" }}>
      <div class="texto-footer" id="cnt">
        <h2>Enricky Biazatti</h2>
        <p>Portfolio responsivo desenvolvido em React e SCSS.</p>
      </div>
      <div class="contacts" id="cnt">
        <h2>Contacts</h2>
        <p>
          Email: <a href="mailto:">enrickyb@hotmail.com</a>
        </p>
        <p>Discord: Enricky#1909</p>
        <p>Telefone: (69) 98431-1483</p>
      </div>
      <div class="navegation">
        <h2>Navegação</h2>
        <p>
          <a href="#sobre-m">Sobre mim</a>
        </p>
        <p>
          <a href="#projec">Projetos</a>
        </p>
        <p>
          <a href="#head">Home</a>
        </p>
      </div>
      <div class="social-footer">
        <h2>Redes Sociais</h2>
        <div className="socialImages">
          <a
            href="https://www.instagram.com/enricky.b/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/white/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/ricky.biazattiaraujo/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/white/facebook.png"
              alt="facebook"
              id="facebookIconFt"
            />
          </a>
          <a
            href="https://github.com/Enrickyb"
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/white/github.png" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/enricky-biazatti-48a34721b/"
            target="_blank"
            id="linkd"
            rel="noreferrer"
          >
            <img src="images/white/linkedinfundo.png" alt="linkedin" />
          </a>
        </div>
      </div>
      {/* <div class="copyright">
            <p>© Todos os direitos reservados</p>
            </div> */}
    </div>
  );
}
