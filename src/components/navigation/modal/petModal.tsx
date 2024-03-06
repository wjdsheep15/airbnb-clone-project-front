import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import CloseIcon from '/public/svgIcons/CloseIcon.svg'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  petModelOpen: boolean
  closeModalHandler: () => void
}

export default function PetModal({ petModelOpen, closeModalHandler }: Props) {
  return (
    <Modal
      open={petModelOpen}
      onClose={closeModalHandler}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box className='flex flex-col gap-5 absolute top-1/2 left-1/2 p-6 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border-black shadow-lg w-[568px] h-[670px]'>
        {/* 제목 + X버튼 영역 */}
        <div className=' relative w-[568px] flex flex-row'>
          <button className='justify-start border-none text-black' onClick={closeModalHandler}>
            <CloseIcon />
          </button>
        </div>
        {/* 이미지 */}
        <Image src='/images/helppet.jpeg' alt={'도우미 강아지'} width={520} height={442} />
        <span className='text-xl font-semibold w-full'>보조동물</span>
        <span>
          보조동물은 반려동물이 아니므로 여기에 추가할 필요가 없습니다.
          <br /> <br />
          정서적 지원 동물과 함께 여행하시나요? 에어비앤비{' '}
          <Link href={'https://www.airbnb.co.kr/help/article/1869'} className='underline'>
            접근성 정책
          </Link>
          을 확인해보세요
        </span>
      </Box>
    </Modal>
  )
}
