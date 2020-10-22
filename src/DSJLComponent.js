import React from 'react'
import { useStyle } from './hooks'

const Line = ({style}) => {
    
    return (
      <div style = {style}>
      </div>
    )
}

const DSJLComponent = ({scale, w, h, onClick}) => {
    const { 
      getLineStyle,
      getBarFillStyle 
    } = useStyle(w, h, scale)
    return (
        <div>
            <button onClick = {onClick}>start</button>
            {[0, 1].map(i => <Line key = {`line_${i}`} style = {getLineStyle(i)}/>)}
            <div style = {getBarFillStyle()}>
            </div>
        </div>
    )
}
export default DSJLComponent 