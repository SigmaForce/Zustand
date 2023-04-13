import React from "react";
import { Trash } from "phosphor-react";
import useUserStore, { UserType } from "../../stores/user";

export const Home = () => {
  const users = useUserStore((state) => state.users);
  const removeUser = useUserStore((state) => state.removeUser);
  return (
    <div className="bg-gray-950 min-w-[360px] h-screen overflow-auto">
      {users?.map((user) => (
        <div
          key={Math.random()}
          className="rounded-md bg-zinc-900 p-4 mx-3 my-4 relative"
        >
          <button
            className="absolute top-0 right-3 p-2 "
            onClick={() => {
              removeUser(user);
            }}
          >
            <Trash size={16} fill="weight" />
          </button>
          <div className="m-2">
            <p>Nome: {user.name}</p>
            <p>E-mail: {user.email}</p>
            <p>Idade: {user.age}</p>
            <p>Endereço: {user.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
