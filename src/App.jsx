/* eslint-disable react/prop-types */
import { useState } from "react"

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="h-screen flex justify-center p-12 mx-32 lg:justify-around bg-slate-100 lg:mx-96">
      <Header count={count} />
      <SearchBar />
      <TestButtons setCount={setCount} />
    </div>
  )
}

function Header({ count }) {
  return (
    <div className="space-y-2 mr-6">
        <p className="text-2xl font-bold lg:text-3xl">Anonymous Messages</p>
        <p className="text-lg lg:text-xl">Unsent messages</p>
        <p className="text-xs lg:text-sm \text-slate-500">{
          count 
          ? `${count} ${count > 1 ? `posts` : `post`} found`
          : 'No posts found.'
          }
        </p>
    </div>
  )
}

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log("test search:", e.target.value)
  }

  return (
      <div>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search?"
          className="w-64 border border-gray-300 rounded-lg px-4 py-2 lg:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
  )
  
}

function TestButtons({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment button</button>
      <button onClick={() => setCount(0)}>Reset button</button>
    </div>
  )
}

export default App
