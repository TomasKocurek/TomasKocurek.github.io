import LinksRow from "./components/LinksRow";
import profilePic from "../../assets/img/profilePic.png";
import styles from "./BusinessCardPage.module.scss";

const BusinessCardPage = () => {
  return (
    <>
      <div className={styles.card}>
        <div className="w-[min(420px,_90%)] mx-auto rounded-[2rem] bg-[--clr-bg] p-4 flex flex-col items-center gap-4">
          <div className="w-[30%] aspect-square bg-[--clr-bg-light] overflow-hidden rounded-[50%]">
            <img src={profilePic} alt="Profile Picture" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="h1">Tomáš Kocůrek</span>
            <span className="text-lg">Software Developer</span>
            <span className="text-xs">.NET • React • Angular</span>
            <LinksRow />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCardPage;
