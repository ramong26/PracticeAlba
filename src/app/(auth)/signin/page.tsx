import styles from "./page.module.scss";
import TextField from "@/shared/components/TextInput/TextField";

export default function SignInPage() {
  return (
    <>
      <h1>Sign In</h1>
      <TextField
        variant="line"
        className={styles.input__text__field}
        placeholder="이메일을 입력해주세요"
        error={true}
        errorMessage="유효한 이메일을 입력해주세요."
        type="password"
      />
      <TextField
        variant="line"
        className={styles.input__text__field}
        placeholder="이메일을 입력해주세요"
        type="text"
      />
    </>
  );
}
