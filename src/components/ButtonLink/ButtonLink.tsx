import type { ReactNode } from "react";
import { Link } from "react-router";
import "./ButtonLink.css";

const buttonVariants = {
  primary: "primary",
  quiet: "quiet",
} as const;

type ButtonVariant = (typeof buttonVariants)[keyof typeof buttonVariants];

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export default function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const classes = ["button-link", `button-link--${variant}`, className].filter(Boolean).join(" ");

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  );
}
