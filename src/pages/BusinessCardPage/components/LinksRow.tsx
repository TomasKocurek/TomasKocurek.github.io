import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import LinkButton, { LinkButtonProps } from "./LinkButton";

const LinksRow = () => {
  const linksData: LinkButtonProps[] = [
    {
      url: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-koc%C5%AFrek-388755251/",
      icon: <BiLogoLinkedin />,
    },
    {
      url: "https://github.com/TomasKocurek",
      icon: <BiLogoGithub />,
    },
  ];

  const renderBtns = () => {
    return linksData.map((link, i) => <LinkButton {...link} key={i} />);
  };

  return (
    <>
      <div className="flex flex-row gap-4 items-center justify-center">
        {renderBtns()}
      </div>
    </>
  );
};

export default LinksRow;
