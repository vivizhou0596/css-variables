import './index.css';

function StripLoading() {
  return (
    	<div className="heart-loading flex-ct-x">
        <ul style={{'--line-count':9}}>
          {
            Array.from({length:9}).map((item,index)=>{
              return <li key={index} style={{'--line-index':index+1}} className={`line-${index+1}`}></li>
            })
          }
        </ul>
      </div>
  );
}

export default StripLoading;