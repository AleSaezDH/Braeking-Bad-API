import {useState, useEffect} from 'react';
import './app.css';

function App() {

  const [datos, setDatos] = useState({});

  function pedirFrase () {
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(response => response.json())
    .then(data => data.map(x => setDatos({frase:x.quote, autor:x.author})));
  }

  useEffect(() => {
    pedirFrase()
  }, []);

  return <>{Object.keys(datos).length === 0 ? null : <>
  <body>
    <section>
      <div className='content'>
        <h1>"{datos.frase}"</h1>
        <h1 className='h1'>{datos.autor}</h1>
      </div>
    <button onClick={pedirFrase}>Otra frase</button>
    </section>
  </body>
  </>}
  </>
}

export default App;
