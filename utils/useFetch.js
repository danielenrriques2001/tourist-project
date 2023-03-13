import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [listAtractions, setListAtractions] = useState([])
    useEffect(() => {
      const startFetching = async (url) => {

        try {
          const response = await fetch(url);
         
          if(response.ok) {
            const data = await response.json();

            setListAtractions(data)
  
          }
        } catch (error) {
          console.log(`There's an Error: ${error} `)
        }
      }
    
        startFetching(url);
    }, [])

    return listAtractions;
  }


export default useFetch;