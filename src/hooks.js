import {
  useEffect,
  useState 
} from 'react'

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
                    currScale += scGap * delay
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