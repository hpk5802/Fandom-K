import React, {useState} from 'react';
// import parseImg from 'utils/images';
import GradientButton from 'components/common/GradientButton';
import ProfileBadge from 'components/common/ProfileBadge';
import ProfileSelect from 'components/common/ProfileSelect';

const VoteModal = ({onClose}) => {
  const handleProfileDelete = value => {
    console.log(value)
  }
  const options = [
    {id: 1, label: '100', value: 100},
    {id: 2, label: '500', value: 500},
    {id: 3, label: '1000', value: 1000},
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = e => {
    setSelectedOption(Number(e.target.value));
  };

  const handleCharge = () => {
    alert(`${selectedOption} 크레딧이 충전되었습니다.`);
    onClose();
  };

  return (
    <div className="modal-content charge-modal">
      {options.map(option => (
        <label key={option.id} className={`custom-radio ${selectedOption === option.value ? 'active' : ''}`}>
          <ProfileBadge img="img_idol_example.svg" size="medium" />
          <ProfileSelect img="img_idol_example.svg" onClick={handleProfileDelete} />

          <div className="charge-info">{option.label}</div>
          <input type="radio" value={option.value} checked={selectedOption === option.value} onChange={handleChange} />
          <span className="radio-check"></span>
        </label>
      ))}
      <GradientButton name="h42" handleClick={handleCharge}>
        투표하기
      </GradientButton>
    </div>
  );
};

export default VoteModal;
