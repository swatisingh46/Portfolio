import React from 'react';
import {colors} from "../../style";
const Button=(props)=> {
    return (<a
        href="https://www.wikipedia.org/"
        style={{
          boxSizing: "border-box",
          padding: "10px 20px",
          background: props.inverse ? "transparent" : colors.primaryColor,
          color: props.inverse ? colors.primaryColor : "#fff",
          display: "inline-block",
          borderRadius: "20px",
          boxShadow: props.inverse ? "none" : "#c71616 0px 0px 10px 0px",
          border: "1px solid",
          borderColor: props.inverse ? colors.primaryColor : "transparent",
          fontSize: 16,
          letterSpacing: "1px",
        }}
      >{props.label}</a>
    );
};
export default Button;
