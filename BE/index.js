import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const productsSchema = new mongoose.Schema({
    name: String,
    price:Number,
    image:String
  });

  const  ProductsModel = mongoose.model('products', productsSchema);
 



app.get('/fa',async (req, res) => {
    const products = await ProductsModel.find()
    res.send(products)
 
})
app.get('/fa/:id', async (req, res) => {
    const {id} = req.params
    const products = await ProductsModel.findById(id)
    res.send(products)
  })

  
  app.post('/fa',async (req, res) => {
   
    const data = req.body
    const products = new ProductsModel(data);
    await products.save();
    res.send(products);
  })

  
  app.put('/fa/:id',async (req, res) => {
    const {id} = req.params
    const data2 = req.body
    const products = await ProductsModel.findByIdAndUpdate(id,data2)
    res.send(products)
  })

  
  app.delete('/fa/:id',async (req, res) => {
    const {id} = req.params
    const data2 = req.body
    const products = await ProductsModel.findByIdAndDelete(id,data2)
    res.send(products)
  })
  mongoose.connect('mongodb+srv://fidan:fidan2911@fidoshh.cia2mse.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})