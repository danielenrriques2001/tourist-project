import styled from 'styled-components';
import { Inter } from 'next/font/google';
import { Typography } from '@mui/material';


const Heading = styled(Typography)`

  && {

    padding: 32px;
 
 color: rgba(172, 175, 182, 1.5);
 font-size: 3.5rem;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 text-align: center;
 border-radius: 0px 0px 40px 40px;
 box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

 margin-bottom: 15px;

  cursor: pointer;
  transition: all .1s ease-in-out;
 &:hover {
   color: blue;
   font-weight: 600;
  
   &:after {
     content: '🌇';
     display: inline;
     color: blue;
   }
 }


  }


`;

 const Header = ({className}) => {
  return (
  <>
    <Heading className={className} variant="h2">Nuboom</Heading>
  </>
  
  
  );
}






export default Header;