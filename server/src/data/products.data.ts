const pool = require('./db');

export const getSpecificProduct=async(id: Number)=>{
    return pool.query("SELECT * FROM products WHERE prod_id = $1", [id]);
}

export const getProductCount=async()=>{
    return pool.query("SELECT COUNT(*) FROM products");
}

export const getProducts=async(name:String, offset: Number, limit: Number)=>{
    return pool.query("SELECT * FROM products WHERE LOWER(name) LIKE LOWER($3) LIMIT $1 OFFSET $2", [limit, offset, `%${name}%`]);
}

export const addProduct=async(name: String, description: String, quantity: Number, price: Number, imgPath: String)=>{
    return pool.query("INSERT INTO products (name, description, quantity, price, image) VALUES($1,$2, $3, $4, $5) RETURNING * ", [name, description,quantity,price,imgPath]);
}

export const updateProduct=async(name: String, description: String, quantity: Number, price: Number, imgPath: String, id: Number)=>{
    return pool.query("UPDATE products SET name = $1, description = $2, quantity = $3, price = $4, image = $5 WHERE prod_id = $6", [name, description, quantity, price, imgPath, id])
}

export const deleteProduct=async(id: Number)=>{
    return pool.query("DELETE FROM products WHERE prod_id = $1", [id]);
}