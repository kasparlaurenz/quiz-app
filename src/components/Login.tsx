import React from 'react';
import type { Dispatch, SetStateAction, FC, FormEvent } from 'react';

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  verifyPassword: (e: FormEvent<HTMLFormElement>) => void;
}

const Login: FC<Props> = ({ input, setInput, verifyPassword }) => {
  return (
    <div>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={verifyPassword}
      >
        <label htmlFor="password">Enter Password:</label>
        <input
          className="p-2 rounded-2xl focus:scale-105 focus-visible:outline transition duration-200"
          type="password"
          id="password"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="bg-slate-700 text-white text-sm p-2 rounded-2xl transition duration-150 hover:scale-105 hover:bg-slate-500">
          Enter Quiz
        </button>
      </form>
    </div>
  );
};

export default Login;
