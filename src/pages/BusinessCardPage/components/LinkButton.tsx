import { ReactNode } from "react";

export type LinkButtonProps = {
  url: string;
  icon: ReactNode;
};

const LinkButton = (props: LinkButtonProps) => {
  const { url, icon } = props;

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div
        className="bg-[--clr-bg-light] w-[40px] cursor-pointer aspect-square rounded-[50%] flex items-center justify-center"
        onClick={handleClick}
      >
        {icon}
      </div>
    </>
  );
};

export default LinkButton;
