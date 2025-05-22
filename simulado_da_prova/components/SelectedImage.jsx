import React from "react";
import styled from "styled-components";

const SelectedImageContainer = styled.div`
  margin-top: 20px;
  img {
    width: 300px;
    height: auto;
  }
`;

const SelectedImage = ({ image }) => {
  return (
    <SelectedImageContainer>
      <img src={image.src} alt={image.alt} />
      <p>{image.alt}</p>
    </SelectedImageContainer>
  );
};

export default SelectedImage;