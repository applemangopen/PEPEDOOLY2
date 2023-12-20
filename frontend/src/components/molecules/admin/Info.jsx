import React, { useState, useEffect } from "react";
import EditForm from "../../molecules/admin/EditForm";
import ProfileImage from "../../atoms/admin/ProfileImage";
import styled from "styled-components";
import { FormBtn } from "../../atoms/admin/FormBtn";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FieldContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // 추가
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  gap: 0 120px;
  justify-content: center;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

const DeleteButton = (props) => (
  <FormBtn {...props} background="red" color="white" />
);

const EditButton = (props) => (
  <FormBtn {...props} background="#aeaeae" color="black" />
);
const Info = ({ isEdit, data }) => {
  console.log(data);
  const [isEditState, setIsEdit] = useState(isEdit);
  const [imageUrl, setImageUrl] = useState("");
  const [fields, setFields] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (data) {
      setFields([
        { id: 1, label: "", value: data.Admin_id || "" },
        { id: 2, label: "", value: data.Admin_name || "" },
        { id: 3, label: "", value: data.Admin_nickname || "" },
        { id: 4, label: "", value: "", isPassword: true },
      ]);
    }
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
    <>
      <Container>
        <FieldContainerWrapper>
          <FieldContainer>
            <ProfileImage
              onImageChange={handleImageChange}
              imageUrl={imageUrl}
              isEdit={isEditState}
            />
            <FieldWrapper>
              {fields &&
                fields.map(
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
            </FieldWrapper>
          </FieldContainer>
        </FieldContainerWrapper>
        <ButtonContainer>
          <EditButton onClick={handleEditClick}>
            {isEditState ? "저장" : "수정"}
          </EditButton>{" "}
        </ButtonContainer>
      </Container>
    </>
  );
};
export default Info;
