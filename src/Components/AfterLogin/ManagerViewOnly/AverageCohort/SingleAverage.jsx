import React from "react";
import './singleAverage.css'

const SingleAverage = ({cohort, id}) => {
    let backgroundcolor, textColor
    if(id % 2 === 0){
        backgroundcolor = "#3A455A"
        textColor = "white"

    } else{
        backgroundcolor = "#f0f0f0"
        textColor = "black"
    }

    return (
        <>
          <div className='column' key={cohort.id} style={{background: backgroundcolor, color: textColor}}>
                        <div className="side">
                            <div>{cohort.name}</div>
                        </div>
                        <div className="middle">
                            <div className="bar-container">
                                <div className={`bar`} style={{ width: `${cohort.average}%` }} ></div>
                            </div>
                        </div>
                        <div className="side-right">
                            {`${cohort.average}%`}
                        </div>
                    </div>
        </>
    )
}

export default SingleAverage