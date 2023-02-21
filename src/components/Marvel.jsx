import './Marvel.css';

function Marvel(props) {
  return (
      <div className="marvel-card">
      <img src={props.url} alt={props.name}></img>
      <div className="marvel-name">{props.name}</div>
      <div className="marvel-text">{props.text}</div>
      <button>Подробнее</button>
      </div>  
  );
}

export default Marvel;