import React from "react";

export default function MainContent() {

  return (
    <div className="mainContent">
      <p id="develop">Web developer</p>
      <h1>Enricky Biazatti</h1>
      <p id="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Itaque voluptate
        dignissimos vel ad fugit quisquam qui perferendis asperiores
      </p>

      <a href="https://api.whatsapp.com/send?phone=s+5569984311483&text=" id="buttoncnt">Entre em contato</a>
      
      <div className="sociais">
          <a
            href="https://www.instagram.com/enricky.b/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../images/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/ricky.biazattiaraujo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="../images/facebook.svg" alt="facebook" />
          </a>
          <a href="https://github.com/Enrickyb" target="_blank" rel="noreferrer">
            <img src="../images/gihub.svg" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/enricky-biazatti-48a34721b/"
            target="_blank"
            id="linkd"
            rel="noreferrer"
          >
            <img src="../images/linkedin.svg" alt="linkedin" />
          </a>
      </div>
      
    </div>
  )
}
