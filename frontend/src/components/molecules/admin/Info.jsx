import React, { useState, useEffect } from "react";
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

const Info = ({ isEdit, data }) => {
  console.log(data);
  const [isEditState, setIsEdit] = useState(isEdit);
  const [imageUrl, setImageUrl] = useState("");
  const [fields, setFields] = useState([
    { id: 1, value: data.Admin_id || "" },
    { id: 2, value: data.Admin_name || "" },
    { id: 3, value: data.Admin_nickname || "" },
    { id: 4, value: "", isPassword: true },
  ]);

  useEffect(() => {
    setFields([
      { id: 1, value: data.Admin_id || "" },
      { id: 2, value: data.Admin_name || "" },
      { id: 3, value: data.Admin_nickname || "" },
      { id: 4, value: "", isPassword: true },
    ]);
  }, [data]);

  const handleInputChangeLocal = (id, value) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const handleEditClick = () => {
    if (isEditState) {
      axios
        .put(`/admin/edit`, fields)
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
      .post(`/admin/${data}/image`, formData)
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
