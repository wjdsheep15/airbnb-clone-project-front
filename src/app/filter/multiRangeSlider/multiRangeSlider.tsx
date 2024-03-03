import { useState, useEffect, useRef, ChangeEvent } from 'react'

interface RangeSliderProps {
  initialMin: number
  initialMax: number
  min: number
  max: number
  step: number
  priceCap: number
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
}) => {
  const progressRef = useRef<HTMLDivElement>(null)
  const [minValue, setMinValue] = useState<number>(initialMin)
  const [maxValue, setMaxValue] = useState<number>(initialMax)

  const handleMin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (value < minValue || value > maxValue - priceCap) return
    setMinValue(value)
  }

  const handleMax = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (value > maxValue || value < minValue + priceCap) return
    setMaxValue(value)
  }

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = `${(minValue / max) * step}%`
      progressRef.current.style.right = `${step - (maxValue / max) * step}%`
    }
  }, [minValue, maxValue, max, step])

  return (
    <div className='flex flex-col w-96 bg-white shadow-xl rounded-lg px-6 py-4'>
      <div className='flex justify-between items-center my-6 '>
        <div className='rounded-md'>
          <span className='p-2 font-semibold'> Min</span>
          <input
            onChange={handleMin}
            value={minValue}
            className='w-24 rounded-md border border-gray-400'
          />
        </div>
        <div className='ml-2 font-semibold text-lg'> - </div>
        <div>
          <span className='p-2 font-semibold'> Max</span>
          <input
            onChange={handleMax}
            value={maxValue}
            className='w-24 rounded-md border border-gray-400'
          />
        </div>
      </div>

      <div className='mb-4'>
        <div className='slider relative h-1 rounded-md bg-gray-300'>
          <div className='progress absolute h-1 bg-green-300 rounded ' ref={progressRef}></div>
        </div>

        <div className='range-input relative  '>
          <input
            onChange={handleMin}
            type='range'
            min={min}
            step={step}
            max={max}
            value={minValue}
            className='range-min absolute w-full  -top-1  h-1   bg-transparent  appearance-none pointer-events-none'
          />

          <input
            onChange={handleMax}
            type='range'
            min={min}
            step={step}
            max={max}
            value={maxValue}
            className='range-max absolute w-full  -top-1 h-1  bg-transparent appearance-none  pointer-events-none'
          />
        </div>
      </div>
    </div>
  )
}

export default RangeSlider
