import React from "react";
import { Trash } from "phosphor-react";
import useUserStore, { UserType } from "../../stores/user";
import "../../styles/styles.css";

export const Home = () => {
  const users = useUserStore((state) => state.users);
  const removeUser = useUserStore((state) => state.removeUser);
  return (
    <div className="bg-gray-950 min-w-[384px] h-screen overflow-auto scroll">
      {users?.length == 0 ? (
        <div className="text-blue-400 flex justify-center items-center h-screen">
          Nenhum usuário cadastrado
        </div>
      ) : (
        <>
          {users?.map((user) => (
            <div
              key={Math.random()}
              className="rounded-md bg-gray-900 p-4 mx-3 my-4 relative text-blue-400"
            >
              <button
                className="absolute top-0 right-3 p-2 text-red-500"
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
        </>
      )}
    </div>
  );
};
