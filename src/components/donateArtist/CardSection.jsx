import ArtistCreditBar from './ArtistCreditBar';
import GradientButton from 'components/common/GradientButton';

function CardSection({idol, adLocation, donationTitle, receivedDonations, deadline, targetDonation}) {
  return (
    <div className="card-container">
      <div className="card-top-wrapper">
        <img src={idol.profilePicture} className="card-img" alt={`${idol.group} ${idol.name}`} />
        <GradientButton name="donation-button">응원하기</GradientButton>
      </div>
      <div className="card-texts">
        <div className="ad-location">{adLocation}</div>
        <div className="donation-title">{donationTitle}</div>
      </div>
      <ArtistCreditBar receivedDonations={receivedDonations} deadline={deadline} targetDonation={targetDonation} />
    </div>
  );
}

export default CardSection;
