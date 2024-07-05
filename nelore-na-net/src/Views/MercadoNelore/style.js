import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5;
  padding: 50px 20px;
`;

export const Banner = styled.div`
  background-image: url('https://i.pinimg.com/originals/21/1f/04/211f04d43dee3856c5c152d7b16d4a3c.jpg'); 
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 20px;
  position: relative;
  span{
    line-height: 38px;
    z-index: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 10px;
  z-index: 1;
`;

export const Content = styled.div`
  margin-top: 20px;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  width: 300px;
  text-align: left;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const AdvantageList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const AdvantageItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 1.2rem;
  color: #333;
`;

export const CheckIcon = styled(FaCheckCircle)`
  color: green;
  margin-right: 10px;
`;
