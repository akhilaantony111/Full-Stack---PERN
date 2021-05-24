import productData from "../data";

export const getProduct=async(req:any)=>{
    try {
        const { id } = req.params;
        const product = await productData.getSpecificProduct(parseInt(id))
        return({status:200, message: "Success", data: product.rows[0]});
    } catch (err) {
        return({status:500, message: err.message});
        
    }
}

export const getProducts=async(req: any)=>{
    try {
        let {name, page, limit} = req.query;
        limit = parseInt(limit);
        page = parseInt(page);
        const offset = (page - 1) * limit;
        const count = await productData.getProductCount();
        const products = await productData.getProducts(name, offset, limit);
        let totalCount = name ? products.rows.length : parseInt(count.rows[0].count);
        return {
            status: 200,
            message: "Success!",
            totalCount: totalCount,
            totalPages: Math.ceil(totalCount/parseInt(limit)),
            data: products.rows,
        };
    } catch (err) {
        return {
            status: 500,
            message:err.message
        };
    }

}

export const addProduct=async(req:any)=>{
    let params = JSON.parse(req.body.params);
    let imgPath = '';
    if(req?.file){
        let {path} = req.file;
        imgPath = 'http://127.0.0.1:5000/'+path;
    }
    try {
        const { name,description, quantity, price } = params;
        // RETURNING * is to return the data which is added
        const newProduct = await productData.addProduct(name, description, quantity, price, imgPath);
        // // Data will be inside rows
        return {
            status: 200,
            message: "Success",
            data: newProduct.rows
        };
    } catch (err) {
        return{status: 500, message: err.message};
    }
}

export const updateProduct=async(req:any)=>{
    let params = JSON.parse(req.body.params);
    let imgPath = '';
    if(req?.file){
        let {path} = req.file;
        imgPath = 'http://127.0.0.1:5000/'+path;
    }
    else{
        imgPath = req.body.myFile;
    }
    try {
        const { id } = req.params;
        const { name,description, quantity, price } = params;
        const updateProduct = await productData.updateProduct(name, description, quantity, price, imgPath, id)
        return {status: 200, message: "Success", data: updateProduct};
    } catch (err) {
       return {status: 500, message: err.message};
    }
}

export const deleteProduct=async(req:any)=>{
    try {
        const { id } = req.params;
        const deleteProduct = await productData.deleteProduct(id);
        return {status: 200, message: "Success"};

    } catch (err) {
        return {status: 500, message: err.message};

    }
}