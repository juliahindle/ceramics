import 'styles/test.css';

function App() {
  return (<>
    <header>
      <a href="/">
        <img src='logo.svg' alt='Website logo'/>
      </a>
      <nav>
        <ul>
          <li>About</li>
          <li>Resources</li>
          <li class="selected">Glazes</li>
        </ul>
      </nav>
    </header>

    <section>
          <div class="main">
              <div class="glazes">
                <img src='images/glazes/2x/1-38.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/1-39.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/13-4.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/13-5.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/13-6.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/13-7.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/16-1.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/33-4.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/33-5.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-0.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-0.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-1.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-2.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-3.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-4.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-5.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-6.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/36-7.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/40-0.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/40-1.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/40-2.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/40-3.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/40-4.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/40-5.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/40-6.png' alt='glaze 1'/> 
                <img src='images/glazes/2x/40-7.png' alt='glaze 1'/> 
              </div>
            </div> 
          <div class="sidebar">
            <img src='images/glazes/2x/40-7.png' alt='glaze 1'/> 
            <h2>Cone</h2>
            <p>Cone 6</p>
            <h2>Base Glaze</h2>
            <p>Chun</p>
            <h2>Clay</h2>
            <p>181 Stoneware</p>
            <h2>Recipe</h2>
            <table class="recipe">
              <tr>
                <td>F4 Feldspar</td>
                <td>41</td>
              </tr>
              <tr>
                <td>Silica</td>
                <td>27</td>
              </tr>
              <tr>
                <td>Whiting</td>
                <td>15</td>
              </tr>
              <tr>
                <td>EP Kaolin</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Zinc Oxide</td>
                <td>12</td>
              </tr>
              <tr class="add">
                <td>Add:</td>
              </tr>
              <tr>
                <td>Cobalt Carbonate</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Titanium Dioxide</td>
                <td>3</td>
              </tr>
            </table>
          </div>
        </section>
    </>);
}

export default App;
