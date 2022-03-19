import React, { useState } from "react";
import styled from "styled-components";
import "./file-input-button.css";
import { StyledButton } from "../../../components/Button/Button.style";

const ImageUpload = ( props ) => {
  const [image, setImage] = useState([]);
  const [imagePrev, setImagePrev] = useState("");
  const [imageName, setImageName] = useState("");
  //DESTRUCTURE PROPS
  const {folderName = ""} =  props

  const uploadImage = () => {
    setImage("");
    setImagePrev("");
    const data = new FormData();
    data.append("file", image);
    data.append("folder", folderName);
    data.append("public_id", imageName);
    data.append("upload_preset", "gallery");
    data.append("cloud_name", "proj3");
    fetch("  https://api.cloudinary.com/v1_1/proj3/image/upload", {
      method: "post",
      body: data,
    })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
  };

  const imagePreview = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    setImage(file);
    reader.onloadend = () => {
      setImageName(file.name)
      setImagePrev({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

//RENDERS IMAGE PREVIEW IF ONE EXISTS
const previewUrl =  imagePrev.imagePreviewUrl && <Image src={imagePrev.imagePreviewUrl} alt="NEED ALT DATA"/> 
//RENDERS UPLOAD BUTTON IF imagePrev EXISTS
const uploadButton = imagePrev && <UploadButton onClick={uploadImage}>Upload</UploadButton>

  return (
    <UploadContainer>
      <StyledRow>
        <h2>Upload</h2>
        <ChooseButton
          buttonLabel="Choose File"
        
        >
          <input 
          type="file" 
          accept="image/png, image/jpeg, image/svg, image/gif" 
          onChange={(e) => imagePreview(e)}
          />
        </ChooseButton>
        
          {uploadButton}
      </StyledRow>
      {previewUrl}
    </UploadContainer>
  );
};

export default ImageUpload;

const UploadContainer = styled.div`
  font-size: 1rem;
  color: aliceblue;
`
const ChooseButton = styled.div`
  margin: 0 1rem 0 1rem;
  width:100px;
`
const UploadButton = styled.button`
  background-color: #eb1717;
  color: rgb(136, 136, 136);
  border: 1px transparent solid;
  border-radius: 4px;
  border: 1px transparent solid;
  transition: all .4s;
  background-color: #b7eb7d;

  height: 42px;
    &:hover {
      transition: all .4s;
      background-color: transparent;
      border: 1px #b7eb7d solid;
  
      color: #b7eb7d;
    }
`

const Image = styled.img`
  margin: 1rem auto 0;
  width: 300px;
`

const StyledRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: center ;
  /* background-color:blue; */
`