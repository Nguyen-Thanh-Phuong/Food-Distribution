import {PayloadAction} from '@reduxjs/toolkit';
import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {fetchCount} from './counterAPI';
import {increment, incrementSaga, incrementSagaSuccess} from './counterSlice';

export function* logAction(action: PayloadAction) {
	console.log(action);
}

function* handleIncrementSaga(action: PayloadAction<number>) {
	const data: number = yield call(fetchCount, action.payload);
	yield put(incrementSagaSuccess(data));
}

export default function* counterSaga() {
	console.log('Counter Saga');
	yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
