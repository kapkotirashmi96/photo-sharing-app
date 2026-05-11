import { cn } from "../../utils";
import styles from "./style.module.css";

type ButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

const Button = ({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(styles[variant], className)}
    />
  );
};

export default Button;