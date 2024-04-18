import classes from "./modal.module.css";
import Triangle from "../../assets/imgs/triangle.svg";

const Modal = ({
  clickedImg,
  setClickedImg,
  handleRotationRight,
  handleRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <div className={classes.background} onClick={handleClick}>
      <span className="dismiss" onClick={handleClick}>
        X
      </span>
      <img src={clickedImg.pic} />
      <p>{clickedImg.description}</p>
      <img
        className={classes.triLeft}
        src={Triangle}
        onClick={handleRotationLeft}
      />
      <img
        className={classes.triRight}
        src={Triangle}
        onClick={handleRotationRight}
      />
    </div>
  );
};

export default Modal;
