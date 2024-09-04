import React from 'react'

const ProtectedLogin = ({children}) => {
    const isUserAuthenticated = localStorage.getItem("sid")
    return ( 
        <>
        {
            isUserAuthenticated?children:<Navigate to="/login"/>
        }
        </>
     );
}

export default ProtectedLogin