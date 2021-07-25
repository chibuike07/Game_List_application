import React from "react";
import ButtonStyles from "./Button.module.css";

const { button } = ButtonStyles;
const Button = ({
  name,
  color,
  backgroundColor,
  click,
  id,
  text,
  className,
  width,
  minWidth,
  outline,
  margin,
  padding,
  border,
  borderRadius,
  ref,
  textTransform,
  type,
}) => (
  <button
    style={{
      backgroundColor: backgroundColor ? backgroundColor : "red",
      color: color ? color : "#fff",
      width: width ? width : null,
      minWidth: minWidth ? minWidth : null,
      outline: outline ? outline : null,
      margin: margin ? margin : null,
      padding: padding ? padding : null,
      border: border ? border : null,
      borderRadius: borderRadius ? borderRadius : null,
      cursor: "pointer",
      textTransform: textTransform ? textTransform : null,
    }}
    onClick={click ? click : null}
    id={id ? id : null}
    name={name ? name : null}
    className={className ? className : button}
    ref={ref ? ref : null}
    type={type ? type : null}
  >
    {text ? text : "click"}
  </button>
);

export default Button;
