import React from "react";
import useAlert from '../hooks/useAlert';
import { FormHelperText } from '@mui/material';

const Alerta = (props) => {
  const { alert } = useAlert();

  return (
    alert !== null && (
      <FormHelperText error>
        {props.msg && props.msg}
      </FormHelperText>
    )
  );
};
export default Alerta;
