import React from "react";
import { Grid } from "@mui/material";
import ComparativeCarItem from "./ComparativeCarItem";

const ComparativeCarList = ({ vehicles, loading, setDataList, handleDeleteFav = () =>{} }) => {
  return (
    <Grid container spacing={5}>
      {vehicles &&
        (loading ? Array.from(new Array(12)) : vehicles).map(
          (vehicle, index) => (
            <Grid item xs={6} sm={3} md={3} lg={3} key={index}>
              <ComparativeCarItem
                handleDeleteFav={handleDeleteFav}
                vehicle={vehicle}
                loading={loading}
                setDataList={setDataList}
              />
            </Grid>
          )
        )}
    </Grid>
  );
};

export default ComparativeCarList;
