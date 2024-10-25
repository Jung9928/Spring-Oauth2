import logo from './logo.svg';
import './App.css';

// 하이퍼링크 방식
const onNaverLogin = () => {

  window.location.href = "http://localhost:8084/oauth2/authorization/naver"
}

// API 클라이언트를 활용한 방식
const getData = () => {

  fetch("http://localhost:8084/my", {
    method: "GET",
    credentials: 'include'
  })
      .then((res) => res.json())
      .then((data) => {
        alert(data)
      })
      .catch((error) => alert(error))
}

function App() {
  return (
    <>
      <button onClick={onNaverLogin}>NAVER LOGIN</button>
      <button onClick={getData}>GET DATA</button>
    </>
  );
}

export default App;
