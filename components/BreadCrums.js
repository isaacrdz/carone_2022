import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      marginBottom: 50,
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadcrumbComponent = ({ data, section }) => {
  const { model, year, make } = data;
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginBottom: 10 }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" passHref={true} href={`/${section}`}>
          <Button>{section}</Button>
        </Link>
        <Link color="inherit" passHref={true} href="/autos">
          <Button>Autos</Button>
        </Link>
        <Link color="inherit" passHref={true} href={`/autos/${make && make.name}`}>
          <Button>{make && make.name}</Button>
        </Link>
        <Typography color="textPrimary" style={{ textTransform: "capitalize" }}>
          <Button disabled>
            {model} {year}
          </Button>
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbComponent;
