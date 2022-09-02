import React from "react";
import '/home/adi/react/video-player/src/style/styles.css';

const VideoListItems = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            
            <div className="video-list media">
                <img className="media-object" src={imageUrl}/>
            </div>

            <div className="media_body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>

        </li>
    );
};

export default VideoListItems;