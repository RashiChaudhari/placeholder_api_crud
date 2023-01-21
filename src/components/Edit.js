import React from "react";
import Close from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

export const Edit = (
  //  { onAdd},
  props
  ) => {
    const handleEdit = () => {
        setIsEdit(!isEdit);
      };
    const handleOnEditSubmit = (evt) => {
        evt.preventDefault();
        onEdit(id, evt.target.name.value, evt.target.email.value);
        setIsEdit(!isEdit);
      };
  console.log(props,"props");
  return (
    <> 
   <Add/></>
  );
};
