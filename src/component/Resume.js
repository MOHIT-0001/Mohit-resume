import React from 'react'

export default function Resume() {
    return (
        <div id="section_5">
            <div className="display-2">resume</div>
            <div className="mb-2">
                <h1 className="mt-5">skills</h1>
                <div className="mt-4">
                    <h4>HTML</h4>
                    <div className="progress " style={{ height: "10px" }}>
                        <div className="progress-bar bg-success " role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="mt-2">
                    <h4>CSS</h4>
                    <div className="progress " style={{ height: "10px" }}>
                        <div className="progress-bar bg-success " role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="mt-2">
                    <h4>JavaScript</h4>
                    <div className="progress " style={{ height: "10px" }}>
                        <div className="progress-bar bg-success " role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="mt-2">
                    <h4>React</h4>
                    <div className="progress " style={{ height: "10px" }}>
                        <div className="progress-bar bg-success " role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h1>education</h1>
                <div className="mt-4">
                    <h4 className="text-success">bachelors</h4>
                    <div>BSc. (Mathematics)</div>
                    <div>NorthCap Universtiy, Gurugram</div>
                    <small className="text-muted "> 2015 - 2018, 8.46 CGPA</small>
                </div>
                <div className="mt-4">
                    <h4 className="text-success">diploma</h4>
                    <div>ETE, Elementary Teacher Education</div>
                    <div>Maharaja Surajmal Institute, Guru Gobind
                          Singh Indraprastha University (GGSIPU)</div>
                          <small className="text-muted">2012 - 2014, 66%</small>
                </div>
                <div className="mt-4">
                    <h4 className="text-success">high school</h4>
                    <div>Vishwa Bharati Public School, Dwarka sector
                      6, CBSE Board</div>
                      <small className="text-muted">2010 - 2012, 78%</small>

                </div>

            </div>
        </div>
    )
}

