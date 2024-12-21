"use client";
import { LoginButton } from "../consts/LoginButton";

export const GatedContent = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="cyber-card max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="cyber-text text-4xl mb-4">Secure Access Granted</h1>
          <div className="mb-8">
            <LoginButton />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="cyber-card bg-opacity-50 p-6">
            <h2 className="cyber-text text-2xl mb-4">Welcome, Authorized User</h2>
            <p className="text-lg leading-relaxed">
              You have successfully accessed the restricted zone. Your NFT pass has been verified, 
              granting you exclusive access to this secure area. You are among the selected few 
              who possess the required credentials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="cyber-card bg-opacity-30 p-4">
              <h3 className="cyber-text text-xl mb-2">Security Level</h3>
              <p className="text-blue-400">Level Alpha Clearance</p>
            </div>
            <div className="cyber-card bg-opacity-30 p-4">
              <h3 className="cyber-text text-xl mb-2">Access Type</h3>
              <p className="text-green-400">NFT Verified</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
