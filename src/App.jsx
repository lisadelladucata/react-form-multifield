import { useState } from 'react'

export default function App(){
  const [newListItem, setNewListItem] = useState("");
  const [shoppingList, setShoppingList] = useState(['T-shirt', 'Jeans' , 'Maglione'])

  const handleSubmit = (e) =>{
  e.preventDefault();
  setShoppingList((currentState) => [...currentState , newListItem]);
  setNewListItem('')
};

const handleDelete = (productDelete) => {
  setShoppingList((currentState) => currentState.filter((product) => productDelete !== product))
};

  return <>
   <h1>Lista di prodotti</h1>
  <ul>
    {
      shoppingList.map((product, index) =>{
      return <li key={index}>
        {product}
        <button type="button" onClick={() =>handleDelete(product)}>X</button>
        </li>
      })
    }
  </ul>
  <hr />
  <h3>Aggiungi un prodotto</h3>
    <form onSubmit={handleSubmit}>
    <input
      type="text" 
      value={newListItem} 
      onChange={(e) =>{
        setNewListItem(e.target.value)
      }}
      placeholder="scrivi un altro oggetto"
    />
    <button type="submit">Invia</button>
    </form>
  </>
}
