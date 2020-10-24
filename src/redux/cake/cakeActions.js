import { BUY_CAKE } from "./cakeTypes";

const buyCake = (amount) => {
  return {
    type: BUY_CAKE,
    payload: amount,
  };
}

export default buyCake;