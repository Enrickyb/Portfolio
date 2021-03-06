import React from "react";

export default function Card() {
  return (
    <div>
      
      <div className="card">
        <div className="card-image" id="card-one">
          <h3>Netflix</h3>
        </div>
        <div className="card-content">
          <h1>
            <a href="https://netflixbyenricky.netlify.app/">Netflix Clone</a>
          </h1>
          <p>
            This is a clone of the netflix main page. This was a challenging
            project where I could improve and put my knowledge into practice.
          </p>
          <ul>
            <li>ReactJs</li>
            <li>CSS</li>
            
          </ul>
        </div>
        <div className="card-footer">
          <div className="btn-view">
            <a href="https://netflixbyenricky.netlify.app/">View Project</a>
          </div>
          <div className="btn-sociais">
            <a href="https://github.com/Enrickyb/NetflixClone">
              <img src="/images/black/github.png" alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-image" id="card-finance">
          <h3>Finance Control</h3>
        </div>
        <div className="card-content">
          <h1>
            <a href="https://github.com/Enrickyb/Controle-de-Financas">Finance Control</a>
          </h1>
          <p>
          This project was developed to learn a little more about React mainly from React Hooks. It is possible to add monthly expenses and earnings.
          </p>
          <ul>
            <li>ReactJs</li>
          </ul>
        </div>
        <div className="card-footer">
          <div className="btn-view">
            <a href="https://github.com/Enrickyb/Controle-de-Financas">View Project</a>
          </div>
          <div className="btn-sociais">
            <a href="https://github.com/Enrickyb/Controle-de-Financas">
              <img src="/images/black/github.png" alt="github" />
            </a>
            {/* <a href="_changelater"><img src="" alt="" /></a> */}
          </div>
        </div>
      </div>

      {/* card 2 */}

      <div className="card">
        <div className="card-image" id="card-five">
          <h3>Memory Matching Game</h3>
        </div>
        <div className="card-content">
          <h1>
            <a href="https://kaleidoscopic-melba-3723af.netlify.app/">Memory Matching Game</a>
          </h1>
          <p>
          This memory game was made using ReactJs in it I started my learning in react.
          </p>
          <ul>

            <li>ReactJs</li>
            <li>CSS</li>
            
          </ul>
        </div>
        <div className="card-footer">
          <div className="btn-view">
            <a href="https://kaleidoscopic-melba-3723af.netlify.app/">View Project</a>
          </div>
          <div className="btn-sociais">
            <a href="https://github.com/Enrickyb/memory-game">
              <img src="/images/black/github.png" alt="github" />
            </a>
            {/* <a href="_changelater"><img src="" alt="" /></a> */}
          </div>
        </div>
      </div>



      {/* card 3 */}
      

      <div className="card">
        <div className="card-image" id="card-two">
          <h3>Via Certa</h3>
        </div>
        <div className="card-content">
          <h1>
            <a href="https://enrickyb.github.io/Clone-site-ViaCerta/">Via Certa Clone</a>
          </h1>
          <p>
            This project is a clone of the website of the distributor Via Certa
            from Manaus-AM, in which I learned important lessons such as the
            image carousel and the "Hamburger" menu.
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="card-footer">
          <div className="btn-view">
            <a href="https://enrickyb.github.io/Clone-site-ViaCerta/">View Project</a>
          </div>
          <div className="btn-sociais">
            <a href="https://github.com/Enrickyb/Clone-site-ViaCerta">
              <img src="/images/black/github.png" alt="github" />
            </a>
            {/* <a href="_changelater"><img src="" alt="" /></a> */}
          </div>
        </div>
      </div>

      
      {/* Card 4 */}
      
      <div className="card">
        <div className="card-image" id="card-three">
          <h3>To Do</h3>
        </div>
        <div className="card-content">
          <h1>
            <a href="https://dashing-kleicha-360322.netlify.app/">To Do list</a>
          </h1>
          <p>
            I developed this to-do list with my knowledge, where you can add,
            remove and mark activities as done.
          </p>
          <ul>
            <li>ReactJs</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="card-footer">
          <div className="btn-view">
            <a href="https://dashing-kleicha-360322.netlify.app/">View Project</a>
          </div>
          <div className="btn-sociais">
            <a href="https://github.com/Enrickyb/to-do">
              <img src="/images/black/github.png" alt="github" />
            </a>
          </div>
        </div>
      </div>

      {/* card 5 */}

      <div className="card">
        <div className="card-image" id="card-four">
          <h3>Tic Tac Toe</h3>
        </div>
        <div className="card-content">
          <h1>
            <a href="https://enrickyb.github.io/projeto-jogo-da-velha/">Tic Tac Toe</a>
          </h1>
          <p>
          A small project where I put into practice my JavaScript learnings and I could learn many things.
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="card-footer">
          <div className="btn-view">
            <a href="https://enrickyb.github.io/projeto-jogo-da-velha/">View Project</a>
          </div>
          <div className="btn-sociais">
            <a href="https://github.com/Enrickyb/projeto-jogo-da-velha">
              <img src="/images/black/github.png" alt="github" />
            </a>
          </div>
        </div>
      </div>

     

      
    </div>
  );
}
