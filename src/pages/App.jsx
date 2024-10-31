import {useEffect} from 'react';

function App() {
  useEffect(() => {
    // 초기 크레딧 로컬 스토리지에 충전
    const getCredits = localStorage.getItem('myCredits');
    if (!getCredits) {
      localStorage.setItem('myCredits', 0);
    }
  });
  return <>FANDOM-K</>;
}

export default App;
