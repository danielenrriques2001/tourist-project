import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import AtractionElement from "../components/AtractionElement";
import useFetch from "../utils/useFetch";
import Button from '../components/Button';
import Container from '../utils/Container'


import dbConnect from "../db/connect";
import Atraction from '../db/models/Atraction';
import { useState } from "react";



export default function ProductDetailsPage({router, atraction}) {

  const { push, query: { id }} = router;

  const [isEditMode, SetIsEditMode] = useState(false);

  const deletePlace = async (id) =>{
        
    const resp = await fetch(`/api/atractions/${id}`, {
      method: 'DELETE'
    })
    .then(res => console.log("SUCCESS:: "+ res.json()))
    .catch(e => console.log("ERROR:" + e))
    
    router.push("/")
}

async function updateProduct(id, data) {
  const response = await fetch(`/api/atractions/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => console.log("SUCCESS:: "+ res.json()))
    .catch(e => console.log("ERROR:" + e))

  router.push('/')
}

  if(atraction) return (

            <>
               <AtractionElement
                description = {atraction.description}
                image = {atraction.image}
                location = {atraction.location}
                mapURL = {atraction.mapURL}
                name = {atraction.name}
                id = {atraction.id_db}
                routerId = {id}
                isEditMode = {isEditMode}
                atraction = {atraction}
                updateProduct = {updateProduct}
                />

                <Container>
                <Link href ={'/'}>
                <Button name = {`Back to Main Page`}/>
                </Link>
                

                <Button 
                  name = {'Delete Item'} 
                  onDeletePlace={() => {deletePlace(id)}}
                  isADeleteButton = {true}
                  >
                </Button>

                <Button
                  name = {'Edit Item'}
                  isOnEditButton = {true}
                  onEditButton={() => {SetIsEditMode(!isEditMode)}}
                >  
                </Button>
                
                </Container>

            </>
               
          )
}

export async function getServerSideProps(context) {


  const {id} = context.query
 
  await dbConnect()


    try {

      const atraction = await Atraction.findById(id);

      return {
        props: {
          atraction: JSON.parse(JSON.stringify(atraction))
        }
      }

      
    } catch (error) {

      return {
        notFound: true
    }
      
    }

  }
    


