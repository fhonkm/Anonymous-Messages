/* eslint-disable react/prop-types */
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="mx-32 min-h-screen flex-grow bg-slate-100 lg:mx-96">
      <div className="flex flex-col justify-start p-12 lg:justify-around">
        <div className="flex h-full items-start justify-between">
          <Header count={count} />
          <SearchBar />
          <TestButtons setCount={setCount} />
        </div>
        <BodyHeader />
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
          {/* test boxes */}
          {Array(14)
            .fill(null)
            .map((_, i) => (
              <MessageBox key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}

function Header({ count }) {
  return (
    <div className="mr-6 space-y-2">
      <p className="text-2xl font-bold lg:text-3xl">Anonymous Messages</p>
      <p className="text-lg lg:text-xl">Unsent messages</p>
      <p className="text-xs text-slate-500 lg:text-sm">
        {count
          ? `${count} ${count > 1 ? `posts` : `post`} found`
          : 'No posts found.'}
      </p>
    </div>
  );
}

function BodyHeader() {
  return (
    <div className="my-8 text-center">
      <p className="text-xl font-bold">
        A collection of anonymous messages for someone.
      </p>
    </div>
  );
}

function MessageBox() {
  return (
    <div className="w-42 h-42 space-y-4 rounded-lg bg-slate-400 p-4 lg:h-64 lg:w-64">
      <div className="">
        <p>
          Sent by <strong>Anonymous.</strong>
        </p>
        <p className="text-xs">on 9/19/2024. 8:12 PM</p>
      </div>
      <div>
        <p className="text-lg lg:text-xl">
          My name is Jeff, maybe Joe or Jester.
        </p>
      </div>
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
