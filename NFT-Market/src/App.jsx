import './App.css'
import Navigation from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'
import ListedItems from './components/ListedItems'
import Purchases from './components/Purchases'
import {Routes, Route} from 'react-router-dom'
import { useSDK } from '@metamask/sdk-react';
import { useState } from 'react'
import { ethers } from 'ethers'
import MarketAdd from './contractsData/Marketplace-address.json';
import MarketAbi from './contractsData/Marketplace.json';
function App() {
  const [account, setAccount] = useState();
  const [itemCount, setitemCount] = useState();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const ConnectMetaMask = async () => {
    try{
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    }
    catch(error){
      console.warn(`failed to connect..`, err);
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const Web3signer = await provider.getSigner();
    //@dev load the contract once metamask connection is established.
    loadContracts(Web3signer);
  };

  const loadContracts = async(Web3signer) => {
    try{
      let contract = await ethers.getContractAt('Marketplace',MarketAdd.address);
      console.log('Contract Instance is:', contract);
      let item;
      item = await contract.getItemCount();
      console.log("Item Count is:", item);
      setitemCount(item.value);
      console.log("Item Count", itemCount);
    }
    catch(error){
      console.log("Error loading Contract Data:",error);
    }   
  }

  return (
    <>
      <Navigation ConnectMetaMask = {ConnectMetaMask} account = {account}/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Create" element={<Create/>} />
        <Route path="/ListedItems" element={<ListedItems/>} />
        <Route path="/Purchases" element={<Purchases/>} />
      </Routes>
    </>
  )
}

export default App
