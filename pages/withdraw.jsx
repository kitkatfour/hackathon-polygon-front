import React from 'react'
import Layout from '../components/Layout'
import { Box, Slider } from '@mui/material'
import { useState, useEffect } from 'react'

import { useContract, useSigner } from 'wagmi'
import abi from '../contracts/PrizePool.json'
import erc20abi from '../contracts/ERC20ABI.json'
import ControlledTokenAbi from '../contracts/ControlledToken.json'
import { ethers } from 'ethers'

const withdraw = () => {
	const [deposited, setDeposited] = useState(0)
	const [amount, setAmount] = useState(0)
	const [percentage, setPercentage] = useState(25)
	const { data: signer } = useSigner()

	const poolAddress = '0x26e507ce8ce828abc7fc986c8a19f4354d5b8cd2'

	// Mumbai PrizePool contract address
	// Polygon PrizePool contract addrress
	//const poolAddress = '0x4f3Fc13df562c7C06e530b054834a282fc1961f7'

	// PT Aave aAAVE Ticket token address
	const tokenAddress = '0x74c873c719866a650F151A9fBF0cB5b5c6315906'

	// WETH Polygon token address
	//const tokenAddress = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'

	// AAVE (depositTo)
	const controlledTokenAddress = '0x341d1f30e77D3FBfbD43D17183E2acb9dF25574E'

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

	useEffect(() => {
		const init = async () => {
			if (!signer) return

			const address = await signer.getAddress()

			const balance = await erc20Contract.balanceOf(address)
			setDeposited(ethers.utils.formatEther(balance))
		}

		init()
	}, [signer])

	const withdraw = async () => {
		const address = await signer.getAddress()
		if (!address) return

		// This should be dispatched on
		const withdrawTx = await wooyPoolContract.withdrawInstantlyFrom(
			address,
			ethers.utils.parseUnits(amount.toString(), 18),
			tokenAddress,
			ethers.utils.parseEther('0'),
			percentage,
			{ gasLimit: 2000000 }
		)

		const wTx = await withdrawTx.wait()
		console.log(wTx)
	}

	return (
		<Layout>
			<div className="flex justify-center items-center gap-8 h-full w-full">
				<div className="bg-white h-full flex flex-col rounded-md py-12 px-8">
					<h1 className="text-black text-2xl">Withdraw!</h1>
					<p className="text-black">
						More networks and tokens coming soon!
					</p>
					{deposited && (
						<p className="font-bold mt-2">Max: {deposited}</p>
					)}
					<input
						type="text"
						placeholder="Enter Amount!"
						className="border-2 rounded-lg px-4 py-2 border-black mt-8"
						onChange={(e) => setAmount(e.target.value)}
					/>
					<p className="pt-8 text-2xl">
						Feeling generous? Donate more!
					</p>
					<p className="">
						If you prefer donate more percentage or the full amount
						you'll withdraw to the NGO that benefits from our
						current active pool.
					</p>
					<Box className="py-4">
						<Slider
							aria-label="Restricted values"
							defaultValue={25}
							step={null}
							valueLabelDisplay="auto"
							onChange={(e) => setPercentage(e.target.value)}
							marks={[
								{
									value: 0,
									label: '0%',
								},
								{
									value: 25,
									label: '25%',
								},
								{
									value: 50,
									label: '50%',
								},
								{
									value: 75,
									label: '75%',
								},
								{
									value: 100,
									label: '100%',
								},
							]}
						/>
					</Box>

					<button
						onClick={() => withdraw()}
						className="mt-4 lg:px-16 px-8 py-2 bg-[#ED652B] rounded-md hover:shadow-2xl hover:bg-[#fd692a] transition-all"
					>
						WITHDRAW
					</button>
				</div>
			</div>
		</Layout>
	)
}

export default withdraw
