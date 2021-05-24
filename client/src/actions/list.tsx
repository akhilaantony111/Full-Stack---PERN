import * as TYPES from '../constants';

export const list = (params: Object) => ({
    type: TYPES.GET_LIST,
    payload: params
});

export const deleteListItem = (item : Object) => ({
    type: TYPES.DELETE_LIST_ITEM,
    payload: item
});

export const addListItem = (item: Object)=> ({
    type: TYPES.ADD_LIST_ITEM,
    payload: item
});

export const getItem = (id: Number) =>({
    type: TYPES.GET_DETAILS,
    payload: id
});

export const updateItem = (id: Number, item: Object) =>({
    type: TYPES.UPDATE_LIST_ITEM,
    payload: item,
    id
});

export const search = (searchText: String) => ({
    type: TYPES.SEARCH_LIST_ITEM,
    payload: searchText
})