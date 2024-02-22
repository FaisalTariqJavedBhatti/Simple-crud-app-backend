const Product = require('../models/product.model.js');

const getProducts = async(req, res) => {

      try {
            const products = await Product.find({});
            res.status(200).json(products);
          }
          catch (error) {
            res.status(500).json({ massage: error.massage });
          }
};

const getProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    
      }
      catch (error) {
        res.status(500).json({ massage: error.massage });
      }
};

const createProduct = async (req, res) => {

    try {
      const product = await Product.create(req.body)
      res.status(200).json(product);
  
  
    } catch (error) {
      res.status(500).json({ massage: error.massage });
    }
  
  };

const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res.status(404).json({ massage: "Product not found" });
      }
      const productUpdated = await Product.findById(id);
      res.status(200).json(productUpdated);
  
    } catch (error) {
      res.status(500).json({ massage: error.massage });
  
    }
  };

  const deleteProduct =  async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ massage: "Product not found" });
    }
  
    res.status(200).json({ massage: "Product deleted successfully" });
  };

module.exports = {
    getProducts, 
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}