import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../components/Redux/slice';

const App = () => {
  const {value} = useSelector(state => state.counter)
  const Dispatch = useDispatch()
    return ( 
      <>
        <Typography>Count - {value}</Typography>
        
        <Box>
        <Button onClick={()=>Dispatch(increment())}>+</Button>
        <Button onClick={()=>Dispatch(decrement())}>-</Button>
        
        </Box>

      </>
     );
}
 
export default App;