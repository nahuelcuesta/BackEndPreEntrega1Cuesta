import { Router } from 'express';
import {ProductManager} from '../productManager.js'

const pManager = new ProductManager();

const router = Router();

/* //db
const products = pManager.getProducts() */

//Listar productos

router.get('/', async (req,res)=>{
    try {
        const products = pManager.getProducts()
        res.send(products)
    } catch (error) {
        console.log(error);
        res.send('error al intentar recibir los productos')
    }
})

router.get('/:pid', async (req, res)=>{
    const {pid} = req.params;
    try {
        
        const product = pManager.getProductsById (pid)
        res.send(product)
    } catch (error) {
        console.log(error);
        res.send(`error al intentar recibir el producto con id ${pid}`)
    }
})

router.post('/', async (req, res)=>{
    try {
        const {title, description, price, thumbnail, code, stock} = req.body;
        const response = await pManager.addProduct({title, description, price, thumbnail, code, stock})
        res.send(response)
    } catch (error) {
        console.log(error);
        res.send(`error al intentar agregar producto`)
    }
})

router.put('/:pid', async (req,res)=>{
const {pid} = req.params;
try {
    const {title, description, price, thumbnail, code, stock} = req.body;
    const response = await pManager.updateProduct(pid, {title, description, price, thumbnail, code, stock} )
    res.send(response) 
} catch (error) {
    console.log(error);
        res.send(`error al intentar editar producto con id: ${pid}`)
}
})

router.delete('/:pid', async (req, res)=>{
    const {pid} = req.params;
    try {
        await pManager.deleteProduct(pid)
        res.send('producto eliminado con exito')
    } catch (error) {
        console.log(error);
        res.send(`error al intentar eliminar producto con id: ${pid}`)
    }
})







router.post('/', (req,res)=>{
let product = req.body

})

export default router;

