import React from 'react'
import Card from '@mui/material/Card';
import Image from 'next/image';
import { Button, Grid, IconButton, Link, Typography } from '@mui/material';
import styled from 'styled-components';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';
import useFetch from '../utils/useFetch';
import Form from '../components/Form';
import {Nunito, Pacifico, Source_Sans_Pro} from 'next/font/google'

const pacifico = Pacifico({ 
subsets: ['latin'] ,
 weight: ['400']})

const SSansPro = Source_Sans_Pro({
  subsets: ['latin'], 
  weight: ['400', '700', '900']})

const Atraction = ({description,  image, location, mapURL, name, id_Atraction, isEditMode, atraction, updateProduct}) => {


  const router = useRouter();


  return (

   
    <Container> 
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 

    <Grid item  xs={12} sm={8} md={isEditMode ? 6 : 12}>
    <CardStyled variant="outlined">
      <>

        <Heading2 variant="h3">{name}</Heading2>
        <Image 
          src={image}
          alt= {`This is a ${name} in ${location}`}
          width={350}
          height={300}
          onClick = {() => router.push(`/${id_Atraction ? id_Atraction : ''}`)}
        />
      </>
      <Description>{id_Atraction ? '' : description}</Description>
        
        <MiniContainer>
          <StyledButton variant="contained" color = 'success'>{location}</StyledButton>
          <Link
            href={mapURL}
            underline="none"
          >
          <ButtonLocation variant='contained'>Location</ButtonLocation>
          </Link>
      </MiniContainer>
      </CardStyled>
      
      </Grid> 
      <Grid item  xs={12} sm={4} md={0}>

      {isEditMode && < Form 
                          isEditMode = {isEditMode}
                          name = {name}
                          description = {description}
                          location = {location}
                          mapURL = {mapURL}
                          image = {image}
                          SubmitUpdate = {updateProduct}
                          ID = {atraction._id}
                          />}


      </Grid>
        </Grid>
      </Container>
     
   
  )
}

export default Atraction;

const StyledButton = styled(Button)`

  background-color: #222;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;


&&:active,
&&:hover {
  opacity: .75;
}

`;

const ButtonLocation = styled(Button)`

  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;


&&:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

&&:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

&&:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}

`;

const Heading2 = styled(Typography) `

  && {
      font-size: 1.2rem;
      font-weight: 100;
      font-family: ${pacifico};
      text-align: center;
      border-radius: 0px 0px 40px 40px;
      margin: 15px;
      text-transform: capitalize;
      
      cursor: pointer;
      transition: all .1s ease-in-out;
      &:hover {
        color: black;
        font-weight: 600;
      
      }
  }
 

`;

const Description = styled.p`

 font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  

`;

const CardStyled = styled(Card)`

 && {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 45px;

  padding-bottom: 15px;
 }
  
`;

const MiniContainer = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

`;
