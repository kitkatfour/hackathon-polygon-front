import React from 'react'

const Timer = () => {
    return (
        <div className="flex justify-center items-center gap-2 mt-8">
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-2">
                    <p className="bg-[#e7e7e7] p-2 rounded-sm">
                        0
                    </p>
                    <p className="bg-[#e7e7e7] p-2 rounded-sm">
                        3
                    </p>
                </div>
                <p className="text-black font-semibold">DAY</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-2">
                    <p className="bg-[#e7e7e7] p-2 rounded-sm">
                        1
                    </p>
                    <p className="bg-[#e7e7e7] p-2 rounded-sm">
                        2
                    </p>
                </div>
                <p className="text-black font-semibold">HR</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-2">
                    <p className="bg-[#e7e7e7] p-2 rounded-sm">
                        0
                    </p>
                    <p className="bg-[#e7e7e7] p-2 rounded-sm">
                        9
                    </p>
                </div>
                <p className="text-black font-semibold">MIN</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex gap-2">
                    <p className="bg-[#e7e7e7] p-2 rounded-sm">
                        0
                    </p>
                    <p className="bg-[#e7e7e7] p-2 rounded-sm">
                        4
                    </p>
                </div>
                <p className="text-black font-semibold">SEC</p>
            </div>

        </div>
    )
}

export default Timer