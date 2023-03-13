import React from 'react'
import {TextField, Button } from '@mui/material';
import styled from 'styled-components';
import useSWR from 'swr'
import useFetch from '../utils/useFetch';
import { nanoid } from 'nanoid'
import { useRouter } from 'next/router';

const Form = ({OnAddNewPlace, isEditMode, name, description, location, mapURL, image, SubmitUpdate, ID}) => {

  async function handleSubmit(event) {

    event.preventDefault();

    const formElements = event.target;

    const newAtraction = {
        name: formElements.name.value,
        image:formElements.image.value , 
        location: formElements.location.value,
        description: formElements.description.value,
        mapURL: formElements.mapURL.value,
        // id: nanoid(),
    }

    if(isEditMode) {
      SubmitUpdate(ID, newAtraction)

      return 
    }
     
      
      OnAddNewPlace(newAtraction)
    
  }

  return (
    <StyledForm onSubmit={handleSubmit}>

  <TextField
          style={{ width: "600px", margin: "5px" }}
          type="text"
          label={isEditMode ? '' : 'name'}
          variant="outlined"
          id='name'
          focused
          defaultValue={isEditMode && name}
        />
      <br />
    <TextField
      style={{ width: "600px", margin: "5px" }}
      type="text"
      label={isEditMode ? '' : 'image'}
      variant="outlined"
      id='image'
      defaultValue={isEditMode && image}
   
    />
    <br />
    <TextField
      style={{ width: "600px", margin: "5px" }}
      type="text"
      label={isEditMode ? '' : 'location'}
      variant="outlined"
      id='location'
      defaultValue={isEditMode && location}
    />
      <br />
 
    <TextField
      style={{ width: "600px", margin: "5px" }}
      type="text"
      label={isEditMode ? '' : 'Map Url'}
      variant="outlined"
      id='mapURL'
      defaultValue={isEditMode && mapURL}
    />
    <br />
    <TextField
      style={{ width: "600px", margin: "5px" }}
      type="text"
      label={isEditMode ? '' : 'description'}
      variant="outlined"
      id='description'
      defaultValue={isEditMode && description}
    />

    <br />
    <Button type='submit' variant="contained" color="primary">save</Button>
  </StyledForm>
  )
}

export default Form


const StyledForm = styled.form`
text-align: center;

`;