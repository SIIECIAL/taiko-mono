import { BigNumber, Contract, ethers } from "ethers";
import TaikoL1 from "../constants/abi/TaikoL1";
import { truncateString } from "./truncateString";

export const getProofReward = async (
  provider: ethers.providers.JsonRpcProvider,
  contractAddress: string
): Promise<string> => {
  const contract: Contract = new Contract(contractAddress, TaikoL1, provider);
  const fee = await contract.getProofReward(
    ~~(new Date().getTime() / 1000),
    ~~(new Date().getTime() / 1000) - 1200
  );
  return `${truncateString(ethers.utils.formatEther(fee), 8)} ${
    import.meta.env.VITE_FEE_TOKEN_SYMBOL ?? "TKO"
  }`;
};
