import React from "react";
import ImageCard from "./ImageCard";
import './ImageList.css'

const ImageList = (props) => {
  // console.log('images:', props.images);
  const images = props.images.map((image ) => {
    return <ImageCard key={image.id} image={image} />    
  })

  // destructuring
  // const images = props.images.map(({ id, urls, description }) => {
  //   return <img key={id} src={urls.regular} alt={description} />    
  // })

  return (
    <div className="image-list">
      {images}
    </div>
  )
}

export default ImageList;
