import parseImg from 'utils/images.js';
import ProfileBadge from 'components/common/ProfileBadge';
import GradientButton from 'components/common/GradientButton';

function AddArtists() {
  return (
    <>
      <div className="entire-add-artists">
        <div className="add-artists-title">관심있는 아이돌을 추가해보세요</div>
        <div className="add-artists-list">
          <button className="prev-button">
            <img src={parseImg('ic_prev_button.svg')} alt='뒤로가기 버튼'/>
          </button>
          <div className='add-artists-container'>
          <ProfileBadge img="img_idol_example.svg" size="large" />
          <div className='add-artists-text'>
            <div className='add-artists-name'>민지</div>
            <div className='add-artists-group'>뉴진스</div>
          </div>
          </div>
          <button className="next-button">
            <img src={parseImg('ic_next_button.svg')} alt='앞으로가기 버튼'/>
          </button>
        </div>
        <GradientButton name="add-button"/>
      </div>
    </>
  );
}

export default AddArtists;