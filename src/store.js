export const initialStore=()=>{
  return{
    contactsArray:[],
    singleContact:{}
}
}
export default function storeReducer(store, action = {}) {

switch(action.type){

  case "set_contact_list" : 
    return{
      ...store,
      contactsArray: action.payload
    }

  case "set_single_contact" :
    return{
      ...store,
      singleContact: action.payload
    }

  case 'add_task':
    const { id,  color } = action.payload;
    return {
      ...store,
      todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    };
  default:
    throw Error('Unknown action.');
}    



}
