import React, { useState } from "react";
import EditForm from "../../molecules/admin/EditForm";
import ProfileImage from "../../atoms/admin/ProfileImage";
import styled from "styled-components";
import { FormBtn } from "../../atoms/admin/FormBtn";
import axios from "axios";

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Info = ({ isEdit, uid }) => {
  const [isEditState, setIsEdit] = useState(isEdit);
  const [imageUrl, setImageUrl] = useState("");
  const [fields, setFields] = useState([
    { id: 1, label: "이메일", value: "" },
    { id: 2, label: "이름", value: "" },
    { id: 3, label: "전화번호", value: "" },
    { id: 4, label: "비밀번호", value: "", isPassword: true },
  ]);

  const handleInputChangeLocal = (id, value) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const handleEditClick = () => {
    if (isEditState) {
      axios
        .put(`/admin/${uid}`, fields)
        .then((response) => {
          setFields(response.data);
        })
        .catch((error) => {
          console.error("Error updating admin info:", error);
        });
    }
    setIsEdit(!isEditState);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(`/admin/${uid}/image`, formData)
      .then((response) => {
        setImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.error("Error updating image:", error);
      });
  };

  return (
    <FieldContainer>
      <ProfileImage
        onImageChange={handleImageChange}
        imageUrl={imageUrl}
        isEdit={isEditState}
      />{" "}
      {fields.map(
        (field) =>
          (!field.isPassword || isEditState) && (
            <EditForm
              key={field.id}
              isEdit={isEditState}
              labelContent={field.label}
              onInputChange={(e) =>
                handleInputChangeLocal(field.id, e.target.value)
              }
              inputValue={field.value}
            />
          )
      )}
      <FormBtn onClick={handleEditClick}>
        {isEditState ? "저장" : "수정"}
      </FormBtn>
    </FieldContainer>
  );
};

export default Info;
