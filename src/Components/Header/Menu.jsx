/** @jsxImportSource theme-ui */

export default function Menu(props) {
  return (
    <ul>
      <li>
        <a href="#sobre-m" sx={{ color: "textblue" }}>
          {" "}
          Sobre mim{" "}
        </a>
      </li>
      <li>
        <a href="#projec" sx={{ color: "textblue" }}>
          {" "}
          Projetos{" "}
        </a>
      </li>
      <li>
        <a href="#foot" sx={{ color: "textblue" }}>
          {" "}
          Contatos{" "}
        </a>
      </li>
      {props.children}
    </ul>
  );
}
