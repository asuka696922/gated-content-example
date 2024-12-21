"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { generatePayload, isLoggedIn, login, logout } from "../actions/auth";

export const LoginButton = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
      <div className="relative">
        <ConnectButton
          autoConnect={true}
          client={client}
          auth={{
            isLoggedIn: async (address) => {
              console.log("checking if logged in!", { address });
              return await isLoggedIn();
            },
            doLogin: async (params) => {
              console.log("logging in!");
              await login(params);
            },
            getLoginPayload: async ({ address }) => generatePayload({ address }),
            doLogout: async () => {
              console.log("logging out!");
              await logout();
            },
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full cyber-button-overlay pointer-events-none"></div>
    </div>
  );
};
