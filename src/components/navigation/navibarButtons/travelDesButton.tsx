import * as React from 'react'
import Image from 'next/image'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import RegionButton from '@/components/navigation/navibarButtons/travelDesRegioin'

interface Props {
  setIsTravelDesOpen: (newValue: string) => void
  TravelDes: string
}

export default function travelDesButton({ setIsTravelDesOpen, TravelDes }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleButtonClick = (region: string) => {
    setIsTravelDesOpen(region)
  }
  return (
    <div>
      <span
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {TravelDes}
      </span>
      <Menu
        className='mt-11'
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '.MuiPaper-root': {
            borderRadius: 3,
            boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.1)',
          },
          '.MuiMenuItem-root': {
            minHeight: '500px',
            minWidth: '470px',
          },
        }}
      >
        <MenuItem
          className='text-sm'
          onClick={handleClose}
          sx={{
            '&.MuiListItem-root:hover': {
              backgroundColor: 'white', // 원하는 색상으로 변경
            },
          }}
        >
          <div className='relative flex-col top-[30px]'>
            {/*지역으로 검색하기 + 지도 사진 */}
            <section>
              <div className='relative bottom-[60px] right-[-20px] font-bold'>
                지역으로 검색하기
              </div>
              <div className='relative flex bottom-[35px] right-[10px]'>
                {/**지도 사진1 */}
                <div className='relative flex-auto w-35 right-[-30px] '>
                  <figure className='max-w-lg '>
                    <Image
                      className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                      src='/images/travelDesImg/ElasticSearch.jpg'
                      alt='image description'
                      width={90}
                      height={90}
                    />
                    <figcaption className='mt-2 mr-10 text-center '>유연한 검색</figcaption>
                  </figure>
                </div>
                {/**지도 사진2 */}
                <div className='relative flex-auto w-35 right-[-15px]'>
                  <figure className='max-w-lg '>
                    <Image
                      className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                      src='/images/travelDesImg/Europe.jpg'
                      alt='image description'
                      width={90}
                      height={90}
                    />
                    <figcaption className='mt-2 mr-10 text-center '>유럽</figcaption>
                  </figure>
                </div>
                {/**지도 사진3 */}
                <div className='relative flex-auto w-35 right-[-25px]'>
                  <figure className='max-w-lg '>
                    <Image
                      className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                      src='/images/travelDesImg/Japan.jpg'
                      alt='image description'
                      width={90}
                      height={90}
                    />
                    <figcaption className='mt-2 mr-10 text-center '>일본</figcaption>
                  </figure>
                </div>
                {/**지도 사진4 */}
                <div className='relative flex-auto w-35 right-[-35px]'>
                  <figure className='max-w-lg '>
                    <Image
                      className='h-auto max-w-full rounded-2xl border border-gray hover:border-black'
                      src='/images/travelDesImg/EastSouthAsia.jpg'
                      alt='image description'
                      width={90}
                      height={90}
                    />
                    <figcaption className='mt-2 mr-6 text-center '> 동남아시아</figcaption>
                  </figure>
                </div>
              </div>
            </section>
            {/*한국 + 지역버튼 */}
            <section>
              <div className='relative  right-[-20px] font-bold'>한국</div>
              <div className='flex-col'>
                <div className='flex'>
                  {/* 첫번째 행 버튼 */}
                  <button
                    type='button'
                    className='rounded-3xl text-sm  text-center mt-4 border hover:border-black'
                    style={{ width: '90px', height: '40px' }}
                    onClick={() => handleButtonClick('서울')}
                  >
                    서울
                  </button>
                  <RegionButton Region='부산' onClick={handleButtonClick} />
                  <RegionButton Region='속초' onClick={handleButtonClick} />
                  <RegionButton Region='강릉' onClick={handleButtonClick} />
                </div>
                <div className='flex'>
                  {/* 두번째 행 버튼 */}
                  <button
                    type='button'
                    className='rounded-3xl text-sm text-center mt-4 border hover:border-black'
                    style={{ width: '90px', height: '40px' }}
                    onClick={() => handleButtonClick('전주')}
                  >
                    전주
                  </button>
                  <RegionButton Region='대구' onClick={handleButtonClick} />
                  <RegionButton Region='경주' onClick={handleButtonClick} />
                  <RegionButton Region='강릉' onClick={handleButtonClick} />
                </div>
                <div className='flex'>
                  {/* 세번째 행 버튼 */}
                  <button
                    type='button'
                    className='rounded-3xl text-sm text-center mt-4 border hover:border-black'
                    style={{ width: '90px', height: '40px' }}
                    onClick={() => handleButtonClick('서귀포')}
                  >
                    서귀포
                  </button>

                  <RegionButton Region='대전' onClick={handleButtonClick} />
                  <RegionButton Region='제주도' onClick={handleButtonClick} />
                  <RegionButton Region='인천' onClick={handleButtonClick} />
                </div>
              </div>
            </section>
          </div>
        </MenuItem>
      </Menu>
    </div>
  )
}
