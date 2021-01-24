import React from 'react'
import Header from './Header'
import FormDialog from './Form/FormDialog'

const Contact = ()=>{
	return (
    <div className="full-screen-train">
        <Header/>
        <h1 className="heading" >Contact</h1 >
        <FormDialog/>
        <div className="c-email">
            <p>または<br/>kanno.public@gmail.com<br/>までご連絡ください</p>
            
        </div>  
    </div>
)
}

export default Contact
