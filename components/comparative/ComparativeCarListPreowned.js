import React from "react";
import { Grid } from "@mui/material";
import ComparativeCarItem from "./ComparativeCarItemPreowned";

const ComparativeCarList = ({ vehicles, loading, setDataList, handleDeleteFavSemis=() =>{} }) => {
  return (
    <Grid container spacing={5}>
      {vehicles &&
        (loading ? Array.from(new Array(12)) : vehicles).map(
          (vehicle, index) => (
            <Grid item xs={6} sm={3} md={3} lg={3} key={index}>
              <ComparativeCarItem
                handleDeleteFavSemis={handleDeleteFavSemis}
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
