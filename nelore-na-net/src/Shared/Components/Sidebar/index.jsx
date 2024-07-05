import React, { useEffect, useState } from "react";
import BovineQuotes from "../BovineQuotes";
import { ContainerSidebar, ListImagensPublicidades, Image } from "./style";

const images = [
  "https://d12ceyx7nhfnql.cloudfront.net/auctions/banners/000/002/023/medium/BANNER_PERFIL.png?1720020236",
  "https://www.geneticaaditiva.com.br/imagem/agenda/1000/1500/61_32836.jpg",
  // Adicione mais URLs de imagens aqui
];

const Sidebar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Altera a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <ContainerSidebar>
      <h2>Cotações</h2>
      <BovineQuotes />
      <h2>Arquivos</h2>
      <h2>Publicidade</h2>
      <ListImagensPublicidades>
        <Image
          src={images[currentImageIndex]}
          alt="Publicidade"
          key={currentImageIndex} // Força a atualização da animação
        />
      </ListImagensPublicidades>
    </ContainerSidebar>
  );
};

export default Sidebar;
