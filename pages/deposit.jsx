import React from 'react'
import Layout from '../components/Layout'
const deposit = () => {
  return (
  <Layout>
    <div className='flex justify-center items-center gap-8 h-full w-full'>
        <div className='bg-white h-full flex flex-col justify-center items-center rounded-md py-4 px-8'>
            <img src={'/poollarge.png'} className="rounded-full h-8" alt="" />
            <h1 className='text-black'>Deposit USDC on Polygon</h1>
            <p className='text-black'>More networks and tokens coming soon!</p>
            <input type="text" className='' name="" id="" />
            <button className="mt-4 lg:px-16 px-8 py-2 bg-[#ED652B] rounded-md hover:shadow-2xl hover:bg-[#fd692a] transition-all">
                CONTINUE
            </button>
            <p className='text-black'>
                You'll nee to approve this transaction on your wallet first.
            </p>
        </div>
        <div className='bg-white h-full flex flex-col justify-center items-center rounded-md py-4 px-8'>
            <img src={'/poollarge.png'} className="rounded-full h-8" alt="" />
            <h1 className='text-black'>Withdraw USDC on Polygon</h1>
            <p className='text-black'>More networks and tokens coming soon!</p>
            <input type="text" className='' name="" id="" />
            <button className="mt-4 lg:px-16 px-8 py-2 bg-[#ED652B] rounded-md hover:shadow-2xl hover:bg-[#fd692a] transition-all">
                CONTINUE
            </button>
            <p className='text-black'>
                You'll nee to approve this transaction on your wallet first.
            </p>
        </div>

    </div>
  </Layout>
  )
}

export default deposit