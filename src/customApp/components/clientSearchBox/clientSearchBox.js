import React from 'react';
import AutoComplete from '../../components/uielements/autoComplete'; 

export default () => {
  const dataSource = ['12345', '23456', '34567'];
  return (<div>
      <AutoComplete dataSource={dataSource} placeholder="User Name" />
  </div>
  );
};
