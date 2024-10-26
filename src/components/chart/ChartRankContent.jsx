import ProfileBadge from "components/common/ProfileBadge"

function ChartRankContent() {

  return (
    <div className="chart-rank-content">
      <div className="artist-profile" /*/{teamName}/charts/{gender}*/>
        <ProfileBadge img="img_idol_example.svg"/>
        <div className="artist-rank" /*/{teamName}/charts/{gender}rank*/>1</div>
        <div className="ranked-artist" /*/{teamName}/charts/{gender}name*/>민지</div>
      </div>
      <div className="total-votes" /*/{teamName}/charts/{gender}totalVotes*/>224,000표</div>
    </div>
  )
}

export default ChartRankContent
