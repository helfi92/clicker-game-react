/**
 * Created by hassanali on 8/18/16.
 */
import {
    ADD_SCORE
} from './types';

export const incrementScore = (score) => {
  return {
      type: ADD_SCORE,
      payload: score + 1
  };
};