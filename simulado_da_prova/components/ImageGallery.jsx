import React from "react";
import styled from "styled-components";

const ImageGalleryContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryContainer>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          onClick={() => onImageClick(image)}
        />
      ))}
    </ImageGalleryContainer>
  );
};

export default ImageGallery;