import React from "react";
import './ImageList.css'

const ImageList = (props) => {
  // console.log('images:', props.images);
  // const images = props.images.map((image ) => {
  //   return <img key={image.id} src={image.urls.regular} alt={image.description} />    
  // })

  // destructuring
  const images = props.images.map(({ id, urls, description }) => {
    return <img key={id} src={urls.regular} alt={description} />    
  })

  return (
    <div className="image-list">
      {images}
    </div>
  )
}

export default ImageList;
