import MonthlyChart from 'components/monthlyChart/MontlyChart';
import Nav from 'components/nav/Nav';
import MyCredit from 'components/myCredit/MyCredit';
import DonateArtist from 'components/donateArtist/DonateArtist';

function ListPage(props) {
  return (
    <>
      <Nav />
      <div className="container" style={{backgroundColor: '#02000E'}}>
        <MyCredit />
        <DonateArtist />
        <MonthlyChart />
      </div>
    </>
  );
}

export default ListPage;
