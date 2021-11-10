import StripLoading from './StripLoading/Index';
import HeartLoading from './HeartLoading/Index';
import TrackBtn from './TrackBtn/Index';
import Svg from './Svg/Index';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <h1>CSS 变量</h1>
      </header>
      <div>
       <Svg />
      </div>
      <main>
        <div className="flex-ct-x">
          <StripLoading />
        </div>
        <div className="flex-ct-x">
          <HeartLoading />
        </div>
        <div className="flex-ct-x">
          <TrackBtn />
        </div>
      </main>
    </div>
  );
}

export default App;
