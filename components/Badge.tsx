'use client'
import CountUp from 'react-countup'

export default function Badge({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}: {
  containerStyles: string
  icon: React.ReactNode
  endCountNum: number
  endCountText?: string
  badgeText: string
}) {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className='text-3xl text-primary'>{icon}</div>
      <div className='flex items-center gap-x-2'>
        <div className='text-4xl font-bold leading-none text-primary'>
          <CountUp end={endCountNum} delay={1} />
          {endCountText}
        </div>
        <div className='max-w-[70px] text-[15px] font-medium leading-none text-black'>{badgeText}</div>
      </div>
    </div>
  )
}
