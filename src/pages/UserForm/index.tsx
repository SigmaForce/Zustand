import React from "react";
import useUserStore from "../../stores/user";

export const UserForm = () => {
  const addUser = useUserStore((state) => state.addUser);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = (e.target as any).name.value;
    const email = (e.target as any).email.value;
    const age = (e.target as any).age.value;
    const address = (e.target as any).address.value;

    addUser({
      name,
      email,
      age,
      address,
    });
  };

  return (
    <div className="flex justify-center w-screen">
      <form
        className="flex flex-col bg-gray-800 min-w-[364px] h-72 rounded-md "
        onSubmit={onSubmit}
      >
        <div className="w-full flex justify-center py-4">
          <input
            className="w-[80%] h-8 rounded-md px-4 outline-none focus:ring-2 focus:ring-blue-300 text-zinc-900"
            type="text"
            name="name"
            placeholder="Nome"
          />
        </div>
        <div className="w-full flex justify-center pb-4">
          <input
            className="w-[80%] h-8 rounded-md px-4 outline-none focus:ring-2 focus:ring-blue-300 text-zinc-900"
            type="Email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="w-full flex justify-center pb-4">
          <input
            className="w-[80%] h-8 rounded-md px-4 outline-none focus:ring-2 focus:ring-blue-300 text-zinc-900"
            type="number"
            name="age"
            placeholder="age"
          />
        </div>
        <div className="w-full flex justify-center pb-4">
          <input
            className="w-[80%] h-8 rounded-md px-4 outline-none focus:ring-2 focus:ring-blue-300 text-zinc-900"
            type="text"
            name="address"
            placeholder="address"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button
            className="w-[80%] h-8 rounded-md px-4 outline-none bg-blue-500 font-medium text-zinc-50 hover:bg-blue-600 transition duration-300 ease-in-out"
            type="submit"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};
