import React, { useState } from "react";
import EditForm from "../../molecules/admin/EditForm";
import { FormBtn } from "../../atoms/admin/FormBtn";
import styled from "styled-components";
import axios from "axios";

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const BodyContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [fields, setFields] = useState([
    { id: 1, label: "이메일", value: "" },
    { id: 2, label: "이름", value: "" },
    { id: 3, label: "전화번호", value: "" },
    { id: 4, label: "비밀번호", value: "", isPassword: true },
  ]);

  const handleInputChange = (id, value) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  const handleEditToggle = ({ uid }) => {
    if (isEdit) {
      setFields(fields.map((field) => ({ ...field, label: field.value })));
      axios
        .put(`/admin/${uid}`, fields)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setIsEdit(!isEdit);
  };

  return (
    <>
      {fields.map(
        (field) =>
          (!field.isPassword || isEdit) && (
            <FieldContainer>
              <EditForm
                key={field.id}
                isEdit={isEdit}
                labelContent={field.label}
                onInputChange={(e) =>
                  handleInputChange(field.id, e.target.value)
                }
                inputValue={field.value}
              />
            </FieldContainer>
          )
      )}
      <FormBtn onClick={() => handleEditToggle({ uid: ":uid" })}>
        {isEdit ? "저장" : "수정"}
      </FormBtn>{" "}
    </>
  );
};
export default BodyContainer;
