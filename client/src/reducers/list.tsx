import * as TYPES from '../constants';

const initialState = {
    list: [],
    details:{}
}
export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case TYPES.GET_LIST:
            return { ...state };
        case TYPES.GET_LIST_SUCCESS: {
            return {
                ...state,
                list: action.payload.data
            }
        }
        case TYPES.DELETE_LIST_ITEM:
            return { ...state };
        case TYPES.DELETE_LIST_ITEM_SUCCESS:{
            // const tempList = [...state.list.data];
            // const checkIndex=(item: any)=>{
            //     return item.prod_id == action.payload.prod_id
            // }
            // const index = tempList.findIndex(checkIndex);
            // tempList.splice(index, 1);
            window.location.href = "/";
            return{
                ...state,
                // list: tempList
            }
        }
        case TYPES.ADD_LIST_ITEM:
            return { ...state };
        case TYPES.ADD_LIST_ITEM_SUCCESS: {
            window.location.href = "/";
            return {
                ...state,
            }
        }
        case TYPES.UPDATE_LIST_ITEM:
            return { ...state };
        case TYPES.UPDATE_LIST_ITEM_SUCCESS: {
            window.location.href = "/";
            return {
                ...state,
            }
        }
        case TYPES.GET_DETAILS:
            return { ...state };
        case TYPES.GET_DETAILS_SUCCESS: {
            return {
                ...state,
                details: action.payload.data
            }
        }
        case TYPES.SEARCH_LIST_ITEM:
            return { ...state };
        case TYPES.SEARCH_LIST_ITEM_SUCCESS: {
            return {
                ...state,
                list: action.payload.data
            }
        }
        default:
            return state;
    }
};
