import React from 'react'
import Addresscard from '../AddressCard/Addresscard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='lg:px-20 px:5 pt-10'>
            <div>
                <h1 className='font-bold text-xl py-8'>Delivery Address</h1>
                <Addresscard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid className='space-y-5' container>
                {[1,1,1,1,1].map((items)=>  <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70' alt='' />
                      
                        <div className='space-y-1 ml-5'>
                            <p className='font-semibold'>Men Solid Pure Cotton Straight Kurta</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: White</span><span>Size: M</span></p>
                            <p>Seller: Linaria</p>
                            <p>₹100</p>
                        </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{ color: "#4F46E5" }}>
                            <StarBorderIcon sx={{fontSize:"1.2rem"}} />
                            <span> Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid> )}
               
            </Grid>
        </div>
    )
}

export default OrderDetails
