import React, { useState, useEffect } from "react";
import EditForm from "../../molecules/admin/EditForm";
import ProfileImage from "../../atoms/admin/ProfileImage";
import styled from "styled-components";
import { FormBtn } from "../../atoms/admin/FormBtn";
import { useUserState } from "../../../hooks/useUserState";
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

const EditButton = (props) => (
  <FormBtn {...props} background="#aeaeae" color="black" />
);

const Info = ({ isEdit }) => {
  const [isEditState, setIsEdit] = useState(isEdit);
  const [imageUrl, setImageUrl] = useState("");
  const [fields, setFields] = useState([]);
  const { user } = useUserState();
  const { Admin_id, Admin_name, Admin_nickname } = user.userData || {};

  useEffect(() => {
    if (user) {
      setFields([
        { id: 1, label: "Admin_id", value: Admin_id || "" },
        { id: 2, label: "Admin_name", value: Admin_name || "" },
        { id: 3, label: "Admin_nickname", value: Admin_nickname || "" },
        { id: 4, label: "password", value: "", isPassword: true },
      ]);
    }
  }, [user]);

  const handleInputChangeLocal = (id, value) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const handleEditClick = () => {
    if (isEditState) {
      const formData = new FormData();
      const file = document.querySelector('input[type="file"]').files[0];
      if (file) {
        formData.append("image", file);
      }
      formData.append("id", Admin_id);
      formData.append("name", Admin_name);
      fields.forEach((field) => {
        if (field.label) {
          formData.append(field.label, field.value);
        }
      });
      console.log(formData);

      axios
        .put(`http://localhost:4000/admin/edit`, formData)
        .then((response) => {
          // response.data가 배열인지 확인
          if (Array.isArray(response.data)) {
            setFields(response.data);
          } else {
            console.error("Error: response.data is not an array");
          }
        })
        .catch((error) => {
          console.error("Error updating admin info:", error);
        });
    }
    setIsEdit(!isEditState);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);
    axios
      .post(`/admin/${Admin_id}/image`, formData)
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
