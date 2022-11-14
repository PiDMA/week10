import React, {useState} from 'react';
import {useForm} from 'react-hook-form';


const Display = props => {
    // console.log(props.data.email)
    console.log("FROM DISPLAY")
    return (
        <div>
            <ul>
                <li>Email: {props.email}</li>
                <li>Name: {props.name}</li>
                <li>Address: {props.address}</li>
                <li>Address 2: {props.address2}</li>
                <li>City : {props.city}</li>
                <li>Postal Code: {props.postalCode}</li>
                <li>Province: {props.province}</li>
            </ul>
        </div>
    )

}

export default Display;