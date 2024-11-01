import React, {useState} from 'react';
import parseImg from 'utils/images';
import GradientButton from 'components/common/GradientButton';
import {useDispatch, useSelector} from 'react-redux';
import {decreseCredit} from 'services/apiSlice';
import {stringToNumber, formatimgCredit} from 'utils/credit';

const DonationModal = ({idol, title, ad, onClose}) => {
  const {name, group, profilePicture} = idol;
  const [credit, setCredit] = useState('');
  const dispatch = useDispatch();
  const myCredits = useSelector(state => state.data.myCredits);

  const isValid = stringToNumber(credit) <= myCredits;

  const handleCreditChange = ({target}) => {
    const value = target.value;
    setCredit(value);
  };

  const handleDonate = () => {
    if (credit) {
      dispatch(decreseCredit(credit));
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
          <img src={profilePicture} alt={`${group} ${name}`} />
        </div>
        <p className="card-sub">{ad}</p>
        <p className="card-tit">{title}</p>
      </div>
      <div className="donation-input">
        <div className={`input-box ${!isValid ? 'error' : ''}`}>
          <input type="text" value={formatimgCredit(credit)} onChange={handleCreditChange} placeholder="크레딧 입력" />
          <img src={parseImg('img_credit_md.svg')} alt="크레딧" />
        </div>
        {!isValid && <p className="input-error">갖고 있는 크레딧보다 더 많이 후원할 수 없어요</p>}
      </div>
      <GradientButton name="h42" handleClick={handleDonate} disabled={!isValid || !credit}>
        응원하기
      </GradientButton>
    </div>
  );
};

export default DonationModal;
