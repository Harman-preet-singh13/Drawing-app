import React from 'react'
import Typography from '@mui/material/Typography';
import "./style.css"

export default function About() {
    return (
        <div>
            <Typography variant="h2" gutterBottom>
                <div className="Heading-about">
                    About
                </div>

            </Typography>
            <Typography variant="h5" gutterBottom>
                <br />
                <div className="about-page">
                    <div className="para1">

                        Give <span className="word-reality"> reality</span>  to your <span className="word-imagin">imagination</span> with a new <span className="word-whiteboard">Whiteboard application.</span>
                    </div>
                    <br />
                    Days of pen and paper is gone start the new way of making plan.

                    <div>
                        <br />
                        This app is useful in <span className="word-reality">making a plan or presenting your idea</span>. It is easy to use component that is useful for anybody.
                        <br />
                    </div>
                </div>
            </Typography>
            <div className="about-footer">
                <p>created by <a className="a-tag" href="https://www.harmanpreetsingh.me/" target="_blank">H2rmaN</a></p>
            </div>

        </div>
    )
}
