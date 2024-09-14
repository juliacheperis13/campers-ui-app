import clsx from "clsx";

const Button = ({ children, type }) => {
  return <button className={clsx([type, 'button'])}>{children}</button>;
};

export default Button;
