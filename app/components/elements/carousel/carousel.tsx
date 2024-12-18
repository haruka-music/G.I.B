import React from "react";
import Styles from "../carousel/carousel.module.css";
import Image from "next/image";
import Cat3 from "../../../../../public/Cat3.jpg";
import Kiji from "../../../../../public/Kiji.jpeg";
import Siamese from "../../../../../public/Siamese.jpeg";
import BritishShorthair from "../../../../../public/BackImage.jpg";
import ImageGrallery from "../../../../../features/Toolphoto/components/ImageGrallery/ImageGrallery";

const carousel = () => {
  return (
    <>
      <div className={Styles.container}>
        <h2>My Grallery</h2>
        <form>
          <input type="text" placeholder="画像を探す" />
        </form>
        <ImageGrallery />
      </div>
    </>
  );
};

export default carousel;
