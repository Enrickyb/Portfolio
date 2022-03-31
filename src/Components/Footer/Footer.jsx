import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
        <div class="texto-footer" id="cnt">
                <h2>Enricky Biazatti</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab tempora doloremque quibusdam aliquid </p>
            </div>
            <div class="contacts" id="cnt">
                <h2>Contacts</h2>
                <p>Email:   <a href="mailto:">enrickyb@hotmail.com</a></p>
                <p>Discord: Enricky#1909</p>
                <p>Phone: (69) 98431-1483</p>
            </div>
            <div class="navegation">
                <h2>Navigation</h2>
                <p><a href="#sobre-m">About me</a></p>
                <p><a href="#projec">Projects</a></p>
                <p><a href="#nm">Home</a></p>
            </div>
            <div class="social-footer">
                <h2>Social networks</h2>
                <a href="https://www.instagram.com/enricky.b/" target="_blank" rel='noreferrer'><img src="images/instagram.png" alt="instagram"/></a>
                    <a href="https://www.facebook.com/ricky.biazattiaraujo/" target="_blank" rel='noreferrer'><img src="images/facebook-social-logo.png" alt="facebook"/></a>
                    <a href="https://github.com/Enrickyb" target="_blank" rel='noreferrer'><img src="images/github.png" alt="github"/></a>
                    <a href="https://www.linkedin.com/in/enricky-biazatti-48a34721b/" target="_blank" id="linkd" rel='noreferrer'><img  src="images/linkedin-logo.png" alt="linkedin"/></a>
            </div>
            {/* <div class="copyright">
            <p>© Todos os direitos reservados</p>
            </div> */}
    </div>
  )
}
