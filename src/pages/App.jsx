import {useEffect} from 'react';

function App() {
  useEffect(() => {
    // 초기 크레딧 로컬 스토리지에 충전
    localStorage.setItem('myCredits', 36000);
  });
  return <>FANDOM-K</>;
}

export default App;
