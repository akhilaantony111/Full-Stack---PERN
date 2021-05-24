import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 1000,
    headers: {'Accept': 'application/json'}
});

export const getProductList = (params: any) => {
    const {limit, page, name} = params;
   return instance.get(`/products?page=${page}&limit=${limit}&name=${name}`).then((res)=> res).catch((err)=> err);
}

export const deleteProduct = (item: any) => {
    return instance.delete(`/products/${item.prod_id}`).then((res)=>res).catch((err)=> err);
}

export const addProduct= (item: any) => {
    return instance.post('/products', item, {
        headers : {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        }
    }).then((res)=> res).catch((err)=> err);
}

export const getProduct=(id: Number)=>{
    return instance.get(`/products/${id}`).then((res)=> res).catch((err)=> err);
}

export const updateProduct=(id: Number, item: any, )=>{
    return instance.put(`/products/${id}`, item,  {
        headers : {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        }
        }).then((res)=> res).catch((err)=> err);
}

export const searchProduct=(searchText: String)=>{
    return instance.get(`products/search?name=${searchText}`).then((res)=> res).catch((err)=> err);
}