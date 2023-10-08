import LinksRow from "./components/LinksRow";
import profilePic from "../../assets/img/profilePic.png";
import styles from "./BusinessCardPage.module.scss";

const BusinessCardPage = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full items-center justify-center">
        {/* Card */}
        <div className={styles.card}>
          {/* Profile picture */}
          <div className="w-[30%] aspect-square bg-[--clr-bg-light] overflow-hidden rounded-[50%]">
            <img src={profilePic} alt="Profile Picture" />
          </div>
          {/* Text info */}
          <div className="flex flex-col gap-2 items-center">
            <span className="h1 text-[--clr-primary]">Tomáš Kocůrek</span>
            <span className="text-xl">Software Developer</span>
            <span className="text-md">.NET • React • Angular</span>
            <LinksRow />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCardPage;
