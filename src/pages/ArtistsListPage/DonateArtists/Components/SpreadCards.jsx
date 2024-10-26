import React, {useState, useMemo} from 'react';
import CardSection from './CardSection';
import Pagination from './Pagination'; // 분리된 Pagination 컴포넌트 import
import mockData from 'utils/mockData';

function SpreadCards() {
  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);
  const dataLength = mockData.length;

  // 카드 데이터 및 게이지 퍼센티지 계산
  const computedCardData = useMemo(() => {
    return mockData.map(card => ({
      ...card,
      gaugePercentage: (card.receivedDonations / card.targetDonation) * 100,
    }));
  }, [mockData]);

  // 현재 페이지에 보여줄 카드 데이터 가져오기
  const visibleCards = useMemo(() => {
    return Array.from({length: itemsPerPage}, (_, i) => computedCardData[(startIndex + i) % dataLength]);
  }, [startIndex, itemsPerPage, dataLength, computedCardData]);

  return (
    <Pagination dataLength={dataLength} setStartIndex={setStartIndex} itemsPerPage={itemsPerPage}>
      <div className="cards-container">
        {visibleCards.map(cardData => {
          const {id, profilePicture, subtitle, title, receivedDonations, deadline, targetDonation, gaugePercentage} = cardData;
          return (
            <CardSection
              key={id}
              imgIdol={profilePicture}
              adLocation={subtitle}
              donationTitle={title}
              receivedDonations={receivedDonations}
              deadline={deadline}
              targetDonation={targetDonation}
              gaugePercentage={gaugePercentage}
            />
          );
        })}
      </div>
    </Pagination>
  );
}

export default SpreadCards;
