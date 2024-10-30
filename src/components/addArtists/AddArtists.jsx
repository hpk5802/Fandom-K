import parseImg from 'utils/images.js';
import ProfileBadge from 'components/common/ProfileBadge';
import GradientButton from 'components/common/GradientButton';

function AddArtists({handleSelect, handleAdd}) {
  return (
    <div className="entire-add-artists">
      <div className="add-artists-title">관심있는 아이돌을 추가해보세요!</div>
      <div className="add-artists-list">
        <button type="button" className="order-button">
          <img src={parseImg('ic_prev_button.svg')} alt="뒤로 가기" />
        </button>
        <div className="add-artists-container">
          <div className="add-artist-content">
            <ProfileBadge
              img="img_idol_example.svg"
              size="large"
              selected={true}
              onClick={handleSelect} /*관심 있는 아이돌로 추가하고 싶은 카드를 중복으로 선택을 할 수 있습니다.*/
            />
            <div className="add-artists-text">
              <div className="add-artists-name">민지</div>
              <div className="add-artists-group">뉴진스</div>
            </div>
          </div>
          <div className="add-artist-content">
            <ProfileBadge img="img_idol_example.svg" size="large" onClick={handleSelect} />
            <div className="add-artists-text">
              <div className="add-artists-name">민지</div>
              <div className="add-artists-group">뉴진스</div>
            </div>
          </div>
        </div>
        <button type="button" className="order-button">
          <img src={parseImg('ic_next_button.svg')} alt="앞으로 가기" />
        </button>
      </div>
      <div className="add-button-container">
        <GradientButton type="submit" onClick={handleAdd} name="add-button">
          <div className="add-button-content">
            <img src={parseImg('ic_add_button.svg')} alt="추가하기"></img>
            추가하기
          </div>
        </GradientButton>
      </div>
    </div>
  );
}

export default AddArtists;
