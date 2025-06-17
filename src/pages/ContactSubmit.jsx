import React, {useState} from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { number } from 'prop-types';




export const ContactSubmit = () => {
  const {store, dispatch} =useGlobalReducer()



    const [name, setName]= useState(store.singleContact.name);
    const [address, setAddress]= useState(store.singleContact.address);
    const [phone, setPhone]= useState(store.singleContact.phone);
    const [email, setEmail]= useState(store.singleContact.email);
    const navigate = useNavigate();



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

        fetch("https://playground.4geeks.com/contact/agendas/${name}/contacts", option)
        .then((resp) => resp.json())
        .then((data)=> dispatch({type:"set_single_contact", payload: data.singleContact}))
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

        const deleteContact = (id) => {
          if(!id) alert("there is no ID")

          const option = {
            method: 'DELETE'
          }

          fetch("https://playground.4geeks.com/contact/agendas/brandon/contacts/"+id,option)
          .then((resp) => resp.json())
          .then((data)=> console.log('contact deleted', data))
          
          navigate('/');
                
        }
    
    return(

        <div>
           <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='name'value = {name}/>
           <input onChange={(e)=>setAddress(e.target.value)} type="text" placeholder='address' value = {address}/>
           <input onChange={(e)=>setPhone(e.target.value)} type="text" placeholder='phone' value = {phone}/>
           <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='email' value = {email}/>
          <Link to="/">
           <button onClick={() => {submitContact(store.singleContact.id)}}> 
            Submit
            </button>
            <button onClick={() => deleteContact(store.singleContact.id)}>
            Delete
            </button>
          </Link>
          
        </div>
)};

