import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

export const CarouselItem = styled.div`
  flex: 1;
  text-align: center;
  .card-vendas{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 1px 3px 6px 0 #0000002e;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
`;

export const CarouselTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const CarouselIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;
