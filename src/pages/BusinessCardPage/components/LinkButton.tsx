import { ReactNode } from "react";
import styles from "./LinksRow.module.scss";

export type LinkButtonProps = {
  url: string;
  icon: ReactNode;
  label: string;
};

const LinkButton = (props: LinkButtonProps) => {
  const { url, icon, label } = props;

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className={styles.btnContainer}>
        <div className={styles.btn} onClick={handleClick}>
          {icon}
        </div>
        <span className={styles.label}>{label}</span>
      </div>
    </>
  );
};

export default LinkButton;
