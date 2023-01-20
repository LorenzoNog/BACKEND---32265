const express = require('express')
const app = express()
const products = require('../products.json')

app.get('/',(req,res)=>{
    res.sendFile('C:/Users/loren/OneDrive/Escritorio/Backend/Entregable2/app.js')
})

app.get('/products',(req,res)=>{
    const {limit} = req.query
    if(limit){
        const limitProducts = products.slice(0,limit)
        res.json({products:limitProducts})
    }else{
        res.json({products})
    }
})

app.get('/products/:productId',(req,res)=>{
    const {productId} = req.params
    const product = products.find((product) => product.id === parseInt(productId))
    if(product){
        res.json({product})
    }else{
        console.log('ID del producto no encontrado')
    }
})

app.listen(2022,()=>{
    console.log('messi')
})