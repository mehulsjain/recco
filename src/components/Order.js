import React, { useEffect, useState } from 'react';
import OrderHeader from './OrderHeader';
import OrderInfo from './OrderInfo';
import OrderDetails from './OrderDetails';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { updateOrders } from "../services/orderReducer";

const Order = () => {

    const [data, setData] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
      //fetch data here
      (async() => {
        await axios.get(`https://api.npoint.io/2a86cd3f4fb89a582f78`)
        .then((resp) => {
            
            setData(resp.data);
            dispatch(updateOrders(resp.data));
        })
        .catch(err => console.log(err))})();
    }, [dispatch])
    
    if (!data) return null;

    return (
        <div className='bg-gray-200 border h-auto'>
            <OrderHeader orderId = {data.orderId} />
            {data && <OrderInfo  />}
            {data && <OrderDetails />}
        </div>
    )
}
  
export default Order;