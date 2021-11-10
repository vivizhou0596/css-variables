import './Index.css';

function TrackBtn() {
  const move=(e)=>{
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  }
  return (
    <div className="track-btn pr" onMouseMove={(e)=>move(e)}>
      <span>妙用CSS变量，让你的CSS变得更心动</span>
    </div>
  );
}

export default TrackBtn;