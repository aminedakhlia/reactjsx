import logo from './logo.svg';
import './App.css';
import plat from "./plat.jpg"
import vid from "./aa.mp4"
function App() {
  return (
    
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Your name here</h1>
      <br />
      <img src={plat} alt ="myimage" />
      <br />
      <img src="/sparkle.jpg" alt="myimage" />
    </div>
    <video width={320} height={240} controls>
    <source src={vid} type="video/mp4" />
    </video>
  </div>

  );
}
export default App;
