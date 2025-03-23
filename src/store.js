export const initialStore=()=>{
  return{
    contactsArray:[],
    singleContact:{}
}
}
export default function storeReducer(store, action = {}) {


if(action.type == "set_contact_list"){
    return{
      ...store,
      contactsArray: action.payload
    }
}


if(action.type == "set_single_contact"){
  return{
    ...store,
    singleContact: action.payload
  }
}







  switch(action.type){
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
