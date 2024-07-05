import React from 'react';
import { CarouselContainer, CarouselItem, CarouselTitle } from './CarouselStyle';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const CarouselSection = ({ data }) => {
  const [currentItem, setCurrentItem] = React.useState(0);
  const totalItems = data.length;

  const prevItem = () => {
    setCurrentItem((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextItem = () => {
    setCurrentItem((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <CarouselContainer>
      <FaChevronLeft onClick={prevItem} className="carousel-arrow" />
      <CarouselItem>
        <div className="card-vendas">
          <img src={data.image} alt="Imagem do produto" />
          <CarouselTitle>{data.title}</CarouselTitle>
          <p>Valor: {data.preco}</p>
          <Link to="/contato" className="button">Quero comprar</Link>
        </div>
      </CarouselItem>
      <FaChevronRight onClick={nextItem} className="carousel-arrow" />
    </CarouselContainer>
  );
};

export default CarouselSection;
