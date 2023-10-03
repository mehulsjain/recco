import { Button, Chip } from '@material-tailwind/react';
import React, {useEffect, useState} from 'react';
import Avocado from '../Avocado Hass.jpg'
import { useDispatch, useSelector } from 'react-redux';
import Edit from './Edit';
import { updateOrderStatus } from '../services/orderReducer';
import Cross from './Cross';

const OrderDetails = () => {

    let data = useSelector((state) => state.order.orderDetails);
    const dispatch = useDispatch();
    
    const [chip, setChip] = useState(null);

    const handleTick = (i) => {
        setChip(<Chip color='green' value="Approved" className="rounded-full w-2/3 m-auto" />);
        const newData = {idx:i,data:{...data[i],status:chip}};
        document.getElementById(`btn-tick-${i}`).classList.add("text-green-500");
        dispatch(updateOrderStatus(newData));
    }
    const handleCross = (i) => {
        setChip(<Chip color='red' value="Approved" className="rounded-full w-2/3 m-auto" />);
        const newData = {idx:i,data:{...data[i],status:chip}};
        document.getElementById(`btn-cross-${i}`).classList.add("text-red-500");
        dispatch(updateOrderStatus(newData));
    }
    // const handleCross = ({i,productName}) => {
    //     let bool = window.confirm(`Is "${productName}" urgent?`);
    //     let newData;
    //     if(bool){
    //         setChip(<Chip color='red' value="Missing - Urgent" className="rounded-full w-2/3 m-auto" />);
    //         newData = {idx:i,data:{...data[i],status:chip}};
    //     }else{
    //         setChip(<Chip color='orange' value="Missing" className="rounded-full w-2/3 m-auto" />);
    //         newData = {idx:i,data:{...data[i],status:chip}};
    //     }
    //     document.getElementById(`btn-tick-${i}`).classList.add("text-red-600");
    //     dispatch(updateOrderStatus(newData));
    // }
    useEffect(()=>{},[data])
    return (
        <div className='rounded-lg bg-white mt-6 mx-12 p-4 h-auto flex flex-col'>
            <div className='mt-6 flex flex-row justify-between'>
                <div className="relative mt-1">
                    <input type="text" id="password" className=" pl-3 pr-10 py-2 border-2 border-gray-200 rounded-3xl hover:border-gray-300 focus:outline-none focus:border-gray-500 transition-colors" placeholder="Search..." />
                    
                </div>
                <div className='w-2/3 flex justify-end items-center'>
                    <Button variant='outlined' color='green' className="rounded-3xl mr-5">Add item</Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                    </svg>
                </div>
            </div>
            <table className="table-fixed w-full mt-6 text-center">
                <thead>
                    <tr className='border border-gray-400 text-gray-600 rounded-t-3xl'>
                        <td></td>
                        <td>Product name</td>
                        <td>Brand</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Status</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                {data && data.map((order,i) => {
                    return(
                    <tr key={i} id={i} className='border-b-2 border-gray-500 text-gray-600 h-24'>
                        <td id={`img-${i}`}><img src={Avocado} className="App-logo h-12 w-12 m-auto" alt="logo" /></td>
                        <td id={`productName-${i}`}>{order.productName}</td>
                        <td id={`brand-${i}`}>{order.brand}</td>
                        <td id={`price-${i}`}>{order.price}</td>
                        <td id={`quantity-${i}`}>{order.quantity}</td>
                        <td id={`total-${i}`}>{order.total}</td>
                        <td id={`status-${i}`} className='bg-gray-200 w-full'>{order.status!=="" ? order.status:""}</td>
                        <td className='bg-gray-200 w-full flex justify-between p-4 h-24'>
                            <button id={`btn-tick-${i}`} onClick={() => handleTick(i)} className='hover:text-green-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </button>
                            <Cross id={`btn-cross-${i}`} productName={order.productName} handleCross={handleCross} />
                            <Edit order={order} />
                        </td>
                    </tr>
                )})}
                </tbody>
            </table>
        </div>
    )
    
}
  
export default OrderDetails;