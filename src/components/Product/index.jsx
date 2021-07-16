import React from 'react'
import './styles.css'

const Product = ({children, className}) => {
    return(
        <div className={className}>
           {children}
        </div>
    )
}



export default Product