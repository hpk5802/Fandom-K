import React from 'react';
import ArtistCreditBar from './ArtistCreditBar';
import GradientButton from 'components/common/GradientButton';

function CardSection({imgIdol, adLocation, donationTitle, receivedDonations, deadline, targetDonation, gaugePercentage}) {
  // 후원하기 모달창을 handleClick으로 띄워주세요

  return (
    <div className="card-container">
      <div className="card-top-wrapper">
        <img src={imgIdol} className="card-img" alt={donationTitle} />

        <div className="gradient-overlay"></div>
        {/* 후원하기 모달창 컴포넌트를 onClick을 사용하여 추가하기 */}
        <GradientButton name="donation-button">응원하기</GradientButton>

        <div className="card-texts">
          <div className="ad-location">{adLocation}</div>
          <div className="donation-title">{donationTitle}</div>
        </div>
      </div>

      <ArtistCreditBar receivedDonations={receivedDonations} deadline={deadline} targetDonation={targetDonation} gaugePercentage={gaugePercentage} />
    </div>
  );
}

export default CardSection;
