import {useState} from 'react'

const OrderDropDown = ({setChosenOrder}) => {
    

    const handleChange = (event) => {
        setChosenOrder(event.target.value)
    }

    return(
        <select onChange={handleChange}>
            <option value="Choose Order">Choose Order</option>
            <option value="desc">descending (default)</option>
            <option value="asc">ascending</option>
         </select>
    )
}

export default OrderDropDown