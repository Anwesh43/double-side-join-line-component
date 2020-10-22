import React from 'react'
import DSLJComponent from './DSJLComponent'
import {
    useAnimatedScale, 
    useDimension
} from './hooks'

const DoubleSideLineJoin = (props) => {
    const {scale, start} = useAnimatedScale(0.01, 20)
    const {w, h} = useDimension()
    return <div>
        <DSLJComponent w = {w} scale = {scale} h = {h} onClick = {start}></DSLJComponent>
    </div>
}
export default DoubleSideLineJoin