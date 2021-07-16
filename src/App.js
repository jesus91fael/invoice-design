import React from "react";
import Title from './components/Title'
import Product from "./components/Product";
import Uniti from "./components/Uniti";
import Container from "./components/Container";
import Price from "./components/Price";
import Button from "./components/Button";
import './App.css'

export default function App() {


  return (
    <div className='box'>
      <Title>Invoice</Title>
      <Container className='row title'>
        <Product className='product'>PRODUCT</Product>
        <Uniti className='unidade'>UNIT</Uniti>
        <Price className='preco'>Price</Price>
      </Container>
      <Container className='row conteudo'>
        <Product className='product'>Thre Unicorns</Product>
        <Uniti className='unidade'>1</Uniti>
        <Price className='preco'>$15.00</Price>
      </Container>
      <Container className='row conteudo'>
        <Product className='product'>Awesome Jacks</Product>
        <Uniti className='unidade'>2</Uniti>
        <Price className='preco'>$15.00</Price>
      </Container>
      <Container className='row conteudo'>
        <Product className='product'>Two Kings</Product>
        <Uniti className='unidade'>1</Uniti>
        <Price className='preco'>$15.00</Price>
      </Container>
      <Container className='row soma'>
        <Product className='product'>Total</Product>
        <Uniti className='unidade'></Uniti>
        <Price className='preco'>$60.00</Price>
      </Container>
      <Button>Pay Now</Button>
    </div>
  );
}