import {useSelector} from 'react-redux';
import parseImg from 'utils/images';

function MyCredit({onClick}) {
  const myCredit = useSelector(state => state.data.myCredits);
  return (
    <div className="my-credit">
      <div className="credit-box">
        <div className="credit-content">
          <div className="my-credit-content my-credit-text">내 크레딧</div>
          <button type="button" onClick={onClick} className="charging-btn" /*클릭시 충전하기 모달창 띄우기 */>
            <span className="charging-text">충전하기</span>
          </button>
          <div className="current-credit-content">
            <img src={parseImg('ic_creditIcon.svg')} alt="크레딧아이콘" className="credit-icon" />
            <div className="current-credit" /*내 크레딧은 localstorage로 관리합니다.*/>{myCredit}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCredit;
