import { Button } from '@material-tailwind/react';
import React from 'react';

const OrderHeader = ({orderId}) => {
    
    return (
        <div className='h-auto px-12 pt-1 bg-white'>
            <div className='h-8 pt-2 text-gray-600 '>
                Orders > Order {orderId}
            </div>
            <div className='flex flex-row items-center justify-between h-16'>
                <p className='text-2xl font-semibold'>Order {orderId}</p>
                <div>
                    <Button variant='outlined' color='green' className="rounded-3xl mr-2">Back</Button>
                    <Button className='bg-green-900 rounded-3xl'>Approve Order</Button>
                </div>
            </div>
        </div>
    )
}
  
export default OrderHeader;