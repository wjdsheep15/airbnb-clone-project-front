interface Props {
  Region: string
  onClick: (region: string) => void
}

export default function RegionButton({ Region, onClick }: Props) {
  const handleButtonClick = () => {
    onClick(Region)
  }

  return (
    <button
      type='button'
      className='rounded-3xl text-sm  text-center mt-4 ml-2 border hover:border-black'
      style={{ width: '90px', height: '40px' }}
      onClick={handleButtonClick}
    >
      {Region}
    </button>
  )
}
