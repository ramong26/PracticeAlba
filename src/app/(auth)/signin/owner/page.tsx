import Link from "next/link";
import Image from "next/image";
import styles from "../../page.module.scss";

import KakaoIcon from "@/public/icons/kakao-icon.svg";
import GoogleIcon from "@/public/icons/google-icon.svg";

import BasicButton from "@/shared/components/Button/BasicButton";
import TextField from "@/shared/components/TextInput/TextField";

export default function SignupPage() {
  return (
    <div className={styles["signup__container"]}>
      <div className={styles["signup__tabs"]}>
        <span>사장님 전용</span>
        <span>지원자 전용</span>
      </div>
      <div className={styles["signup__header"]}>
        <h1>로그인</h1>
        <div>
          <div className={styles["signup__login-prompt"]}>
            <span>사장님 계정이 없으신가요?</span>
            <Link href="/login/owner">회원가입 하기</Link>
          </div>
          <span>지원자 로그인은 지원자 전용 페이지에서 할 수 있습니다.</span>
        </div>
      </div>
      <div className={styles["signup__form"]}>
        <div>
          <p>이메일</p>
          <TextField
            placeholder="이메일을 입력하세요"
            className={styles["signup__input"]}
          />
        </div>
        <div>
          <p>비밀번호</p>
          <TextField
            placeholder="비밀번호를 입력하세요"
            type="password"
            className={styles["signup__input"]}
          />
        </div>
      </div>
      <div className={styles["signup__actions"]}>
        <BasicButton
          color="orange"
          className={styles["signup__button"]}
          disabled={true}
        >
          로그인 하기
        </BasicButton>
      </div>
      <div className={styles["signup__divider"]}>
        <span className={styles["signup__line"]}></span>
        <span className={styles["signup__divider-text"]}>
          SNS 계정으로 로그인하기
        </span>
        <span className={styles["signup__line"]}></span>
      </div>
      <div className={styles["signup__oauth"]}>
        <Image
          src={GoogleIcon}
          alt="GoogleIcon"
          width={72}
          height={72}
          className={styles["signup__oauth-img"]}
        />
        <Image
          src={KakaoIcon}
          alt="KakaoIcon"
          width={72}
          height={72}
          className={styles["signup__oauth-img"]}
        />
      </div>
    </div>
  );
}
