
import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Container from '../utils/Container'
const form = ({router}) => {


  const  addNewPlace = async (data) => {
    const response = await fetch("/api/atractions", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

      const res = await response.json();

      router.push('/')
      
  }

  return (
    <>
      <Container>
        <Link href={'/'}>
          <Button name = {`Back to Main Page`}/>
        </Link>
      </Container>
     
      <Form OnAddNewPlace = {addNewPlace}/>
    
    </>
   
  )
}

export default form