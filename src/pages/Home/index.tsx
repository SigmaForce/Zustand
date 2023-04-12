import React from "react";
import useUserStore, { UserType } from "../../stores/user";

export const Home = () => {
  const users = useUserStore((state) => state.users);
  return (
    <div>
      {users?.map((user) => (
        <p key={Math.random()}>
          {user.name} | {user.email}
        </p>
      ))}
    </div>
  );
};
