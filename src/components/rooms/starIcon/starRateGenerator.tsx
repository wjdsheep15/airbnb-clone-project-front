import EmptyStarIcon from '@/components/rooms/starIcon/empty-star'
import FullStarIcon from '@/components/rooms/starIcon/full-star'

export default function StarRateGenerator({ score }: { score: number }) {
  // score가 5보다 크면 에러 발생
  if (score > 5) {
    throw new Error('Score should be between 0 and 5 inclusive.')
  }

  const fullStarNumber = Math.floor(score)

  const starIcons = []

  for (let i = 0; i < fullStarNumber; i++) {
    starIcons.push(<FullStarIcon key={`full_${i}`} className='w-[9px] h-[9px] text-mainBlack' />)
  }

  if (score === 5) {
    return starIcons
  }

  for (let i = fullStarNumber; i < 5; i++) {
    starIcons.push(<EmptyStarIcon key={`full_${i}`} className='w-[9px] h-[9px] text-mainGray' />)
  }

  return starIcons
}
