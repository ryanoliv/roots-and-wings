import styles from "./Loader.module.scss";
import Image from "next/image";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderContainer}>
        <div className={styles.loaderLogoWrapper}>
          <Image src="/logos/svg-logo.svg" alt="logo" width={99} height={144} />
        </div>
      </div>
    </div>
  );
}
