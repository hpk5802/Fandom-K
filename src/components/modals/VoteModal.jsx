import React, {useEffect, useRef, useState} from 'react';
import GradientButton from 'components/common/GradientButton';
import ProfileBadge from 'components/common/ProfileBadge';
import formatWithCommas from 'utils/formatWithCommas';
import {useDispatch, useSelector} from 'react-redux';
import {getVoteIdols, setVoteForIdol} from 'services/apiSlice';

const VoteModal = ({onClose}) => {
  const dispatch = useDispatch();
  const scrollContainerRef = useRef(null);
  const {voteIdols, chartGender} = useSelector(state => state.data);
  const {idols, nextCursor} = voteIdols;

  const [selectedIdol, setSelectedIdol] = useState();

  const handleChange = e => {
    setSelectedIdol(JSON.parse(e.target.value));
  };

  const handleVotes = () => {
    const myCredits = +localStorage.getItem('myCredits');
    const payCredit = +process.env.REACT_APP_VOTES_VALUE;

    // onClose 메서드에 투표 여부 알여주기
    const checkVotingStatus = payCredit <= myCredits;
    if (checkVotingStatus) {
      dispatch(setVoteForIdol({idolId: selectedIdol.id}));
      localStorage.setItem('myCredits', myCredits - payCredit);
      alert(`${selectedIdol.group} ${selectedIdol.name}에게 투표하셨습니다.`);
    }

    onClose(checkVotingStatus);
  };

  const handleScroll = () => {
    const {scrollTop, scrollHeight, clientHeight} = scrollContainerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 4) {
      dispatch(getVoteIdols({gender: chartGender, pageSize: 6, cursor: nextCursor}));
    }
  };

  useEffect(() => {
    setSelectedIdol(idols[0]);
  }, [selectedIdol === undefined && idols.length > 0]);

  useEffect(() => {
    dispatch(getVoteIdols({gender: chartGender, pageSize: 6}));
  }, [dispatch]);

  return (
    <div className="modal-content vote-modal">
      <div className="vote-list" ref={scrollContainerRef} onScroll={handleScroll}>
        {selectedIdol &&
          idols.map((idol, idx) => (
            <label key={`custom-radio-${idx}`} className="custom-radio">
              <div className="vote-item">
                <ProfileBadge src={idol.profilePicture} selected={selectedIdol.id === idol.id} />
                <div className="vote-num">{idx + 1}</div>
                <div className="vote-info">
                  <p className="name">{`${idol.group} ${idol.name}`}</p>
                  <p className="count">{formatWithCommas(idol.totalVotes)}표</p>
                </div>
              </div>
              <input type="radio" key={`radio-${idx}`} value={JSON.stringify(idol)} checked={selectedIdol.id === idol.id} onChange={handleChange} />
              <span className="radio-check"></span>
            </label>
          ))}
      </div>
      <div className="modal-bottom">
        <GradientButton handleClick={handleVotes}>투표하기</GradientButton>
        <div className="desc">
          투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
        </div>
      </div>
    </div>
  );
};

export default VoteModal;
