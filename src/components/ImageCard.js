import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  
  componentDidMount() {
    // console.log('this imageRef: ', this.imageRef);
    // console.log('this imageRef: ', this.imageRef.current.clientHeight);

    this.imageRef.current.addEventListener('load', this.setSpans);

  }

  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    
    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
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
