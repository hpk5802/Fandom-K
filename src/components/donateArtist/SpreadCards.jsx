import {useCallback, useEffect, useRef} from 'react';
import CardSection from './CardSection';

function SpreadCards({lists, isDesktop, fetchMoreDonations}) {
  const endRef = useRef(null);

  const handleObserver = useCallback(
    entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        fetchMoreDonations();
      }
    },
    [fetchMoreDonations],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: endRef.current?.parentNode, // 부모 요소 기준으로
      rootMargin: '0px',
      threshold: 1.0, // 완전히 노출될 때
    });
    const currentEndRef = endRef.current;

    if (currentEndRef) {
      observer.observe(currentEndRef);
    }

    return () => {
      if (currentEndRef) {
        observer.unobserve(currentEndRef);
      }
    };
  }, [handleObserver]);
  return (
    <div className="cards-container">
      {lists.map(list => {
        const {id, idol, subtitle, title, receivedDonations, deadline, targetDonation} = list;
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
