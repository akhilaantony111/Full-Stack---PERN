import productService from "../services";

export const getProduct = async (req : any, res: any) => {
    const product = await productService.getProduct(req);
	res.status(product.status).json(product);

};

export const getProductsList = async (req : any, res: any) => {
	const products = await productService.getProducts(req);
	res.status(products.status).json(products);
   
};

export const addProduct = async (req : any, res: any) => {
    const newProduct = await productService.addProduct(req);
	res.status(newProduct.status).json(newProduct);

};

export const updateProduct = async (req : any, res: any) => {
	const updatedProduct = await productService.updateProduct(req);
	res.status(updatedProduct.status).json(updatedProduct);

};

export const deleteProduct = async (req : any, res: any) => {
	const deletedProduct = await productService.deleteProduct(req);
    res.status(deletedProduct.status).json(deletedProduct);
};