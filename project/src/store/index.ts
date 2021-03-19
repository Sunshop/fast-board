import { createStore, combineReducers } from 'redux';
import { LineReducer } from './reducers/Line';

const rootReducer = combineReducers({
  Line: LineReducer,
});

const store = createStore(
  rootReducer,
);

export type RootState = ReturnType<typeof rootReducer>;

export {
  store,
};
