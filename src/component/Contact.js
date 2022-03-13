import React from 'react'
import img from './images/download.jpg'


export default function Contact() {


    return (
        <div id="section_3">
            <div className="display-2 mb-4">
                contact me
              </div>
            <img src={img} alt="" />
            <ul>
                <li className="mt-5 mb-2"><i className="fa-solid fa-location-dot text-success"></i>A-1/430, Madhu Vihar, Dwarak Sec.3, New Delhi</li>
                <li className="my-3"><i className="fa-solid fa-phone text-success"></i>9958696232</li>
                <li className="my-3"><i className="fa-solid fa-envelope text-success"></i>puniamohit.13@gmail.com</li>
            </ul>
        </div>
    )
}

