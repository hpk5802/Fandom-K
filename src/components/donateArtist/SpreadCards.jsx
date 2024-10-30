import CardSection from './CardSection';

function SpreadCards({lists}) {
  return (
    <div className="cards-container">
      {lists.map(list => {
        const {id, idol, subtitle, title, receivedDonations, deadline, targetDonation} = list;
        return (
          <CardSection
            key={id}
            idol={idol}
            adLocation={subtitle}
            donationTitle={title}
            receivedDonations={receivedDonations}
            deadline={deadline}
            targetDonation={targetDonation}
          />
        );
      })}
    </div>
  );
}

export default SpreadCards;
