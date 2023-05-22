import React, { useEffect, useState } from 'react';
import '../Style/Home.scss';
import axios from 'axios';
import { useQuery } from 'react-query';

const Home = () => {
  const [education, setEducation] = useState(false);
  const { data, refetch } = useQuery(['activity'], () => {
    return axios
      .get('http://www.boredapi.com/api/activity/')
      .then((res) => res.data);
  });

  return (
    <div className='home'>
      <h1>What To Do?</h1>
      <input
        type='checkbox'
        id='html'
        value='HTML'
        onChange={(e) => setEducation(e.target.value)}
      />
      <label for='html'>HTML</label>
      <p>{data?.activity}</p>
      <button
        onClick={() => {
          refetch();
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Home;
