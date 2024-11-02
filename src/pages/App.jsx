import {useEffect} from 'react';

function App() {
  // localStorage 초기 값 설정
  useEffect(() => {
    const getCredits = localStorage.getItem('myCredits');
    if (!getCredits) {
      localStorage.setItem('myCredits', '0');
      localStorage.setItem('myFavoriteArtists', '[]');
    }
  });
  return <>FANDOM-K</>;
}

export default App;
