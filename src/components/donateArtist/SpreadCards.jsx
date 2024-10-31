import {useCallback, useEffect, useRef} from 'react';
import CardSection from './CardSection';

function SpreadCards({lists, isDesktop, fetchMoreDonations}) {
  const endRef = useRef(null); // Infinite Scroll 구현을 위한 Ref 객체

  /**
   * 감시 대상이 화면에 노출되면 서버에 데이터 요청
   */
  const handleObserver = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) fetchMoreDonations();
    },
    [fetchMoreDonations],
  );

  /**
   * IntersectionObserver API를 이용해 endRef 객체가 화면에 노출됨을 감지
   */
  useEffect(() => {
    if (isDesktop || !endRef.current) return;

    const observer = new IntersectionObserver(handleObserver, {
      root: endRef.current.parentNode,
      threshold: 1.0,
    });

    observer.observe(endRef.current);

    return () => observer.disconnect();
  }, [handleObserver, isDesktop]);
  return (
    <div className="cards-container">
      {lists.map(({id, idol, subtitle, title, receivedDonations, deadline, targetDonation}) => {
        return (
          <CardSection
            key={id}
            idol={idol}
            adLocation={subtitle}
            donationTitle={title}
            receivedDonations={receivedDonations}
            deadline={deadline}
            targetDonation={targetDonation}
          />
        );
      })}
      {!isDesktop && <div ref={endRef} className="end-point" />}
    </div>
  );
}

export default SpreadCards;
