import React from "react";
import { Label } from "../../atoms/admin/Label";
import { Input } from "../../atoms/admin/Input";

const EditForm = ({ isEdit, labelContent, onInputChange, inputValue }) => {
  return (
    <>
      {isEdit ? (
        <Input onChange={onInputChange} value={inputValue} />
      ) : (
        <Label>{labelContent}</Label>
      )}
    </>
  );
};

export default EditForm;
