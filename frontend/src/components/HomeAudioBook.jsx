import React from 'react'
import CustomImage from './CustomImage'

const HomeAudioBook = () => {

    const mockAudiobook = {
        "audiobooks": [
            {
                "id": 1,
                "name": "The Great Adventure (Audiobook)",
                "link": "https://example.com/audiobook1.mp3",
                "imageUrl": "https://example.com/audiobook1-image.jpg"
            },
            {
                "id": 2,
                "name": "Mystery of the Lost City (Audiobook)",
                "link": "https://example.com/audiobook2.mp3",
                "imageUrl": "https://example.com/audiobook2-image.jpg"
            },
            {
                "id": 3,
                "name": "Science for the Curious Mind (Audiobook)",
                "link": "https://example.com/audiobook3.mp3",
                "imageUrl": "https://example.com/audiobook3-image.jpg"
            },
            {
                "id": 4,
                "name": "Cooking Made Simple (Audiobook)",
                "link": "https://example.com/audiobook4.mp3",
                "imageUrl": "https://example.com/audiobook4-image.jpg"
            },
            {
                "id": 5,
                "name": "Journey Through Time (Audiobook)",
                "link": "https://example.com/audiobook5.mp3",
                "imageUrl": "https://example.com/audiobook5-image.jpg"
            },
            {
                "id": 6,
                "name": "The Hidden Truth (Audiobook)",
                "link": "https://example.com/audiobook6.mp3",
                "imageUrl": "https://example.com/audiobook6-image.jpg"
            }
        ]
    }
    return (
        <div className='flex flex-col justify-center my-[2%]'>
            <div className="font-garamond text-5xl py-[2%]">
                <span>Latest Audiobook</span>
            </div>

            <div className='grid grid-cols-4'>
                {mockAudiobook.audiobooks.map((audiobook) => {
                    return(
                        
                    <div key={audiobook.id}>
                        <div className='flex flex-col gap-y-1 text-left py-3'>
                            <div>
                                <CustomImage name='audioBook1' />
                            </div>
                            <div className='text-sm py-1'>{audiobook?.name}</div>
                            <div className='text-indigo text-xs flex flex-row items-center gap-1 '>
                                <div className='w-4 h-4'>
                                    <CustomImage name='playIcon' />
                                </div>
                                Listen Now</div>
                        </div>
                    </div>
                )})}
            </div>

        </div>
    )
}
HomeAudioBook.prototype = {
}



export default HomeAudioBook