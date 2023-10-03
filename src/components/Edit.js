import React from "react";
import Avocado from '../Avocado Hass.jpg'
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
 
const Edit = ({order}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <button onClick={handleOpen}>Edit</button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none "
      >
        <Card className="mx-auto w-4/5 ">
          <CardBody className="flex flex-col gap-4">
            <p className="font-bold">{order.productName}</p>
            <p>{order.brand}</p>
            <div className="flex">
                <img src={Avocado} className="App-logo h-40 w-40 mr-4" alt="logo" />
                <ul className="w-full h-40 flex flex-col justify-between">
                    <li className="flex flex-row text-black justify-between items-center">
                        <div>Price ($):</div>
                        <div className="w-3/5 flex justify-between items-center">
                            <Input defaultValue={order.price.substr(0, order.price.indexOf(' '))} className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10" containerProps={{ className: "w-[75px]" }}/>
                            <div>/ 6 * 1LB</div>
                        </div>
                    </li>
                    <li className="flex flex-row text-black justify-between items-center">
                        <div>Quantity:</div>
                        <div className="w-3/5 flex justify-between items-center">
                            <Input defaultValue={order.quantity.substr(0, order.quantity.indexOf(' '))} className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10" containerProps={{ className: "w-[75px]" }}/>
                            <div>x 6 * 1LB</div>
                        </div>
                    </li>
                    <li className="flex flex-row text-black justify-between items-center">
                        <div>Total:</div>
                        <div className="w-3/5 flex justify-between items-center">{order.total}</div>
                    </li>
                </ul>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div>
              <span className="text-black font-semibold text-sm">Choose Reason </span><span>(Optional)</span>
            </div>
            <div className="flex justify-evenly mt-2">
                <Button size="sm" variant="outlined" className="rounded-full">Missing Product</Button>
                <Button size="sm" variant="outlined" className="rounded-full">Quantity is not same</Button>
                <Button size="sm" variant="outlined" className="rounded-full">Price is not the same</Button>
                <Button size="sm" variant="outlined" className="rounded-full">Other</Button>
            </div>
            <div className="mt-2 flex justify-end">
                <Button color="green" variant="text" onClick={handleOpen} className="rounded-full">Cancel</Button>
                <Button color="green" className="rounded-full" onClick={handleOpen} >Send</Button>
            </div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default Edit;