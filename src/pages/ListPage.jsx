import React, {useState} from 'react';
import MonthlyChart from 'components/monthlyChart/MontlyChart';
import GradientButton from 'components/common/GradientButton';
import Modal from 'components/common/Modal';
import {ChargeModal, DonationModal, AlertModal} from 'components/modals';
import MyCredit from 'components/myCredit/MyCredit';

function ListPage(props) {
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

  const handleDonationClick = () => {
    openModal('응원하기', <DonationModal onClose={closeModal} />);
  };

  const handleAlertClick = () => {
    openModal('', <AlertModal onClose={closeModal} />);
  };
  return (
    <>
      <MonthlyChart />
      <hr />
      <MyCredit onClick={handleChargeClick} />
      <GradientButton name="" handleClick={handleDonationClick}>
        응원하기
      </GradientButton>
      <GradientButton name="" handleClick={handleAlertClick}>
        알림
      </GradientButton>
      {isModalOpen && (
        <Modal title={modalTitle} onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </>
  );
}

export default ListPage;
