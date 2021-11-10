import './Index.css';

function Svg() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon-container">
        <symbol id="close-icon" viewBox="0 0 200 200">
          <circle cx="96" cy="96" r="88" fill="none" stroke="var(--icon-color)" strokeWidth="15" />
          <text x="100" y="160" fill="var(--icon-color)" textAnchor="middle" style={{fontSize:'250px'}}>x</text>
        </symbol>
      </svg>

      <div className="container">
        <div>
          <h2>Default Icon</h2>
          <svg role="img" dangerouslySetInnerHTML={{__html:'<use xlink:href="#close-icon"></use>'}}></svg>
        </div>
        <div className="danger">
          <h2>Danger Icon</h2>
          <svg role="img" dangerouslySetInnerHTML={{__html:'<use xlink:href="#close-icon"></use>'}}></svg>
        </div>

        <div className="success">
          <h2>Success Icon</h2>
          <svg role="img" dangerouslySetInnerHTML={{__html:'<use xlink:href="#close-icon"></use>'}}></svg>
        </div>

        <div className="alert">
          <h2>Alert Icon</h2>
          <svg role="img" dangerouslySetInnerHTML={{__html:'<use xlink:href="#close-icon"></use>'}}></svg>
        </div>
      </div>
    </div>
  );
}

export default Svg;