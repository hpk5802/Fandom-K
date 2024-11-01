import React, {useState} from 'react';
import GradientButton from 'components/common/GradientButton';
import ProfileBadge from 'components/common/ProfileBadge';

const VoteModal = ({onClose}) => {
  const voteList = [
    {id: 1, artistName: '뉴진스 민지', voteCount: 204000},
    {id: 2, artistName: '르세라핌 카즈하', voteCount: 150214},
    {id: 3, artistName: '르세라핌 채원', voteCount: 110214},
  ];

  const [selectedOption, setSelectedOption] = useState(voteList[0].id);

  const handleChange = e => {
    setSelectedOption(Number(e.target.value));
  };

  const handleCharge = () => {
    alert(`${selectedOption}번에 투표하셨습니다.`);
    onClose();
  };

  return (
    <div className="modal-content vote-modal">
      <div className="vote-list">
        {voteList.map(voteList => (
          <label key={voteList.id} className="custom-radio">
            <div className="vote-item">
              <ProfileBadge img="img_idol_example.svg" selected={selectedOption === voteList.id} />
              <div className="vote-num">{voteList.id}</div>
              <div className="vote-info">
                <p className="name">{voteList.artistName}</p>
                <p className="count">{voteList.voteCount}표</p>
              </div>
            </div>
            <input type="radio" value={voteList.id} checked={selectedOption === voteList.id} onChange={handleChange} />
            <span className="radio-check"></span>
          </label>
        ))}
      </div>
      <GradientButton handleClick={handleCharge}>투표하기</GradientButton>
      <div className="desc">
        투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
      </div>
    </div>
  );
};

export default VoteModal;
