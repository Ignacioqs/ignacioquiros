import classes from "./home.module.css";
import { useState } from "react";
import Modal from "../modal/Modal";
import { data } from "../../artistData";

const Home = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handleRotationRight = () => {
    const totalLength = data.artworks.length;

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.artworks[0];
      setClickedImg(newUrl);
      return;
    }

    const newIndex = currentIndex + 1;
    const newItem = data.artworks[newIndex];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = data.artworks.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.artworks[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newItem = data.artworks[newIndex];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          setClickedImg={setClickedImg}
          handleRotationRight={handleRotationRight}
          handleRotationLeft={handleRotationLeft}
        />
      )}

      <div className={classes.gallery}>
        {data.artworks.map((item, index) => (
          <div key={index} className={classes.imgSquare}>
            <img
              alt="click"
              src={item.thumb}
              onClick={() => handleClick(item, index)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
