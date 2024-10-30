import ProfileDelete from 'components/common/ProfileDelete';

function FavoriteArtists() {
  return (
    <div className="favorite-artist-container">
      <div className="favorite-artist-title" /*로컬 스토리지 관리부분*/>내가 관심있는 아이돌</div>
      <div className="favorite-artist">
        <ProfileDelete img="img_idol_example.svg" size="medium" /*x버튼 누르면 삭제 */ />
        <div className="artist-info">
          <div className="artist-name">민지</div>
          <div className="artist-group">뉴진스</div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteArtists;
