import React from "react";
import styled from "styled-components";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <ImageCardBox>
        <div style={{ gridRowEnd: `spans ${this.state.spans}` }}>
          <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
      </ImageCardBox>
    );
  }
}
const ImageCardBox = styled.div``;
export default ImageCard;
