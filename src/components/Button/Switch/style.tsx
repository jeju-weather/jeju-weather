import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)<{ $isdark: boolean }>`
  position: fixed;
  z-index: 10;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 50px;
  background-color: ${(props) => props.theme.background.point};
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 0 5px;
  cursor: pointer;

  .handle {
    width: 40px;
    height: 40px;
    background-color: white;
    transform: ${(props) => (props.$isdark ? 'translateX(72%)' : 'translateX(0%)')};
    transition: transform 0.3s ease-in-out;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #222831;
  }
`;
