import './Index.css';

function StripLoading() {
  return (
    <ul className="strip-loading flex-ct-x" >
      {
        Array.from({length:6}).map((item,index)=>{
          return <li key={index} style={{'--line-index':index}} ></li>
        })
      }
    </ul>
  );
}

export default StripLoading;