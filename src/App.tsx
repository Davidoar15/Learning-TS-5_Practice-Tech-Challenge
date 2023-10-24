import React from 'react';
import './App.css'
import { Item } from './components/Item';
import { useItems } from './hooks/useItems';

export type ItemId = `${string}-${string}-${string}-${string}-${string}`;// or String,
export interface Item {
  id: ItemId,
  text: string,
  timestamp: number,
};

/*
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
*/

function App() {

  const { items, addItem, removeItem } = useItems();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;

    // Validation of Input
    const input = elements.namedItem('item');
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;

    addItem(input.value);

    input.value = "";
  };

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id);
  };

  return (
      <main>
        <aside>
          <h1>Tech Challenge (React + TypeScript)</h1>
          <h2>Add and Delete elements from a List</h2>

          <form onSubmit={handleSubmit} aria-label='Add elements'>
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
            {
              items.length === 0
              ? (
                <p>
                  <strong>There are not Elements</strong>
                </p>
              ) : (
                <ul>
                  {
                    items.map((item) => {
                      return (
                        <Item 
                          {...item} 
                          handleClick={createHandleRemoveItem(item.id)} 
                          key={item.id}
                        />
                      ) 
                    })
                  }
                </ul>  
              )
            }
        </section>
      </main>
  )
}

export default App;