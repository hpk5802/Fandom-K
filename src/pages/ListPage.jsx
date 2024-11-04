import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {resetVoteIdols} from 'services/apiSlice';
import {ChargeModal, AlertModal, VoteModal} from 'components/modals';
import MonthlyChart from 'components/monthlyChart/MontlyChart';
import Nav from 'components/nav/Nav';
import MyCredit from 'components/myCredit/MyCredit';
import DonateArtist from 'components/donateArtist/DonateArtist';
import Modal from 'components/common/Modal';
import FavoriteArtist from 'components/favoriteArtists/FavoriteArtists';
import AddArtists from 'components/addArtists/AddArtists';

function ListPage() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalTitle(title || '');
    setModalContent(content);
    setIsModalOpen(true);
    // 투표 아이돌 리스트 초기화
    dispatch(resetVoteIdols());
  };

  const handleAlertModalClose = () => {
    setIsModalOpen(false);
    setModalTitle('');
    setModalContent(null);
  };

  const handleVoteModalClose = status => {
    setIsModalOpen(false);
    setModalTitle('');
    setModalContent(null);
    if (!status) openModal('', <AlertModal onClose={handleAlertModalClose} />);
  };

  const handleChargeClick = () => {
    openModal('크레딧 충전하기', <ChargeModal onClose={handleAlertModalClose} />);
  };

  const handleVotesOpen = () => {
    openModal('', <VoteModal onClose={handleVoteModalClose} />);
  };

  return (
    <>
      <Nav />
      <div className="container" style={{backgroundColor: '#02000E', width: '100%', overflowX: 'hidden'}}>
        <MyCredit onClick={handleChargeClick} />
        <hr />
        <DonateArtist />
        <hr />
        <MonthlyChart onClick={() => handleVotesOpen()} />
        <hr />
        <FavoriteArtist title="내가 관심있는 아이돌" />
        <div className="hr" />
        <AddArtists title="관심 있는 아이돌을 추가해보세요." />
        <hr />
        {isModalOpen && (
          <Modal title={modalTitle} onClose={handleAlertModalClose}>
            {modalContent}
          </Modal>
        )}
      </div>
    </>
  );
}

export default ListPage;
