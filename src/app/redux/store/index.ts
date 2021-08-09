import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './rootSaga';
import themeReducer from 'app/styles/reducer';

const sagaMiddleWare = createSagaMiddleWare();
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(sagaMiddleWare),
});
sagaMiddleWare.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
