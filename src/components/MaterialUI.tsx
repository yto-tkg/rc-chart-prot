import React from "react";
import { Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography color="secondary" variant="h1" align="left">
        Hello UI
      </Typography>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>
    </div>
  );
};

export default MaterialUI;
