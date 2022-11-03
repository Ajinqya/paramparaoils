import React, { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout';
import Navbar from '../components/Navbar/Navbar';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import { ROUTES } from './RouterConfig';
import { useDisclosure } from '@chakra-ui/react'
import { useEffect } from 'react';
import { GetCustomerTemplate } from '../pages/Test/Test';



const data = {
  "firstName": "name",
  "lastName": "name",
  "email": "name@yopmail.com",
  "address": "address",
  "pinCode": "133142",
  "contactNumber": "9661363181",
  "orders": [
    {
      "id": 2,
      "name": "Cold Pressed Groundnut Oil",
      "count": 1,
      "quantity": "500mL",
      "price": "185.00",
      "image": "./assets/GNT500.png"
    },
    {
      "id": 3,
      "name": "Cold Pressed Groundnut Oil",
      "count": 1,
      "quantity": "1000mL",
      "price": "350.00",
      "image": "./assets/GNT1000.png"
    }
  ]
}


const Router = () => {

  const [cart, setCart] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()


  const productRef = useRef()

  //scroll to products
  const scrollToProducts = () => {
    productRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {

    let count = 0;
    cart?.forEach(item => {
      count += item.count
    })

    setCartCount(count)
  }, [cart])



  const delay = ms => new Promise(res => setTimeout(res, ms));
  const [toast, setToast] = useState({
    state: false,
    text: ''
  })


  const addProduct = async (text) => {
    setToast(prev => ({ ...prev, text: text, state: true }))
    await delay(1500);
    setToast(prev => ({ ...prev, state: false }))

  }

  const RouteWithRole = ({ toast, Element, addProduct }) => {

    return (
      <>
        <>{
          toast?.state ?
            <div className={`fixed h-[100vh] w-[100vw] p-[20px] flex z-[60]`}>
              <div className='animate-fade w-[fit-content] z-[60] p-[16px] bg-[#222222] rounded-[8px] mx-auto bottom-[50px] mt-auto relative text-[#fff] text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium'>{toast?.text}</div>
            </div>
            : null
        }</>

        <Navbar scrollToProducts={scrollToProducts} cartCount={cartCount} onOpen={onOpen} />
        <Checkout cart={cart} setCart={setCart} scrollToProducts={scrollToProducts} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Element setCart={setCart} addProduct={addProduct} cartCount={cartCount} cart={cart} onOpen={onOpen} productRef={productRef} scrollToProducts={scrollToProducts} />
      </>
    );
  }

  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.Home} element={<RouteWithRole toast={toast} addProduct={addProduct} Element={Home} />}></Route>
        <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
        <Route exact path={'/test'} element={< GetCustomerTemplate firstName={data?.firstName} lastName={data?.lastName} orders={data?.orders} contactNumber={data?.contactNumber} address={data?.address} pinCode={data?.pinCode} total={data?.total} />}></Route>

      </Routes>
    </div>
  )
}

export default Router