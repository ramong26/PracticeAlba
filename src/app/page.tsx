
import Image from "next/image";
import "./page.scss";

import LandingImage from '@/public/icons/landing.svg'
import LandingImage1 from '@/public/icons/landing2.png'
import LandingImage2 from '@/public/icons/landing3.png'
import LandingImage3 from '@/public/icons/landing4.png'
import LandingImage4 from '@/public/icons/landing5.png'
import MainLogoText from "@/public/icons/main-logo-text.svg";

// 이미지는 레이디로딩을 써보자 
export default function Home() {  
  return (
    <div>
      <header className="header">
        <div className="header__top">
          <Image src={MainLogoText} alt="Main Logo" width={248} height={48} />
          <h1 className="header__text">한 곳에서 관리하는 알바 구인 플랫폼</h1>
          <button>알바폼 시작하기</button>
        </div>
        <Image className="header__image" src={LandingImage} alt="Landing Image " width={964} height={610}/>
      </header>
      <main className="main">
        <div className="main__images">
          <Image src={LandingImage1} alt="Landing Image 1" width={1140} height={640}/>
          <Image src={LandingImage2} alt="Landing Image 2" width={1140} height={640}/>
          <Image src={LandingImage3} alt="Landing Image 3" width={1140} height={640}/>
          <Image src={LandingImage4} alt="Landing Image 4" width={1140} height={640}/>
        </div>
        <div className="main__bottom">
          <h2 className="main__text_sub">한 곳에서 관리하는 알바 구인 플랫폼</h2>
          <button>알바폼 시작하기</button>
        </div>
      </main>
    </div>
  );
}
