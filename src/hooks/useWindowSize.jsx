import {throttle} from 'lodash';
import {useEffect, useState} from 'react';

/**
 * 화면 사이즈로 Device가 Desktop인지 감지하는 커스텀 훅
 * @returns isDesktop : 화면 사이즈 1200 이상인지
 */
function useWindowSize() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  /**
   * throttle 이용해 500ms(delay) 간격으로 desktop인지 체크
   */
  const handleResize = throttle(() => {
    setIsDesktop(window.innerWidth >= 1200);
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop;
}

export default useWindowSize;
