import styled, { keyframes } from "styled-components";

const ContainerSidebar = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  h2 {
    background-color: #eee;
    border-left: 4px solid #f44336;
    color: #333;
    font-size: 18px;
    margin-bottom: 20px;
    padding: 10px;
    position: relative;
  }
`;

const ListImagensPublicidades = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    img {
      width: 100%;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${fadeIn} 2s ease-in-out, ${fadeOut} 2s ease-in-out 3s;
`;

export {
  ContainerSidebar,
  ListImagensPublicidades,
  Image
};
