import { createStore, combineReducers } from 'redux';
import { LineReducer } from './reducers/Line';
import { CurTypeReducer } from './reducers/CurType';

const rootReducer = combineReducers({
  Line: LineReducer,
  CurType: CurTypeReducer,
});

const store = createStore(
  rootReducer,
);

export type RootState = ReturnType<typeof rootReducer>;

export {
  store,
};
