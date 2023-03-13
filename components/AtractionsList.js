import React from 'react'
import AtractionElement from './AtractionElement'
import { Container } from '@mui/material'
import {Grid} from '@mui/material'

const AtractionsList = ({atractions, router}) => {
  return (
    <Container>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            atractions.map((atraction) => {

              const {description, id, image, location, mapURL, name, _id } = atraction;

              return(
                <Grid item  xs={12} sm={4} md={0}>
                    <AtractionElement
                  description = {description}
                  key = {_id}
                  image = {image}
                  location = {location}
                  mapURL = {mapURL}
                  name = {name}
                  id_Atraction = {_id}
                  router = {router} 
                />


                </Grid>
                
                )
            })
        }
    </Grid>
    </Container>
  )
}

export default AtractionsList