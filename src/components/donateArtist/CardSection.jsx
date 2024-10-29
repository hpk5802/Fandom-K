import ArtistCreditBar from './ArtistCreditBar';
import GradientButton from 'components/common/GradientButton';

function CardSection({imgIdol, adLocation, donationTitle, receivedDonations, deadline, targetDonation}) {
  return (
    <div className="card-container">
      <div className="card-top-wrapper">
        <img src={imgIdol} className="card-img" alt={donationTitle} />

        <div className="gradient-overlay"></div>
        <GradientButton name="donation-button">응원하기</GradientButton>

        <div className="card-texts">
          <div className="ad-location">{adLocation}</div>
          <div className="donation-title">{donationTitle}</div>
        </div>
      </div>

      <ArtistCreditBar receivedDonations={receivedDonations} deadline={deadline} targetDonation={targetDonation} />
    </div>
  );
}

export default CardSection;
