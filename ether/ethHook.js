import { useEffect, useState } from "react";
import { ethers } from "ethers";

export const useContract = (address, ABI) => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, ABI, signer);
    setContract(contract);
  }, [address, ABI]);

  return contract;
};
