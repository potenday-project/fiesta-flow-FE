import Image from "next/image";
import styles from "./index.module.css";
import curation4 from "@/app/assets/curation4.jpg";

const BookedFestivalChip = () => {
  return (
    <li key="curation1" className={styles.festival_chip_container}>
      <Image src={curation4} alt="축제 이미지" width={150} height={150} />
      <div className={styles.festival_chip_content}>
        <div className={styles.festival_chip_title}>
          <span>d-day</span>
          <div>서울 재즈 페스티벌</div>
        </div>
        <div className={styles.festival_chip_date}>날짜</div>
      </div>
    </li>
  );
};

export default BookedFestivalChip;
