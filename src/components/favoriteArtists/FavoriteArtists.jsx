import {useDispatch, useSelector} from 'react-redux';
import {removeFavorite} from 'services/apiSlice';
import ProfileDelete from 'components/common/ProfileDelete';

function FavoriteArtists() {
  const dispatch = useDispatch();
  let getArtists = useSelector(state => state.data.myFavoriteArtists);

  const handleDelete = id => () => {
    dispatch(removeFavorite(id));
    const filterArtist = getArtists.filter(artist => artist.id !== id);
    localStorage.setItem('myFavoriteArtists', filterArtist);
  };

  return (
    <div className="entire-favorite-artist" /*로컬 스토리지 관리부분*/>
      <div className="favorite-artist-title">내가 관심있는 아이돌</div>
      <div className="favorite-artists-container">
        {getArtists.map(artist => {
          return (
            <div key={`${artist.id}-artist`} className="favorite-artist">
              <>
                <ProfileDelete
                  key={`${artist.id}-delete`}
                  src={artist.profilePicture}
                  size="medium"
                  onClick={handleDelete(artist.id)} /*x버튼 누르면 삭제 */
                />
                <div key={`${artist.id}-info`} className="artist-info">
                  <div key={`${artist.id}-name`} className="artist-name">
                    {artist.name}
                  </div>
                  <div key={`${artist.id}-group`} className="artist-group">
                    {artist.group}
                  </div>
                </div>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FavoriteArtists;
