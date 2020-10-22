import {
  useEffect,
  useState 
} from 'react'

import {
  divideScale, 
  sinify
} from './utils'
export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                var currScale = scale 
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap 
                    setScale(currScale)
                    if (currScale > 1) { 
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const position = 'absolute'
    const size = Math.min(w, h) / 12 
    const y = h - size
    const dx = w - size 
    const background = 'green'
    const hFactor = 60 
    const lineH = Math.min(w, h) / hFactor 
    return {
        
        getLineStyle(i) {
            const left = `${(w - size) * (1 - sf1) * i}px`
            const width = `${size + (w - size) * sf1}px`
            const height = `${lineH}px`
            const top = `${y + (size - lineH) * i}px`
            return {position, background,left, top, left, width, height}
        },

        getBarFillStyle() {
            const barW = w * sf2
            const width = `${barW}px`
            const height = `${size}px`
            const left = `${w / 2 - barW / 2}px`
            const top = `${h - size}px`
            return {position, background, left, top, width, height}
        }
    }
}
