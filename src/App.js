import { useState } from "react";
import "./App.css";
import Logo from "./component/Logo";
import Form from "./component/Form";
import PackingList from "./component/PackingList";
import States from "./component/States";
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  function handleToggleItem(id) {
    setItems(() =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delet all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeletItem={handleDeletItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <States items={items} />
    </div>
  );
}
