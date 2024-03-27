import { Grid } from '@mui/material'
import React from 'react'
import Acheivement from './Acheivement'
import MonthlyOverview from './MonthlyOverview'
import ProductsTable from './ProductsTable'

const AdminDashboard = () => {
  return (
    <div className='p-10'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Acheivement/>
        </Grid>
        <Grid item xs={12} md={8}>
          <MonthlyOverview/>
        </Grid>
        <Grid item xs={12} ms={6}>
          {/* <ProductsTable/> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashboard
