/* eslint-disable react/prop-types */
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="mx-32 flex h-screen justify-center bg-slate-100 p-12 lg:mx-96 lg:justify-around">
      <Header count={count} />
      <SearchBar />
      <TestButtons setCount={setCount} />
    </div>
  );
}

function Header({ count }) {
  return (
    <div className="mr-6 space-y-2">
      <p className="text-2xl font-bold lg:text-3xl">Anonymous Messages</p>
      <p className="text-lg lg:text-xl">Unsent messages</p>
      <p className="\\text-slate-500 text-xs lg:text-sm">
        {count
          ? `${count} ${count > 1 ? `posts` : `post`} found`
          : 'No posts found.'}
      </p>
    </div>
  );
}

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log('test search:', e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search?"
        className="w-64 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 lg:w-80"
      />
    </div>
  );
}

function TestButtons({ setCount }) {
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increment button</button>
      <button onClick={() => setCount(0)}>Reset button</button>
    </div>
  );
}

export default App;
