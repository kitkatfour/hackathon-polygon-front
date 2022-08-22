import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Timer from '../components/Timer'

const pool = () => {
	return (
		<Layout>
			<div className="flex p-8">
				<img src={'/poollarge.png'} className="h-64 mr-8" alt="" />
				<div className="flex flex-col">
					<h2 className="text-2xl text-white font-medium">
						{'Experience the world cup in Qatar'}
					</h2>
					<p className="text-[#ED652B]">X WEFOREST</p>
					<hr className="w-full mt-4" />
					<ul className="my-6">
						<li className="text-white">
							👉 Travel to Qatar and attend the World Cup 2022
						</li>
						<li className="text-white">
							👉 Spend a week at Qatar and have an unique
							experience
						</li>
						<li className="text-white">
							👉 Be part of the positive global impact by helping
							We forest
						</li>
					</ul>
					<p className="text-white">
						Win this once in a life time experience and be part of
						the world changing!
					</p>
					<Link href={'/deposit'}>
						<button className="mt-4 lg:px-16 px-8 py-2 bg-[#ED652B] rounded-md hover:shadow-2xl hover:bg-[#fd692a] transition-all">
							JOIN POOL
						</button>
					</Link>
					<hr className="divide-y divide-gray my-4" />
					<p className="text-white text-xl">This pool ends in: </p>
					<div className="bg-white rounded-md my-4">
						<Timer />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default pool
