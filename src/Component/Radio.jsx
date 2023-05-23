import React from 'react';
import '../Style/Radio.scss';

const Radio = ({ name, value, setCategorie, categorie }) => {
  console.log(categorie);
  return (
    <div className='radio'>
      <input
        type='radio'
        id={name}
        value={value}
        name='categorie'
        checked={categorie === value}
        onChange={(e) => setCategorie(e.target.value)}
      />
      <label htmlFor='all'>{name}</label>
    </div>
  );
};

export default Radio;
