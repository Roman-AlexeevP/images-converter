import React from 'react';
import { ListImgContainer } from './style';
import { observer } from 'mobx-react-lite';
import Store from '../../store';

export const ListImg: React.FC = observer(() => {

  return (
    <ListImgContainer>
      <button onClick={() => { Store.addImg(`${Store.listImg.length+1}`)}}>123</button>
      {
        Store.listImg.map(imgUrl =>
          <p>{imgUrl}</p>
        )
      }
    </ListImgContainer>
  );
});
