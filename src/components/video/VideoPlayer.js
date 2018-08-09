import React, { Component } from 'react';
import PlatformChooser from './PlatformChooser';
import { VIDEO_URL_SENT, VIDEO_URL } from '../../Events';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            url: null
        };
    }
    
    sendUrl = (url) => {
        const { socket } = this.props;
        socket.emit(VIDEO_URL_SENT, {url});
    }

    setVideo = () => {

    }
    
    render() {
        const { user, logout } = this.props;
        return (
            <div className="watch-with-friends">
                <h1 className="header">Gerry and Annie hug</h1>
                <VideoUrl sendUrl = {
                    (url) => {
                        this.sendUrl(url);
                    }
                }/>
                <div className="player">
                    <PlatformChooser user={user} logout={logout}/>
                </div>
                

            </div>
        );
    }
}

export default VideoPlayer;