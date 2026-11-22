import { PageHeader } from "../../components/PageHeader/PageHeader";
import { menuCopy } from "./Menu.content";
import { MenuContent } from "./components/MenuContent/MenuContent";
import "./Menu.css";

export const Menu = () => {
  return (
    <div>
      <PageHeader
        eyebrow={menuCopy.eyebrow}
        title={menuCopy.title}
        lead={menuCopy.lead}
      >
        <p className="menu-page__note">{menuCopy.note}</p>
      </PageHeader>

      <MenuContent />
    </div>
  );
};
