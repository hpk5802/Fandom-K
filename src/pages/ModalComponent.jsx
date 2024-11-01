import React, {useState} from 'react';
import GradientButton from 'components/common/GradientButton';
import Modal from 'components/common/Modal';
import ChargeModal from 'components/modals/ChargeModal';
import DonationModal from 'components/modals/DonationModal';
import AlertModal from 'components/modals/AlertModal';
import VoteModal from 'components/modals/VoteModal';

const ModalComponent = () => {
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

  const handleVoteClick = () => {
    openModal('이달의 여자 아이돌', <VoteModal onClose={closeModal} />);
  };

  const handleAlertClick = () => {
    openModal('', <AlertModal onClose={closeModal} />);
  };

  return (
    <>
      <GradientButton name="" handleClick={handleChargeClick}>
        크레딧 충전하기
      </GradientButton>
      <GradientButton name="" handleClick={handleDonationClick}>
        응원하기
      </GradientButton>
      <GradientButton name="" handleClick={handleVoteClick}>
        투표하기
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
};

export default ModalComponent;
