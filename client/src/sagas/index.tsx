
import { all, fork } from 'redux-saga/effects';
import { addItem, deleteItem, list, getItem, updateItem, searchItem } from './list';

export default function* rootSaga() {
    yield all(
        [
            fork(list),
            fork(deleteItem),
            fork(addItem),
            fork(getItem),
            fork(updateItem),
            fork(searchItem)
        ]
    );
}