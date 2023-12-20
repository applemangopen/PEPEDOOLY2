import React from "react";
import { Label } from "../../atoms/admin/Label";
import { Input } from "../../atoms/admin/Input";

const EditForm = ({ isEdit, onInputChange, inputValue }) => {
  return (
    <>
      {isEdit ? (
        <Input onChange={onInputChange} value={inputValue} />
      ) : (
        <Label>{inputValue}</Label>
      )}
    </>
  );
};

export default EditForm;
