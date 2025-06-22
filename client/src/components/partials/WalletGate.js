// WalletGate.jsx
import React, { useEffect, useState } from 'react';

export default function WalletGate({ children }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!window.ethereum) {
      setError("MetaMask not installed.");
      return;
    }
    window.ethereum.request({ method: 'eth_accounts' })
      .then(accounts => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      });
  }, []);

  const connectWallet = async () => {
    try {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(account);
    } catch (err) {
      setError("User rejected wallet connection.");
    }
  };

  if (error && !walletAddress) {
    return (
      <div>
        <p>{error}</p>
        {error.includes("MetaMask") && (
          <a href="https://metamask.io/download.html" target="_blank" rel="noreferrer">Install MetaMask</a>
        )}
      </div>
    );
  }

  if (!walletAddress) {
    return <button onClick={connectWallet}>Connect Wallet</button>;
  }

  return <>{children}</>;
}
