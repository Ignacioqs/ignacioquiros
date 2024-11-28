import { data } from "../../artistData";
import classes from "./bio.module.css";
import Insta from "../../assets/imgs/instagramR.svg";
import Mail from "../../assets/imgs/mail.svg";

const Bio = () => {
  return (
    <div className={classes.bioContainer}>
      <img src={data.portrait} />
      <div className={classes.contact}>
        <a href="https://www.instagram.com/ignacioqsal/?hl=es-la">
          <img src={Insta} />
        </a>
        <a href="mailto:nachoqs@gmail.com" target="_blank">
          <img src={Mail} />
        </a>
      </div>
      <div>
        <p>Ignacio Quirós Salgado (San José, Costa Rica, 1978) es un artista visual que reside y trabaja en San José. Su formación en las artes inició cuando era muy joven con clases particulares con los artistas Héctor Burke y Nela Salgado. Es egresado de Artes Plásticas de la Universidad de Costa Rica. </p>

        <p>Su trabajo ha sido exhibido en las exposiciones colectivas Contaminación Cruzada, en Espacio Sabático, 2020; Primera Colectiva deCERCA, en Kalú, San José, 2019; Extraterritorial, en 9/4’s, San José, 2018; Irreductible, C.R.A.C. Art, San José, y en Sin Título, en La ERRE, Guatemala, ambas en 2016; Más es Más, en Galería Equilátero, 2015; Mutismo, en Galería Equilátero, 2014. </p>

        <p>En su obra reciente examina un proceso y una identidad visual en la que ha venido trabajando a lo largo de los años, generando una tensión latente entre la imagen y la persona espectadora. En su pintura las figuras retratadas parecen estar suspendidas, a la espera de algo que quizás nunca ocurra. Este tipo de escenas suelen capturar momentos de quietud o introspección, donde los personajes parecen estar congelados en el tiempo. A menudo, estas representaciones sugieren un contexto emocional o psicológico sin revelar explícitamente la causa o el desenlace. Este concepto introduce una ambigüedad que puede ser interpretada de múltiples maneras, dependiendo de la subjetividad de quien la observa, e invita a proyectar sus propias expectativas y narrativas. 
</p>
      </div>
     
    </div>
  );
};

export default Bio;
