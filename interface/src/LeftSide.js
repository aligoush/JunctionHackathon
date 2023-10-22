
import imagen from "./mercadona1.jpg";
import "./App.css";

const LeftSide = ({handleSubmit}) => {


  return (
    <div className="container">

        <img src={imagen} alt="ticket" />

      <div className="btn-container">
      <button onClick={handleSubmit}>Send photo</button>
      </div>
    </div>
  );
};

export default LeftSide;
