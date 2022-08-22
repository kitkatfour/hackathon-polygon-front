import { useState } from 'react'
import { useProvider, useContract, useSigner, useAccount } from 'wagmi'
import abi from '../contracts/PrizePool.json'
import erc20abi from '../contracts/ERC20ABI.json'
import ControlledTokenAbi from '../contracts/ControlledToken.json'
import Layout from '../components/Layout'
import { ethers } from 'ethers'
// import { useSendTransactionWrapper } from "../hooks/useSendTransactionWrapper";
import Link from 'next/link'
import Timer from '../components/Timer'

import { poolAddress, tokenAddress } from '../constants/contractsAddress'

export default function Home() {
	// const sendTx = useSendTransactionWrapper();
	const [amount, setAmount] = useState()
	// const provider = useProvider();
	// const { address, isConnected } = useAccount();

	const { data: signer } = useSigner()

	// Mumbai PrizePool contract address
	//const poolAddress = "0x26e507ce8ce828abc7fc986c8a19f4354d5b8cd2";

	// Polygon PrizePool contract addrress
	// const poolAddress = "0x4f3Fc13df562c7C06e530b054834a282fc1961f7";

	// PT Aave aAAVE Ticket token address
	//const tokenAddress = "0x74c873c719866a650F151A9fBF0cB5b5c6315906";

	// WETH Polygon token address
	// const tokenAddress = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";

	const wooyPoolContract = useContract({
		addressOrName: poolAddress,
		contractInterface: abi,
		signerOrProvider: signer,
	})

	const erc20Contract = useContract({
		addressOrName: tokenAddress,
		contractInterface: ControlledTokenAbi,
		signerOrProvider: signer,
	})

	const deposit = async (e) => {
		const address = await signer.getAddress()
		const parsedAmount = ethers.utils.parseUnits(amount)

		// e.preventDefault();

		// const params = [
		//   poolAddress,
		//   ethers.utils.parseUnits("9999999999", Number(decimals)),
		// ];

		// const txName = t(`allowTickerPoolSponsorship`, {});
		// const method = "approve";

		// const id = await sendTx({
		//   name: txName,
		//   contractAbi: ControlledTokenAbi,
		//   contractAddress: tokenAddress,
		//   method,
		//   params,
		//   callbacks: {},
		// });
		// console.log(id, "asdasd");
		// const aId = await id.wait();

		// console.log(aId, "asdasd");

		const approveTx = await erc20Contract.approve(poolAddress, parsedAmount)
		console.log(approveTx, 'aprobacion')
		const aTx = await approveTx.wait()
		console.log(aTx, 'await tx')

		const tx = await wooyPoolContract.depositTo(
			address,
			parsedAmount,
			tokenAddress,
			ethers.constants.AddressZero
		)

		console.log(tx, 'Depositando....')

		const depositAtx = await tx.wait()
		console.log(depositAtx, 'depositAtx')
	}

	const withdrawal = async (e) => {
		const approveTx = await erc20Contract.approve(poolAddress, parsedAmount)
		console.log(approveTx, 'aprobacion')
		const aTx = await approveTx.wait()
		console.log(aTx, 'await tx')

		const tx = await wooyPoolContract.withdrawInstantlyFrom(
			address,
			parsedAmount,
			tokenAddress
		)

		console.log(tx, 'Retirando....')

		const widthdrawAtx = await tx.wait()
		console.log(widthdrawAtx, 'widthdrawAtx')
	}

	/// @notice Withdraw assets from the Prize Pool instantly.  A fairness fee may be charged for an early exit.
	/// @param from The address to redeem tokens from.
	/// @param amount The amount of tokens to redeem for assets.
	/// @param controlledToken The address of the token to redeem (i.e. ticket or sponsorship)
	/// @param maximumExitFee The maximum exit fee the caller is willing to pay.  This should be pre-calculated by the calculateExitFee() fxn.
	/// @param donationPercentage The percentage of the withdrawal to donate
	/// @return The actual exit fee paid
	// function withdrawInstantlyFrom(
	//   address from,
	//   uint256 amount,
	//   address controlledToken,
	//   uint256 maximumExitFee,
	//   uint256 donationPercentage
	// )

	return (
		<Layout>
			<div className="px-32 w-full">
				<h1 className="text-4xl text-white font-semibold">
					Current Prize
				</h1>
				<div className="flex rounded-2xl bg-white shadow-lg mt-8 hover:shadow-2xl hover:cursor-pointer transition-all">
					<img
						src={'/pool1.png'}
						alt=""
						className="rounded-xl h-80"
					/>
					<div className="p-8 flex flex-col justify-center items-center gap-8 w-full h-full">
						<div className="">
							<h2 className="text-2xl text-black font-medium">
								{'Experience the world cup in qatar'}
							</h2>
							<p className="text-[#ED652B] font-bold">
								X WEFOREST
							</p>
							<hr className="w-full mt-4" />
							<Timer />
						</div>
						<Link href={'/pool'}>
							<button className="mt-4 lg:px-16 px-8 py-2 bg-[#ED652B] rounded-md font-bold border-2 border-black	hover:shadow-2xl hover:bg-[#fd692a] transition-all">
								JOIN POOL
							</button>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	)
}

{
	/* <input
  placeholder="Ingresar monto a depositar"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>
<button style={{ backgroundColor: "red" }} onClick={deposit}>
  Join the pool
</button>
<input
  placeholder="Ingresar monto a retirar"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
/>
<button style={{ backgroundColor: "red" }} onClick={deposit}>
  Join the pool
</button> */
}
{
	/* <Card
  image="bored.jpg"
  title={"Win a ticket"}
  desc={"This will be the best prize of the world"}
  buttonlabel={"Enter the pool"}
  path="/"
/>
<Card
  image="pool2.jpeg"
  title={"Win a ticket"}
  desc={"This will be the best prize of the world"}
  buttonlabel={"Enter the pool"}
  path="/"
/> */
}
