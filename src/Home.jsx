import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearToken, selectToken } from '../src/Redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const token = useSelector(selectToken);
    console.log(token)


    const handleClick = () => {
        dispatch(clearToken())
        navigate('/login')
    }

    useEffect(()=>{
        if(!token) {
            navigate('/login')
        }
    },[])


  return (
    <>
    <div>Welcome sir !!
     </div>

   <h3>you are logged In !!</h3>
   <button onClick={handleClick}>Logout</button>
   </>

  )
}

export default Home