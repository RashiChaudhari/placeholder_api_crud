import React, { useState } from "react";
import Button from '@mui/material/Button';
import DrawerContainer from "./DrawerContainer";
export const User = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
   
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Name" name="name" defaultValue={name} />
          <input placeholder="Email" name="email" defaultValue={email} />
          <button  onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user" style={{marginLeft:"30%"}}>
        
          
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
          <div>
            <Button variant="contained" onClick={handleEdit}>Edit</Button>
            <Button variant="contained" style={{marginLeft:"10px"}} onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      )}
    </div>
  );
};
