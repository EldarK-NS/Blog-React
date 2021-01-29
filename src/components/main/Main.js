import React from 'react';
import './Main.css'
import Stories from './../stories/Stories';
import AddShortPost from './../add-short-post/AddShortPost';
import SmallPost from './../smallPost/SmallPost';
import TextPhotoPost from './../textPhotoPost/TextPhotoPost';
import TextPhotoPost2 from './../textPhotoPost2/TextPhotoPost2';
import VideoPost from './../videoPost/VideoPost';
import Pagination from './../pagination/Pagination';

class Main extends React.Component {
    render() {
        return (
            <>
                {/* <!--stories --> */}
                < Stories />
                {/* <!-- Add post block --> */}
                < AddShortPost />
                {/* <!-- /. small post --> */}
                < SmallPost />
                {/* <!-- Big text photo post --> */}
                < TextPhotoPost />
                {/* <!-- Video post --> */}
                < VideoPost />
                {/* <!-- Big text photo post --> */}
                < TextPhotoPost2 />
                {/* <!-- Navigation --> */}
                < Pagination />
            </>
        )
    }
}

export default Main;
