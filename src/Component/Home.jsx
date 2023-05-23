import React, { useState } from 'react';
import '../Style/Home.scss';
import useFetch from '../Hooks/useFetch';
import Radio from './Radio';

const Home = () => {
  const [categorie, setCategorie] = useState('');
  const { data, refetch, isError, isLoading } = useFetch(
    `http://www.boredapi.com/api/activity?type=${categorie}`
  );

  return (
    <div className='home'>
      <div>
        <h1>What To Do?</h1>
        <div className='input-wrap'>
          <Radio
            name={'All'}
            value={''}
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name={'Education'}
            value={'education'}
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name='Recreational'
            value='recreational'
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name='Social'
            value='social'
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name='DIY'
            value='diy'
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name='Charity'
            value='charity'
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name='Cooking'
            value='cooking'
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name='Relaxation'
            value='relaxation'
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name='Music'
            value='music'
            categorie={categorie}
            setCategorie={setCategorie}
          />
          <Radio
            name='Busy Work'
            value='busywork'
            categorie={categorie}
            setCategorie={setCategorie}
          />
        </div>
      </div>
      {isLoading ? (
        <h2>isLoading</h2>
      ) : isError ? (
        <h2>iserror</h2>
      ) : (
        <h3>{data?.activity}</h3>
      )}

      <button
        onClick={(e) => {
          e.preventDefault();
          refetch();
        }}
      >
        NEW
      </button>
    </div>
  );
};

export default Home;
