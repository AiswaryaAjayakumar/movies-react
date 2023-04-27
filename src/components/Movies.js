import { Button, Grid, ImageList, ImageListItem } from '@mui/material'
import React, { Component } from 'react'

export default class Movies extends Component {
    state={
        movie:[]
    }
   
   
  render() {
    return (
      <div>
   

        
       <ImageList sx={{ width: 1000, height: 900 }} cols={3} rowHeight={500}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
    
  ))}
</ImageList>
      </div>
    )
  }
}


const itemData = [
  {
    img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ponniyin-selvan--part-2-et00348725-1680776467.jpg',
     
  },
  {
    img: 'https://cdn.cinematerial.com/p/297x/npyfi8vj/john-wick-chapter-4-swiss-movie-poster-md.jpg?v=1678582234',
    title: 'John Wick Chapter 4',
  },
  {
    img: 'https://sportshub.cbsistatic.com/i/2023/01/03/732d9bb0-00b5-42b0-86c9-87e7928c9f9c/evil-dead-rise-poster-2022.jpg?auto=webp&width=1382&height=2048&crop=0.675:1,smart',
    title: 'Evil Dead Rise',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BMmQ5ZWU4OWUtNWVhMS00NzY4LWExZTctYzdhNmFlNzdlZjhmXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_QL75_UY281_CR18,0,190,281_.jpg',
    title: 'Neelavelicham',
  },
  {
    img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/adi-et00356542-1680612910.jpg',
    title: 'Adi',
  },
  {
    img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/madanolsavam-et00356965-1681107953.jpg',
    title: 'Madhanolsavam',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BOTgzN2JiOGItYWVlNC00OTU4LTg0MjMtODZmZGM3OTRmMmZiXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_FMjpg_UX1000_.jpg',
    title: 'Kadina Kadoramee Andakadaham',
  },
  {
    img: 'https://img.studioflicks.com/wp-content/uploads/2023/04/08104628/Enthada-Saji-Movie-HQ-Posters-2.jpg',
    title: 'Enthaada Saji',
  },
  {
    img: 'https://www.filmibeat.com/img/popcorn/movie_posters/coronapapers-20230405121038-21343.jpg',
    title: 'Corona Papers',
  },
  {
    img: 'https://assets.gadgets360cdn.com/pricee/assets/product/202304/Sulaikha-Manzil_1682078110.jpg',
    title: 'Sulaikha Manzil ',
  },
  {
    img: 'https://www.filmibeat.com/img/popcorn/movie_posters/pachuvumathbuthavilakkum-20230214200434-19805.jpg',
    title: 'Paachuvum Albhutha Vilakkum',
  },
  {
    img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ayalvaashi-et00354540-1678281961.jpg',
    title: 'Ayalvaashi',
  },
];



