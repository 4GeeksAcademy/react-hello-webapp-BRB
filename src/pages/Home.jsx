import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { ContactSubmit } from "./ContactSubmit.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  const createAgenda = ()=>{

	const option = {
		method: 'POST',
        body: JSON.stringify({
			"slug": "username",
			"id": 0
		  }), 
        headers: {
        'Content-Type': 'application/json'
		}

	}
	fetch('https://playground.4geeks.com/contact/agendas/username', option)
	.then((resp)=>{
		if(resp.ok == false){
		console.log('failed')
	}
		else{
			getData()
		}
		return resp.json()
	})
	.then((data) => {
		dispatch({type: "set_contact_list", payload: singleContact})
	})
  }
  const getData = () =>{

	const option = {
		method: 'GET',
        // body: JSON.stringify({
		// 	"slug": "username",
		// 	"id": 0
		//   }), 
        headers: {
        'Content-Type': 'application/json'
		}

	}

	  fetch("https://playground.4geeks.com/contact/agendas", option)
	  .then((resp)=> {
		console.log('resp:', resp)
		if(resp.ok == false){
			createAgenda()
		} 
		else{
			return resp.json()
		}
	  })

	.then((data) => {
			dispatch({
				type: "set_contact_list",
				payload: data.singleContact
			})
	} ) 
  }

  useEffect(()=> {
		getData();
  },[])


 

	return (
		<div className="text-center mt-5" >
			{
				store.contactsArray &&
				store.contactsArray.length > 0 ? 
				store.contactsArray.map((contact)=>{
					return(
						<div className='m-3 bg-light p-3'key={contact.id}>
							<div>name: {contact.name}</div>
							<div>email: {contact.email}</div>
							<div>phone: {contact.phone}</div>
							<div>address: {contact.address}</div>
							<Link to="/submit">
								<button
										onClick={
									()=>{
						
										dispatch({type:"set_single_contact", payload: singleContact})
									}
								}
								>Edit</button>
							</Link>
						</div>
					)
				})
				: 
			"No Contact Card"
			}
		</div>
		)}




