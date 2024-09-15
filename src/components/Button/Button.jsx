import clsx from "clsx";

const Button = ({ children, type = "button", kind, clickHandler }) => {
  return <button type={type} className={clsx([kind, 'button'])} onClick={clickHandler}>{children}</button>;
};

export default Button;
