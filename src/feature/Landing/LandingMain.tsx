import Image from "next/image";
import styles from "./LandingMain.module.scss";

import BasicButton from "@/shared/components/Button/BasicButton";

import LandingImage2 from "@/public/icons/landing/landing2.png";
import LandingImage2Small from "@/public/icons/landing/landing2-small.png";
import LandingImage3 from "@/public/icons/landing/landing3.png";
import LandingImage3Small from "@/public/icons/landing/landing3-small.png";
import LandingImage4 from "@/public/icons/landing/landing4.png";
import LandingImage4Small from "@/public/icons/landing/landing4-small.png";
import LandingImage5 from "@/public/icons/landing/landing5.png";
import LandingImage5Small from "@/public/icons/landing/landing5-small.png";

export default function LandingMain() {
  return (
    <div className={styles.main}>
      <div className={styles.main__images}>
        {/* 첫 이미지만 priority 나머지는 lazy loading */}
        {[
          {
            src: LandingImage2,
            srcSmall: LandingImage2Small,
            alt: "Landing Image 2",
          },
          {
            src: LandingImage3,
            srcSmall: LandingImage3Small,
            alt: "Landing Image 3",
          },
          {
            src: LandingImage4,
            srcSmall: LandingImage4Small,
            alt: "Landing Image 4",
          },
          {
            src: LandingImage5,
            srcSmall: LandingImage5Small,
            alt: "Landing Image 5",
          },
        ].map((image, index) => (
          <div key={index} className={styles.main__image_container}>
            {/* 모바일용 이미지 */}
            <Image
              src={image.srcSmall}
              alt={image.alt}
              width={327}
              height={344}
              priority={index === 0}
              className={styles["main__image--mobile"]}
            />
            {/* 데스크탑용 이미지 */}
            <Image
              src={image.src}
              alt={image.alt}
              width={1140}
              height={640}
              priority={index === 0}
              className={styles["main__image--desktop"]}
            />
          </div>
        ))}
      </div>
      <div className={styles.main__bottom}>
        <h2 className={styles.main__text_sub}>
          한 곳에서 관리하는 알바 구인 플랫폼
        </h2>
        <BasicButton color="blue" className={styles.main__button}>
          알바폼 시작하기
        </BasicButton>
      </div>
    </div>
  );
}
