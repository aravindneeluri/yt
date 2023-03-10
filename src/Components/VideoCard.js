import React from 'react'


const VideoCard = ({ info }) => {
    if (info) {

        const { snippet, statistics } = info;
        if (snippet){
        const { channelTitle, thumbnails, title } = snippet
        console.log(snippet);
        return (
            <div className='p-2 m-2 w-52 shadow-lg'>
                <img className='rounded-lg' alt='video' src={thumbnails.medium.url} />
                <ul>
                    <li className='font-semibold'>{title}</li>
                    <li>{channelTitle}</li>
                    <li>{Math.round((statistics.viewCount)/100000)} Lakhs views</li>
                </ul>
            </div>
        )}
    }
}

export default VideoCard