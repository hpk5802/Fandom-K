import classes from "utils/classes";
import parseImg from "utils/images";

function ProfileBadge({ img, size, selected }) {
  return (
    <div className={classes("profile-badge", size)}>
      <img
        src={parseImg(img)}
        className='profile-badge-img'
        alt='img_example'
      />
      {selected && (
        <div className='selected'>
          <img src={parseImg("ic_check.svg")} alt='selected' />
        </div>
      )}
    </div>
  );
}

export default ProfileBadge;
