import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProfile = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ id: '', name: '' });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/products');
            setProducts(response.data.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/products', newProduct);
            fetchProducts();  // Refresh the list after adding a new product
            setNewProduct({ id: '', name: '' });  // Reset the form
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    return (
        <div className="App">
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
            <form onSubmit={addProduct}>
                <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    value={newProduct.id}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default UpdateProfile;
