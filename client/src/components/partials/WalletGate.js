import React, { useEffect, useState } from 'react';
import { translate } from '../../translations/translate';
import Header from './header';
import Language from '../settings/language';

export default function WalletGate({ children, lang }) {
  const [walletAddress, setWalletAddress] = useState(null);
  const [error, setError] = useState(null);
  const [hasMetaMask, setHasMetaMask] = useState(false);

  useEffect(() => {
    if (!window.ethereum) {
      setError('metamask_not_installed');
      setHasMetaMask(false);
      return;
    }
    setHasMetaMask(true);
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
      setError('wallet_connection_rejected');
    }
  };

  if (!walletAddress) {
    return (
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <Language title={lang} />
        <div className="sign_container">
          <div className="sign_container_box">
            <div className="deco">
              <Header template="sign" lang={lang} />
              <div className="sign_box">
                {error ? <p className="text_red">{translate({ lang, info: error })}</p> : null}
                <button 
                  className="mybutton button_fullcolor" 
                  onClick={connectWallet}
                  disabled={!hasMetaMask}
                  style={!hasMetaMask ? { background: '#ccc', color: '#888', border: '1px solid #ccc', cursor: 'not-allowed' } : {}}>
                  {translate({ lang, info: 'connect_wallet' })}   
                </button>
                {error === 'metamask_not_installed' && (
                  <div className="sign_extra_info">
                    <a href="https://metamask.io/download.html" target="_blank" rel="noreferrer">{translate({ lang, info: 'install_metamask' })}</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
