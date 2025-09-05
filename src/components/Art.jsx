import React from 'react'
import {goodLists} from "../../constants/index.js";

const Art = () => {
    return (
        <div id="art">
            <div className="container mx-auto h-full pt-20">
                <h2 className="will-fade">The Art</h2>

                <div className="content">
                    <ul className="space-y-4 will-fade">
                        {goodLists.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                             <img src="/images/check.png" alt="check" />
                                <p></p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Art;