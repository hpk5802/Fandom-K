import React, {useState} from 'react';
import MonthlyChart from 'components/monthlyChart/MontlyChart';
import Nav from 'components/nav/Nav';
import MyCredit from 'components/myCredit/MyCredit';
import DonateArtist from 'components/donateArtist/DonateArtist';
import GradientButton from 'components/common/GradientButton';
import Modal from 'components/common/Modal';
import {ChargeModal, AlertModal, VoteModal} from 'components/modals';
import FavoriteArtists from 'components/favoriteArtists_v1/FavoriteArtists';
import FavoriteArtist from 'components/favoriteArtist/FavoriteArtist';

function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState(null);

  const openModal = (title, content) => {
    setModalTitle(title || '');
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle('');
    setModalContent(null);
  };

  const handleChargeClick = () => {
    openModal('크레딧 충전하기', <ChargeModal onClose={closeModal} />);
  };

  const handleAlertClick = () => {
    openModal('', <AlertModal onClose={closeModal} />);
  };

  const handleAlertClick2 = () => {
    openModal('', <VoteModal onClose={closeModal} />);
  };
  return (
    <>
      <Nav />
      <div className="container" style={{backgroundColor: '#02000E', width: '100%', overflowX: 'hidden'}}>
        <MyCredit onClick={handleChargeClick} />
        <hr />
        <DonateArtist />
        <hr />
        <MonthlyChart />
        <hr />
        <FavoriteArtists />
        <hr />
        <FavoriteArtist containerName="favorite-list" title="내가 관심있는 아이돌" />
        <div className="hr" />
        <FavoriteArtist containerName="favorite-list add" title="관심 있는 아이돌을 추가해보세요." />
        <hr />
        <GradientButton name="" handleClick={handleAlertClick2}>
          투표
        </GradientButton>
        <GradientButton name="" handleClick={handleAlertClick}>
          알림
        </GradientButton>
        {isModalOpen && (
          <Modal title={modalTitle} onClose={closeModal}>
            {modalContent}
          </Modal>
        )}
      </div>
    </>
  );
}

export default ListPage;
