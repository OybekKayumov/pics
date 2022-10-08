import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props)

    this.imageRef = React.createRef();
  }
  
  componentDidMount() {
    // console.log('this imageRef: ', this.imageRef);
    // console.log('this imageRef: ', this.imageRef.current.clientHeight);

    this.imageRef.current.addEventListener('load', this.setSpans);

  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img 
          // src={this.props.image.urls.regular} 
          // alt={this.props.image.description} 
          
          alt={description}
          src={urls.regular}
          ref={this.imageRef}
        />
      </div>
    )
  }
}

export default ImageCard;
