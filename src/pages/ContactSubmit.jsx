import React, {useState} from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { number } from 'prop-types';




export const ContactSubmit = () => {
  const {store, dispatch} =useGlobalReducer()



    const [name, setName]= useState(store.singleContact.name);
    const [address, setAddress]= useState(store.singleContact.address);
    const [phone, setPhone]= useState(store.singleContact.phone);
    const [email, setEmail]= useState(store.singleContact.email);



      const submitContact = () => {


        const option = {
            method: 'POST',
            body: JSON.stringify({
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
              }), 
            headers: {
            'Content-Type': 'application/json'
            }
        }

        fetch("https://playground.4geeks.com/contact/agendas/brandon/contacts", option)
        .then((resp) => resp.json())
        .then((data)=> console.log('contact created', data))
      }


      const updateContact = (id) => {
        if(!id) alert("there is no ID")

        const option = {
            method: 'PUT',
            body: JSON.stringify({
                "name": name,
                "phone": phone,
                "email": email,
                "address": address
              }), 
            headers: {
            'Content-Type': 'application/json'
            }
        }

        fetch("https://playground.4geeks.com/contact/agendas/brandon/contacts/"+id,option)
        .then((resp) => resp.json())
        .then((data)=> console.log('UPDATED CONTACT', data))
      }

    
    return(

        <div>
           <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='name'value = {name}/>
           <input onChange={(e)=>setAddress(e.target.value)} type="text" placeholder='address' value = {address}/>
           <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='phone' value = {phone}/>
           <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' value = {email}/>
           <button onClick={() => updateContact(store.singleContact.id)}>
            Update
            </button>
          
        </div>
)};