import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from '../reducers';

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  console.log(store.getState());

  return store;
};

export default configureAppStore;
