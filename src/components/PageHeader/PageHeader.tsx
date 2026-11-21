import type { ReactNode } from "react";
import "./PageHeader.css";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
};

export const PageHeader = ({
  eyebrow,
  title,
  lead,
  children,
}: PageHeaderProps) => {
  return (
    <header className="page-header">
      <div className="page-header__inner container">
        <p className="page-header__eyebrow eyebrow">{eyebrow}</p>
        <h1 className="page-header__title">{title}</h1>
        <p className="page-header__lead lead-copy">{lead}</p>
        {children ? <div className="page-header__extra">{children}</div> : null}
      </div>
    </header>
  );
};
