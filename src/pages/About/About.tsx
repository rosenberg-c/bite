import { PageHeader } from "../../components/PageHeader/PageHeader";
import { aboutCopy } from "./About.content";
import { AboutContent } from "./components/AboutContent/AboutContent";
import { AboutValues } from "./components/AboutValues/AboutValues";

export const About = () => {
  return (
    <div>
      <PageHeader
        eyebrow={aboutCopy.eyebrow}
        title={aboutCopy.title}
        lead={aboutCopy.lead}
      />
      <AboutContent />
      <AboutValues />
    </div>
  );
};
