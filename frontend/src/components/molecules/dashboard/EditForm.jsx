import React from "react";
import { Label } from "../../atoms/dashboard/Label";
import { Input } from "../../atoms/dashboard/Input";

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
