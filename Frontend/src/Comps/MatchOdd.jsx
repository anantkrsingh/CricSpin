import React from 'react'

export const MatchOdd = ({ item }) => {
    const dateTime = new Date(item.subdate);
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;
    return (
        <div className='text-sm items-center bg-white flex rounded-sm m-2 p-2'>
            <p>{item.Score}</p>
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
            <p className='ml-2'>{item.MrateA}</p>
            <p className='ml-2'>{item.MrateB}</p>
        </div>
    )
}
