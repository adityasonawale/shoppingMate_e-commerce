
import { RowingSharp } from '@mui/icons-material'
import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { findProducts } from '../../State/Product/Action'
import { useDispatch, useSelector } from 'react-redux'

const ProductsTable = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(store => store)

    console.log('----',products)

    useEffect(()=>{
        const data = {
            category: "",
            colors:  [],
            sizes:  [],
            minPrice : 0,
            maxPrice : 100000,
            minDiscount:  0,
            sort:  "price_low",
            pageNumber: 0,
            pageSize: 7,
            stock: "",
          };
          dispatch(findProducts(data))
    },[])
  return (
    <div className='p-5'>
        <Card className='mt-2'>
            <CardHeader title="products" sx={{bgcolor:'#0A3D62',color:'whitesmoke'}}/>
 <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 ,bgcolor:'#0A3D62'}} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell sx={{ color:'whitesmoke' }} >Image</TableCell>
            <TableCell sx={{ color:'whitesmoke' }} align="center">Title</TableCell>
            <TableCell sx={{ color:'whitesmoke' }} align="center">Category</TableCell>
            <TableCell sx={{ color:'whitesmoke' }} align="center">Price</TableCell>
            <TableCell sx={{ color:'whitesmoke' }} align="center">Quantity</TableCell>
            <TableCell sx={{ color:'whitesmoke' }} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { products?.products?.content?.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align='center'>
                    <Avatar src={item.imageUrl}></Avatar>
                </TableCell>
                
              <TableCell align='center' scope="row" sx={{ color:'whitesmoke' }}>
                {item.title}
              </TableCell>
          
              <TableCell align="center"sx={{ color:'whitesmoke' }}>{item.category.name}</TableCell>
              <TableCell align="center"sx={{ color:'whitesmoke' }}>₹{item.price}</TableCell>
              <TableCell align="center"sx={{ color:'whitesmoke' }}>{item.quantity}</TableCell>
              <TableCell align="center">
                <Button  sx={{color:'white',bgcolor:'red'}}>Delete</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </Card>
     
    </div>
  )
}

export default ProductsTable
