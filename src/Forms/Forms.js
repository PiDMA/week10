import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Display from '../Display/Display';
import ReactDOM from 'react-dom';

const Forms = () => {

    const {register, handleSubmit, errors} = useForm();
    // const [submitted, setSubmitted] = useState(false);

        return (
            <div>
                <h1>Data Entry Form</h1>
                <form onSubmit={handleSubmit((data) => {
                    console.log(data.email)
                    React.createElement('p', data.email);
                    React.createElement('p', data.name);
                    React.createElement('p', data.addres);

                    ReactDOM.render(<Display {...data}/>, document.getElementById('root'));
                })}>
                    <input {...register("email")} placeholder="Enter Email"/>
                    <input {...register("name")} placeholder="Full Name"/>
                    <input {...register("address")} placeholder="Address"/>
                    <input {...register("address2")} placeholder="Apartment, Studio, or Floor"/>
                    <input {...register("city")} placeholder="City"/>
                    <input {...register("postalCode")} placeholder="Postal Code"/>
                    <select {...register("province")}>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Northwest Territories">Northwest Territories</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Yukon">Yukon</option>
                    </select>
                    <input type={"submit"}/>
                </form> 
            </div>
            
        );
}



export default Forms;