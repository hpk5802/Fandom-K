import React from 'react';
import parseImg from 'utils/images';

const ImgCredit = parseImg('ic_credit.svg');

function ArtistCreditBar({receivedDonations, deadline, targetDonation, gaugePercentage}) {
  return (
    <div className="artist-donation-container">
      <div className="artist-donation-top">
        <div className="artist-donation-left">
          <img src={ImgCredit} alt="Credit Icon" className="artist-credit-icon" />
          {/* 해당 아티스트가 받은 크레딧으로 변경하세요 */}
          <div className="received-credit">{receivedDonations}</div>
        </div>
        {/* 해당 후원창의 실제 deadline을 추가하세요 */}
        <div className="deadline artist-donation-right">{`${deadline}일 남음`}</div>
      </div>

      <div className="artist-donation-bottom credit-gauge-bar-container">
        {/* 목표 후원액에 비해 현재 후원액이 얼마나 모였는지를 %로 계산하여 게이지 채움 */}
        <div className="gauge-bar" style={{width: `${gaugePercentage}%`}}></div>
      </div>
    </div>
  );
}

export default ArtistCreditBar;
