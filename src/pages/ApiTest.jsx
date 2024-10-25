import React, {useEffect, useState} from 'react';
import {getDonations, getIdolData} from 'services/api';

function ApiTest() {
  const [idols, setIdols] = useState([]);
  const [donations, setDonations] = useState([]);

  const loadIdols = async () => {
    try {
      const {list} = await getIdolData({pageSize: 4});
      setIdols(list);
    } catch (error) {
      throw error;
    }
  };

  const loadDonations = async () => {
    try {
      const {list} = await getDonations({pageSize: 4});
      setDonations(list);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    loadIdols();
    loadDonations();
  }, []);
  return (
    <>
      <div style={{marginBottom: '1rem'}}>
        <h2 style={{fontSize: '1.8rem', marginBottom: '1rem'}}>/idols</h2>
        {idols.map(idol => (
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
        {donations.map(donation => (
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
    </>
  );
}

export default ApiTest;
