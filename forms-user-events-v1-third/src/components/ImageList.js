import React from 'react';

const ImageList = (props) => {
    // use the Js Map to travers the Array and get the Image URl and Return for each instance in Array.
    // and we store the Images and then Print the Images in the Jsx section.
    
    const images = props.images.map((image) => {
      return <img src={image.urls.regular} />
    });
    
    return <div> {images}</div>

};

export default ImageList;