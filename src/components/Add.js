import React from "react";
import Close from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
export const Add = (
  //  { onAdd},
  props
  ) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    props.onAdd(evt.target.name.value, evt.target.email.value,evt.target.username.value);
    evt.target.name.value = "";
    evt.target.email.value = "";
    evt.target.username.value="";
  };
  console.log(props,"props");
  return (
    <> <div>
    <Close  onClick={props.close} style={{marginLeft:"90%"}} />

   
  </div>
    <form onSubmit={handleOnSubmit} style={{width:"100%"}}>
      <h3>Add User</h3>
      <input placeholder="Name" name="name" />
      <input placeholder="Email" name="email" />
      <input placeholder="UserName" name="username" />
      <br></br>
      <button onSubmit={handleOnSubmit} style={{marginLeft:"45%",marginTop:"10%"}}>Add</button>
      {/* <Button variant="contained" style={{marginLeft:"70%"}} onSubmit={handleOnSubmit}>Add</Button> */}
      <hr />
    </form></>
  );
};
