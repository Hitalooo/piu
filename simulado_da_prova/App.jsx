import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";
import SelectedImage from "./components/SelectedImage";

const Container = styled.div`
  width: 80%;
  min-height: 80vh;
  margin: auto;
  background-color: ${(props) => (props.theme === "light" ? "#fff" : "#333")};
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
  padding: 20px;
  text-align: center;
`;

const App = () => {
  const [theme, setTheme] = useState("light");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "https://via.placeholder.com/100", alt: "Imagem 1" },
    { src: "https://via.placeholder.com/100", alt: "Imagem 2" },
    { src: "https://via.placeholder.com/100", alt: "Imagem 3" },
    { src: "https://via.placeholder.com/100", alt: "Imagem 4" },
    { src: "https://via.placeholder.com/100", alt: "Imagem 5" },
    { src: "https://via.placeholder.com/100", alt: "Imagem 6" },
  ];

  return (
    <Container theme={theme}>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} />
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {selectedImage && <SelectedImage image={selectedImage} />}
    </Container>
  );
};

export default App;