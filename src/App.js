import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import InputArea from "./components/InputArea";

function App() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentEdit, setCurrentEdit] = useState("");

  function addItems(inputValue) {
    setItems((prevItems)=>{
      return [...prevItems, inputValue]
    });
  }

  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter((value,index)=>{
        return index !== id;
      })
    })
  }

  function handleEdit(index){
    setEditIndex(index);
    setCurrentEdit(items[index]);   
  }

  function saveEdit(){
    setItems((prevItems)=>{
      return prevItems.map((value,index)=>{
        if(index === editIndex){
          return currentEdit;
        }
        return value;
      })
    })
    setEditIndex(null);
    setCurrentEdit("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <InputArea displayItems={addItems} />
        </div>
        <div>
          <ul>
            {items.map((value, index) => {
              return  <TodoItem key={index} todo={value} onChecked={deleteItem} id={index} isEditing={index === editIndex} currentEdit={currentEdit} handleEdit={handleEdit} setCurrentEdit={setCurrentEdit} handleSaveEdit={saveEdit}/>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
