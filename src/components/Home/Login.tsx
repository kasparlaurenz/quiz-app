import React from 'react';
import type { Dispatch, SetStateAction, FC, FormEvent } from 'react';

interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  verifyPassword: (e: FormEvent<HTMLFormElement>) => void;
  showErrMessage: boolean;
  setShowErrMessage: Dispatch<SetStateAction<boolean>>;
}

const Login: FC<Props> = ({
  input,
  setInput,
  verifyPassword,
  showErrMessage,
  setShowErrMessage,
}) => {
  return (
    <form
      className="flex flex-col gap-4 items-center"
      onSubmit={verifyPassword}
    >
      <label htmlFor="password">Enter Password:</label>
      {showErrMessage ? (
        <div className="text-red-600 font-bold">Wrong Password</div>
      ) : (
        ''
      )}
      <input
        className="p-2 rounded-2xl focus:scale-105 focus-visible:outline transition duration-200"
        type="password"
        placeholder="Password..."
        id="password"
        value={input}
        onChange={e => {
          setInput(e.target.value);
          setShowErrMessage(false);
        }}
        required
      />
      <button className="bg-slate-700 text-white text-sm p-2 rounded-2xl transition duration-150 hover:scale-105 hover:bg-slate-500">
        Enter Quiz
      </button>
    </form>
  );
};

export default Login;
