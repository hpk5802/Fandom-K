import ProfileBadge from 'components/common/ProfileBadge';

function ChartRankContent({artistData}) {
  console.log(artistData);
  return (
    <div className="chart-rank-content">
      {artistData.map(idol => (
          <div key={idol.id} className="artist-profile" /*/{teamName}/charts/{gender}*/>
          <div className="artist-profile-ahead">
              <ProfileBadge img="img_idol_example.svg" src={idol.profilePicture} alt={`${idol.name}의 사진`} />
              <div className="artist-rank" /*/{teamName}/charts/{gender}rank*/>{idol.rank}</div>
              <div className="ranked-artist" /*/{teamName}/charts/{gender}name*/>{idol.name}</div>
            </div>
            <div className="total-votes" /*/{teamName}/charts/{gender}totalVotes*/>{idol.totalVotes}표</div>
          </div>
      ))}
    </div>
  );
}

export default ChartRankContent;
