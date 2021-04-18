import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules/rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

// 미들 웨어들을 배열에 담아줌

const middlewares = [thunk];

/* persist store ------------------------------------------------------------ */

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* store -------------------------------------------------------------------- */

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

/* store provider wrapper component ----------------------------------------- */

const StoreProvider = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
