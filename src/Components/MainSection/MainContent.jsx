/** @jsxImportSource theme-ui */

export default function MainContent(props) {
  return (
    <div className="mainContent" sx={{ color: "textblue" }}>
      <p id="develop">Web developer</p>
      <h1>Enricky Biazatti</h1>
      <p id="desc">
        I'm a front end web developer, I build different types of responsive
        websites.
      </p>

      <a
        sx={{ backgroundColor: "btn", color: "btntxt" }}
        href="https://api.whatsapp.com/send?phone=69984311483"
        id="buttoncnt"
      >
        Contact-me
      </a>

      <div className="sociais">
        <a
          href="https://www.instagram.com/enricky.b/"
          target="_blank"
          rel="noreferrer"
        >
          {props.changIcon ? (
            <img src="../images/black/instagram.png" alt="instagram" />
          ) : (
            <img src="../images/white/instagram.png" alt="instagram" />
          )}
        </a>
        <a
          href="https://www.facebook.com/ricky.biazattiaraujo/"
          target="_blank"
          rel="noreferrer"
        >
          {props.changIcon ? (
            <img
              src="../images/black/facebook.png"
              alt="facebook"
              id="facebookIcon"
            />
          ) : (
            <img
              src="../images/white/facebook.png"
              alt="facebook"
              id="facebookIcon"
            />
          )}
        </a>
        <a href="https://github.com/Enrickyb" target="_blank" rel="noreferrer">
          {props.changIcon ? (
            <img src="../images/black/github.png" alt="github" />
          ) : (
            <img src="../images/white/github.png" alt="github" />
          )}
        </a>
        <a
          href="https://www.linkedin.com/in/enricky-biazatti-48a34721b/"
          target="_blank"
          id="linkd"
          rel="noreferrer"
        >
          {props.changIcon ? (
            <img src="../images/black/linkedinfundo.png" alt="linkedin" />
          ) : (
            <img src="../images/white/linkedinfundo.png" alt="linkedin" />
          )}
        </a>
      </div>
    </div>
  );
}
