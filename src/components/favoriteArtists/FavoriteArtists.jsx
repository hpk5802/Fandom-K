import ProfileBadge from 'components/common/ProfileBadge';

function FavoriteArtists() {
  return (
    <div className="favorite-artist-container">
      <div className="favorite-artist-title">내가 관심있는 아이돌</div>
      <div className="favorite-artist">
        <ProfileBadge img="img_idol_example.svg" size="medium" className="favorite-artist-badge" />
        <div className="artist-info">
          <div className="artist-name">민지</div>
          <div className="artist-group">뉴진스</div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteArtists;
