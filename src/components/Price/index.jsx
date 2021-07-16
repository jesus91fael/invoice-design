import React from 'react'
import './styles.css'

const Price = ({children, className}) => {
    return(
        <div className={className}>
           {children}
        </div>
    )
}



export default Price