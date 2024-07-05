"use client"

import ReactPlayer from 'react-player/youtube'

export default function IntroVideo() {
    return (
        <div className='
            flex
            justify-center
            items-center
            mt-4
            mb-4
     '
            config={{ youtube: { playerVars: { disablekb: 1 } } }}
        >
            <ReactPlayer
                playing
                muted
                loop={true}

                width='90%'
                height='70vh'
                url='https://www.youtube.com/watch?v=l1kvg_srbKQ' />
        </div>
    )
}