import React from 'react';
import { useSelector } from 'react-redux';
import FoodIcon from '../foodIcons.png'

const OrderInfo = () => {

    const data = useSelector((state) => state.order.orderInfo);

    return (
        <div className='rounded-lg bg-white mt-6 mx-12 p-4 h-32  justify-evenly'>
            <div className='  flex flex-row justify-evenly'>
            {data && Object.keys(data).map((order,i)=>{
                return (
                    <div className='basis-1/6 m-4 border-r-2' key={order} id={i}>
                        <p className='text-gray-600'>{order}</p>
                        <p className='font-semibold'>
                            {data[order] ? 
                                data[order] : 
                                <img src={FoodIcon} className="App-logo h-14" alt="logo" /> }
                        </p>
                    </div>
                  )
              })}
            </div>
        </div>
    )
}
  
export default OrderInfo;