'use client';
import Image from "next/image";
import "./LandingMain.scss";

import BasicButton from "@/shared/components/Button/BasicButton";

import LandingImage1 from '@/public/icons/landing2.png'
import LandingImage2 from '@/public/icons/landing3.png'
import LandingImage3 from '@/public/icons/landing4.png'
import LandingImage4 from '@/public/icons/landing5.png'

// 이미지는 레이디로딩을 써보자 
export default function LandingMain() {
    return (
        <div className="main">
            <div className="main__images">
                <Image src={LandingImage1} alt="Landing Image 1" width={1140} height={640}/>
                <Image src={LandingImage2} alt="Landing Image 2" width={1140} height={640}/>
                <Image src={LandingImage3} alt="Landing Image 3" width={1140} height={640}/>
                <Image src={LandingImage4} alt="Landing Image 4" width={1140} height={640}/>
            </div>
            <div className="main__bottom">
                <h2 className="main__text_sub">한 곳에서 관리하는 알바 구인 플랫폼</h2>
                <BasicButton
  variant="fill"
  className="basic__button--fill--orange"
>
  주황 버튼
</BasicButton>

<BasicButton
  variant="line"
  className="basic__button--line--gray"
>
  회색 라인 버튼
</BasicButton>

<BasicButton
  variant="line"
  className={`basic__button--line--gray ` + `test__button`}
>
  회색 라인 버튼
</BasicButton>
            </div>
        </div>
    );
}