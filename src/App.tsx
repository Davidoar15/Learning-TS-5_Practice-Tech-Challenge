import React, { useState } from 'react';
import './App.css'

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`,// or String,
  text: String,
  timestamp: number,
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    text: "Element 1",
    timestamp: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    text: "Element 2",
    timestamp: Date.now(),
  },
];

function App() {

  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;

    const input = elements.namedItem('item');
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now()
    }

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });

    input.value = "";
  };

  return (
      <main>
        <aside>
          <h1>Tech Challenge (React + TypeScript)</h1>
          <h2>Add and Delete elements from a List</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Insert Element:
              <input
                required
                type='text'
                name='item' 
                placeholder='Write...'/>
            </label>
            <button>
              Add Element
            </button>
          </form>
        </aside>

        <section>
          <h2>List</h2>
          <ul>
            {
              items.map(item => {
                return (
                  <li key={item.id}>
                    {item.text}
                  </li>
                )
              })  
            }
          </ul>
        </section>
      </main>
  )
}

export default App
