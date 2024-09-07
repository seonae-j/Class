// 모든 페이지에서 하는 공통 설정은 여기서 진행
// 아래의 코드는 공통적으로 적용되는 css 파일을 import하는 코드
// import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
