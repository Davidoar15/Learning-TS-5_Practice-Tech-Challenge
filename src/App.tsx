import './App.css'

function App() {

  return (
      <main>
        <aside>
          <h1>Tech Challenge (React + TypeScript)</h1>
          <h2>Add and Delete elements from a List</h2>
          
          <form>
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
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
            <li>Element 4</li>
          </ul>
        </section>
      </main>
  )
}

export default App
