import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Chip,
} from "@material-tailwind/react";
import { updateOrderStatus } from '../services/orderReducer';
 
const Cross = ({id,productName, handleCross}) => {

  const data = useSelector((state) => state.order.orderDetails);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

//   const handleNo = () => {
//     console.log(id,productName);
//     const chip = <Chip color='green' value="Approved" className="rounded-full w-2/3 m-auto" />;
//     const newData = {idx:id,data:{...data[id],status:chip}};
//     // console.log(document.getElementById(`btn-cross-${id}`));
//     // document.getElementById(`btn-cross-${id}`).classList.add("text-red-700");
//     dispatch(updateOrderStatus(newData));
//     handleOpen();
//   }
  
  const handleYes = ({id,productName}) => {
    
    handleOpen();
  }

  return (
    <>
      <button id={id} onClick={handleOpen} variant="gradient" className='hover:text-red-800'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Missing Product</DialogHeader>
        <DialogBody > Is "{productName}" urgent ?  </DialogBody>
        <DialogFooter>
          <Button variant="text" onClick={() => handleCross(id)} className="mr-1"> <span>No</span> </Button>
          <Button variant="text" onClick={handleYes} className="mr-1"> <span>Yes</span> </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Cross;