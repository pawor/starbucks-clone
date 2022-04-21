import './FormSubmit.css'
import React from 'react'

function FormSubmit({  name, type, onClick }) {
    return (
        <button className='formSubmit' type={type}>{name}</button>
    )
}
export default FormSubmit