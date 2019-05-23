import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { puzzle } from "./puzzle/puzzle.reducers";
import { puzzleMiddleware } from "./../middleware/puzzle.middleware";

const middleware = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middleware.push(logger);
}

middleware.push(puzzleMiddleware);

export const configureStore = function(reducers) {
  const rootReducer = combineReducers({
    puzzle,
    ...reducers
  });
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
};

export default configureStore;
