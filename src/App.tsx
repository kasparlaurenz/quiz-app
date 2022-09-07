import React from 'react';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center">
      <form className="flex flex-col gap-4 items-start" onSubmit={() => {}}>
        <label htmlFor="password">Password</label>
        <input className="p-2 rounded-full" type="password" id="password" />
        <button className="bg-slate-700 text-white text-sm p-2 rounded-full">
          Enter Quiz
        </button>
      </form>
    </div>
  );
}

export default App;
