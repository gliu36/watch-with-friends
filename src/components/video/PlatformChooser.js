import React, { Component } from 'react';
import YouTube from './platforms/YouTube';

class PlatformChooser extends Component {
    constructor(props) {
        super(props);
        
    }
    

    render() {
        const { user, logout } = this.props;

        return (
            <div className="youtube">
                <YouTube url={"https://www.youtube.com/watch?v=LTunhRVyREU"} />

                <div className="logout">
                    <button onClick={() => {logout()}}>Logout</button>
                </div>
            </div>
        );
    }
}

export default PlatformChooser;