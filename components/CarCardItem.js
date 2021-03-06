import React from "react";
import Link from "next/link";
import { CapitalizeV2 } from "../utils/capitalize";

// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles((theme)=>({
//   mobileImage:{
//     width: "100%",
//     height: "100px",
//     objectFit: "cover",
//     [theme.breakpoints.down('xs')]:{.
//       height: "70px",
//     }
//   }
// }));

const CarCardItem = ({ data }) => {
  return (
    <Link  href={`/autos/${data && data.name}`}>
      <a>
        <div
        className="animated fadeIn"
          style={{
            border: "1px solid #d8d8d8",
            padding: "1em",
            borderRadius: "10px",
          }}
        >
           <img
            src={data.image}
            alt='image logo'
            width={"auto"}
            height={"auto"}
            className='mobileImage'
            title={CapitalizeV2(data.name)}
          />
        </div>
      </a>
    </Link>
  );
};

export default CarCardItem;
