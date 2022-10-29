import React from 'react';
import Home from './pages/Home/home';
import Carousel, {CarouselItem} from "./components/carousel/carousel"

export default function App () {
  return(
  <div>
    <Home />
    <Carousel >
      <CarouselItem >Item 1</CarouselItem>
      <CarouselItem >Item 2</CarouselItem>
      <CarouselItem >Item 3</CarouselItem>
    </Carousel>
  </div>
    
  )
}