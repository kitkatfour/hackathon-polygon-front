import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Timer from '../components/Timer'

const pool = () => {
	return (
		<Layout>
			<div className="flex p-8 flex-col">
				<div className='flex p-8'>
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
				<div className='flex flex-col'>
					<h3 className='text-[#ED652B] text-2xl'>
						What to expect ?
					</h3>
						<p className='text-white py-4'>
						<b>Ready to be parte of the most</b> prestigious tournament in
						the world?
						</p>
					<p className='text-white'> 
						Taking place quadrennially, the FIFA Men's World Cup T
						sees 32 nations compete against each other for the prize.
						With continental qualification pathways leading to an
						exciting finals event, it brings fans together around the
						passion and love for the game. The best part? you could
						be one of them!
						On top of this, you will have the opportunity to live a 7
						day-long experience at Qatar! Seize the trip with Desert
						Safari excursion with Camel Ride, Sand Boarding &
						Inland Sea Tour in Doha! You will be picked up from the
						5 star hotel in a cozy 4WD vehicle for the Doha Desert
						Safari. Our guide will drive you towards the desert terrain
						of Qatar. You will be having an incredible photo-stop at
						the coastal route adjacent to the Sealine Beach. Once
						you have enjoyed the photo session, hop onto a camel for
						experiencing a mesmerizing ride. The guide will adjust the
						tyre pressure in order to make your off-roading smooth.
						Feel the thrills of a rollercoaster ride as the vehicle
						conquers the huge sand dunes while dune bashing. Try
						out sandboarding by gliding across the sea of sand with a
						surfboard provided. After the desert adventures, move on
						to the scenic region of the Inland Sea at Khor Al Adaid.
						Have a photo-stop here at the shores of the Inland Sea
						and enjoy the breathtaking sights. You can see the border
						region of Saudi Arabia and behold the rare sceneries of
						land and sea. You will then be dropped off at the hotel.
						Sound crazy, right? And the craziest part: No donation or
						payment is necessary to enter or win this sweepstakes.
						Only by the stake of your tokens!
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default pool
