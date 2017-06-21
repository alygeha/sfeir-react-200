import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export {
  peopleReceived,
  personReceived,
  searchChanged,
  discoverNext,
  discoverPrev
} from './actions';

export {
  getPersonById,
  getPersonCount,
  getSearch,
  getFilteredPersonIds,
  getCurrentDiscoverId
} from './reducer';