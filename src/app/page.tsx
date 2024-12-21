"use client";

import { useActiveAccount } from "thirdweb/react";
import { LoginButton } from "./consts/LoginButton";

export default function Home() {
  const account = useActiveAccount();
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="cyber-card max-w-lg w-full mx-auto text-center">
        <h1 className="cyber-text text-4xl mb-8">NFT Access Portal</h1>
        <div className="mb-8">
          <LoginButton />
        </div>

        {account && (
          <div className="mt-8">
            <p className="mb-4 text-lg">Access Granted</p>
            <a 
              href="/gated-page" 
              className="cyber-button inline-block"
            >
              Enter Secured Zone
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
