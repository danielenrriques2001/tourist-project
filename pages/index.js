import { useEffect, useState } from "react";
import AtractionsList from "../components/AtractionsList";
import Button from "../components/Button";
import useFetch from "../utils/useFetch";
import styled from "styled-components";


import dbConnect from "../db/connect";
import Atraction from '../db/models/Atraction';

import Link from "next/link";
import Container from "../utils/Container";

const Home =({atractions, router}) => {
 
  return (
    <>
      <AtractionsList 
        atractions = {atractions}
        router = {router}/>

      <Container>
      <Link href={'/form'}>
        <Button name = {`➕ Place`}/>
      </Link>
      </Container>
      
     
    </>
  )
}

export default Home;

export async function getServerSideProps() {


  await dbConnect()

      try {
        const atractions = await Atraction.find()
       

        return {
          props: {
            atractions: JSON.parse(JSON.stringify(atractions))
          }, 
        }


      } catch (error) {
        
        return {
            notFound: true
        }
      }
    }







  