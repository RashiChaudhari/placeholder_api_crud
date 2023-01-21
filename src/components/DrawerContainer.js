import React from "react";
import Drawer from '@mui/material/Drawer';;
const DrawerContainer = (props) => {
  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      anchor="right"
     
    >
      {props.children}
    </Drawer>
  );
};

export default DrawerContainer;