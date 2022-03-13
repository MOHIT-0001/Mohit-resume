import React from 'react';
import image1 from './images/download(1).jpg'
import image2 from './images/download(2).jpg'
import image3 from './images/download(3).jpg'


export default function Works() {
    return (
        <div id="section_4">
            <div className="display-2 mb-4 ">
                my works
            </div>
            <div >
                <img src={image1} alt="" />
                <div className="text-success  mt-3 ">Task Manager</div>
                <div><small className="text-muted">using object constructor</small></div>
                <div><small className="text-muted"> Firebase Ajax request</small></div>
            </div>
            <div className="mt-5">
                <img src={image2} alt="" />
                <div className="text-success  my-3 "> Book my show page 1 Clone</div>
                <div><small className="text-muted">using HTML & CSS</small></div>
            </div>
            <div className="mt-5">
                <img src={image3} alt="" />
                <div className="text-success  my-3 ">Book my show page 2 Clone</div>
                <div><small className="text-muted">using HTML & CSS</small></div>

            </div>
        </div>

    )
}