import React from 'react'

export const MatchOdd = ({ item }) => {
    const dateTime = new Date(item.subdate);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
    return (
        <div className='text-sm items-center bg-white flex rounded-sm m-2 p-2'>
            <div className='flex justify-between flex-row'>

                <div className='flex '>
                    <p className='bg-gray-200 px-2 py-2 rounded-md font-bold text-gray-900'>{item.Score}</p>
                    <div className='flex ml-4 items-center flex-col'>
                        <p>{item.overs}</p>
                        <div className='bg-gray-800 w-4 h-[1px]'></div>
                        <p>{formattedTime}</p>
                    </div>

                    <div className='h-8 w-[1px] bg-gray-500 ml-2'>

                    </div>
                    <div className='flex ml-2 items-center flex-col'>
                        <p>{item.SessionA}</p>
                        <div className='bg-gray-800 w-4 h-[1px]'></div>
                        <p>{item.SessionB}</p>
                    </div>
                    <p className='ml-2'>{item.favourite}</p>
                </div>
                <div className='flex'>
                    <p className='px-2 font-bold py-1 mx-2 bg-red-100 text-red-800 rounded-lg'>{item.MrateA}</p>
                    <p className='px-2 font-bold py-1 bg-green-100  text-green-800 rounded-lg'>{item.MrateB}</p>
                </div>
            </div>


        </div>
    )
}
