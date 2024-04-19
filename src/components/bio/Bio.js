import { data } from "../../artistData";
import classes from "./bio.module.css";
import Insta from "../../assets/imgs/instagramR.svg";
import Mail from "../../assets/imgs/mail.svg";

const Bio = () => {
  return (
    <div className={classes.bioContainer}>
      <img src={data.portrait} />
      <div>
        <p>1978. San José, Costa Rica. </p>
        <p>
          Una primera formación con los artistas Nela Salgado y Héctor Burke me
          lleva a estudiar grabado y pintura en la Universidad de Costa Rica.
        </p>
        <p>
          Me interesa la idea de crear una imagen que aunque sugiera una
          interpretación narrativa sea incapaz de proporcionarla.
        </p>
      </div>
      <div className={classes.contact}>
        <a href="https://www.instagram.com/ignacioqsal/?hl=es-la">
          <img src={Insta} />
        </a>
        <a href="mailto:nachoqs@gmail.com" target="_blank">
          <img src={Mail} />
        </a>
      </div>
    </div>
  );
};

export default Bio;
