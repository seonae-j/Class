import {MyEmail, MyEmailInput} from '../../../styles/01-02-emotion';

export default function EmotionPage() {

  // js 작성 파트

  return (
    <div>
      <MyEmail>이메일: </MyEmail>
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <button>클릭하세요!</button>
      <img src="/me-next.jpg" />
    </div>
  );
}
