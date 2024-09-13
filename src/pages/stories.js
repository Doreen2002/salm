import { useEffect, useState } from "react"


export default function Stories() {
   const stories = [1, 2,3, 4,5,6,7,8,9,10]

    return (
        <div class="stories-page-container">
            {stories.map((field, index)=>
            <div className="story-container">

            </div>
            )}
            
        </div>
    )
}