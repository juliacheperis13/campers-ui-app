import clsx from "clsx";

const Button = ({ children, type, clickHandler }) => {
  return <button className={clsx([type, 'button'])} onClick={clickHandler}>{children}</button>;
};

export default Button;
