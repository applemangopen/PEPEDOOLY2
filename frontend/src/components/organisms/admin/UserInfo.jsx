import React, { useState } from "react";
import EditForm from "../../molecules/admin/EditForm";
import { FormBtn } from "../../atoms/admin/FormBtn";
import styled from "styled-components";

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const UserInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [fields, setFields] = useState([
    { id: 1, label: "이메일", value: "" },
    { id: 2, label: "이름", value: "" },
    { id: 3, label: "전화번호", value: "" },
  ]);

  const handleEditToggle = () => {
    if (isEdit) {
      setFields(fields.map((field) => ({ ...field, label: field.value })));
    }
    setIsEdit(!isEdit);
  };

  const handleInputChange = (id, value) => {
    setFields(
      fields.map((field) => (field.id === id ? { ...field, value } : field))
    );
  };

  return (
    <>
      {fields.map((field) => (
        <FieldContainer>
          <EditForm
            key={field.id}
            isEdit={isEdit}
            labelContent={field.label}
            onInputChange={(e) => handleInputChange(field.id, e.target.value)}
            inputValue={field.value}
          />
        </FieldContainer>
      ))}
      <FormBtn onClick={handleEditToggle}>{isEdit ? "저장" : "수정"}</FormBtn>
    </>
  );
};

export default UserInfo;
