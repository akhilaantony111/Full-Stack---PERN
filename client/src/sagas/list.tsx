import * as TYPES from '../constants';
import { takeLatest, put } from 'redux-saga/effects';
import { getProductList, deleteProduct, addProduct, getProduct, updateProduct, searchProduct } from '../services';

function* listUsers(action: any): any {
    try {
        const params = action.payload;
        const data = yield getProductList(params);
        yield put({
            type: TYPES.GET_LIST_SUCCESS,
            payload: data
        });
    }
    catch (error) {
        console.log("error", error);
    }
}

export function* list() {
    yield takeLatest(TYPES.GET_LIST, listUsers);
}

//DELETE ITEM
function* deleteListItem(action: any): any {
    try {
       const item = action.payload;
        const data = yield deleteProduct(item);
        yield put({
            type: TYPES.DELETE_LIST_ITEM_SUCCESS,
            payload: item
        });
    }
    catch (error) {
        console.log("error", error);
    }
}

export function* deleteItem() {
    yield takeLatest(TYPES.DELETE_LIST_ITEM, deleteListItem);
}

//ADD ITEM
function* addListItem(action: any): any {
    try {
       const item = action.payload;
        const data = yield addProduct(item);
        yield put({
            type: TYPES.ADD_LIST_ITEM_SUCCESS,
        });
    }
    catch (error) {
        console.log("error", error);
    }
}

export function* addItem() {
    yield takeLatest(TYPES.ADD_LIST_ITEM, addListItem);
}

//GET ITEM

function* getListItem(action: any): any {
    try {
       const id = action.payload;
        const data = yield getProduct(id);
        yield put({
            type: TYPES.GET_DETAILS_SUCCESS,
            payload: data
        });
    }
    catch (error) {
        console.log("error", error);
    }
}

export function* getItem() {
    yield takeLatest(TYPES.GET_DETAILS, getListItem);
}

//UPDATE ITEM

function* updateListItem(action: any): any {
    try {
       const item = action.payload;
       const id = action.id;
        const data = yield updateProduct(id, item);
        yield put({
            type: TYPES.UPDATE_LIST_ITEM_SUCCESS,
            payload: data
        });
    }
    catch (error) {
        console.log("error", error);
    }
}

export function* updateItem() {
    yield takeLatest(TYPES.UPDATE_LIST_ITEM, updateListItem);
}

//SEARCH ITEM


function* searchListItem(action: any): any {
    try {
       const searchText = action.payload;
        const data = yield searchProduct(searchText);
        yield put({
            type: TYPES.SEARCH_LIST_ITEM_SUCCESS,
            payload: data
        });
    }
    catch (error) {
        console.log("error", error);
    }
}

export function* searchItem() {
    yield takeLatest(TYPES.SEARCH_LIST_ITEM, searchListItem);
}