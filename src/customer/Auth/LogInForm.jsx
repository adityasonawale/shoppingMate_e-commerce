import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';

const LogInrForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


 

    const handleSubmit = (event) => {
        event.preventDefault(false)

        const data = new FormData(event.currentTarget);

        const userData = {
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(login(userData))
        console.log("userdata",userData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email id'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label='Password'
                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='w-full'
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{ padding: '.8rem 0', bgcolor: '#4F46E5' }}>
                            Log In</Button>
                    </Grid>
                </Grid>
            </form>
            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>Don't have an account ?</p>
                    <Button onClick={()=> navigate("/register")} className='ml-5' size='small'>register</Button>
                </div>
            </div>
        </div>
    )
}

export default LogInrForm
