import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="Nav-bar">
          <img src="./images/logoIron.png" alt="logoIron" />
          <img src="./images/menu.png" alt="menu" />
        </div>
        <h1>Say Hello to ReactJS</h1>
        <p className="Paragraph">
          You will learn to use the most popular frontend library and become a
          super ninja developer.
        </p>
        <button class="Button">Awesome!</button>
      </div>
      <div className="Container">
        <div className="Section">
          <img src="./images/icon1.png" alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="Section">
          <img src="../images/icon2.png" alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="Section">
          <img src="./images/icon3.png" alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className="Section">
          <img src="./images/icon4.png" alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
