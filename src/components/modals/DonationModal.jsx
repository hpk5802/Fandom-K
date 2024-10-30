import React, {useState} from 'react';
import parseImg from 'utils/images';
import GradientButton from 'components/common/GradientButton';

const DonationModal = ({onClose}) => {
  const [credit, setCredit] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const myCredits = localStorage.getItem('myCredits');

  const handleCreditChange = e => {
    const value = e.target.value;
    setCredit(value);

    // 입력 가능한 숫자인지 확인
    const creditNumber = Number(value);
    const exceedsCredits = creditNumber > Number(myCredits);

    // 버튼 비활성화 및 에러 상태 설정
    setHasError(exceedsCredits);
    setIsButtonDisabled(value === '' || exceedsCredits);
  };

  const handleDonate = () => {
    if (credit) {
      // 크레딧 계산 후 적용
      localStorage.setItem('myCredits', myCredits - credit);

      alert(`${credit} 크레딧이 후원되었습니다.`);
      onClose();
    } else {
      alert('크레딧을 입력하세요.');
    }
  };

  return (
    <div className="modal-content donation-modal">
      <div className="card">
        <div className="card-img">
          <img src={parseImg('img_idol_example.svg')} alt="아티스트 이미지" />
        </div>
        <p className="card-sub">강남역 광고</p>
        <p className="card-tit">민지 2023 첫 광고</p>
      </div>
      <div className="donation-input">
        <div className={`input-box ${hasError ? 'error' : ''}`}>
          <input type="number" value={credit} onChange={handleCreditChange} placeholder="크레딧 입력" />
          <img src={parseImg('img_credit_md.svg')} alt="크레딧" />
        </div>
        {hasError && <p className="input-error">갖고 있는 크레딧보다 더 많이 후원할 수 없어요</p>}
      </div>
      <GradientButton name="h42" handleClick={handleDonate} disabled={isButtonDisabled}>
        응원하기
      </GradientButton>
    </div>
  );
};

export default DonationModal;
