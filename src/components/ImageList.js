import React from "react";

const ImageList = (props) => {
  // console.log('images:', props.images);
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} alt="regular img" />    
  })

  return (
    <div>
      {images}
    </div>
  )
}

export default ImageList;
