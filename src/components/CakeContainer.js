import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import buyCake from '../redux/cake/cakeActions';

const CakeContainer = () => {
  const numCakes = useSelector((state) => state.numCakes);
  const dispatch = useDispatch();
  return(
    <div>
      Number of cakes {numCakes}
      <button onClick={() => dispatch(buyCake(5))}>Buy</button>
    </div>
  )
};

export default CakeContainer;