import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCharts, getDonations, getIdols, setDonation} from 'services/apiSlice';

function ApiTest() {
  const dispatch = useDispatch();
  const {idols, donations, charts} = useSelector(state => state.data);
  const [price, setPrice] = useState(0);

  const handleClickUpdate = async () => {
    await dispatch(setDonation({id: 596, amount: price}));
    await dispatch(getDonations());
  };

  useEffect(() => {
    dispatch(getIdols());
    dispatch(getDonations());
    dispatch(getCharts({gender: 'female'}));
  }, [dispatch]);
  return (
    <>
      <input type="text" value={price} onChange={({target}) => setPrice(+target.value)} />
      <button onClick={handleClickUpdate}>+</button>
      <div style={{marginBottom: '1rem'}}>
        <h2 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>/idols</h2>
        {idols.list.map(idol => (
          <div key={idol.id} style={{border: '0.1rem solid #000', padding: '1rem', marginBottom: '1rem', fontSize: '1.5rem'}}>
            {Object.entries(idol).map(([key, value]) => (
              <div key={key}>
                {key}:{' '}
                {typeof value === 'object'
                  ? Object.entries(value).map(([idolKey, idolValue]) => (
                      <div key={idolKey}>
                        {idolKey}: {idolValue}
                      </div>
                    ))
                  : value}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{marginBottom: '1rem'}}>
        <h2 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>/donations</h2>
        {donations.list.map(donation => (
          <div key={donation.id} style={{border: '0.1rem solid #000', padding: '1rem', marginBottom: '1rem', fontSize: '1.5rem'}}>
            {Object.entries(donation).map(([key, value]) => (
              <div key={key}>
                {key}:{' '}
                {typeof value === 'object'
                  ? Object.entries(value).map(([idolKey, idolValue]) => (
                      <div key={idolKey}>
                        {idolKey}: {idolValue}
                      </div>
                    ))
                  : value}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{marginBottom: '1rem'}}>
        <h2 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>/charts</h2>
        {charts.idols.map(idol => (
          <div key={idol.id} style={{border: '0.1rem solid #000', padding: '1rem', marginBottom: '1rem', fontSize: '1.5rem'}}>
            {Object.entries(idol).map(([key, value]) => (
              <div key={key}>
                {key}:{' '}
                {typeof value === 'object'
                  ? Object.entries(value).map(([idolKey, idolValue]) => (
                      <div key={idolKey}>
                        {idolKey}: {idolValue}
                      </div>
                    ))
                  : value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default ApiTest;
