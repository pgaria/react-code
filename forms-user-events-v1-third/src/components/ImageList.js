import React from 'react';

const ImageList = (props) => {
    // use the Js Map to travers the Array and get the Image URl and Return for each instance in Array.
    // and we store the Images and then Print the Images in the Jsx section.

    const images = props.images.map((image) => {
        // Adding the Key as well for the Image Tag because of the Warning regarding the Key in the Lists. this is just for react to be efficient
        // In the Dom Rendering if for example new item comes in the List and We render again the same List.
      return <img key= {image.id} src={image.urls.regular} />
    });
    
    return <div> {images}</div>

};

export default ImageList;