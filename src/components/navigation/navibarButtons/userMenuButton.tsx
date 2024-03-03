'use client'

import MenuIcon from '/public/images/naviBarIcon/menuIcon.svg'
import UserIcon from '/public/images/naviBarIcon/UserIcon.svg'

import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export default function UserMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <button
        className={`ml-2 h-[48px] w-[86px] items-center flex flex-row border border-gray-300 rounded-full text-black ${open ? 'shadow-xl' : ''} hover:shadow-lg`}
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon className='ml-3 mr-3' />
        <div className='w-8 h-8'>
          <UserIcon className='w-8 h-8' />
        </div>
      </button>
      <Menu
        className='mt-2'
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '.MuiPaper-root': {
            borderRadius: 3,
            boxShadow: '0px 3px 5px 2px rgba(0, 0, 0, 0.1)', // 이 부분을 추가합니다.
          },
        }}
      >
        <MenuItem onClick={handleClose}>회원 가입</MenuItem>
        <MenuItem onClick={handleClose}>로그인</MenuItem>
        <hr />
        <MenuItem className='pt-3' onClick={handleClose}>
          당신의 공간을 에어비앤비 하세요
        </MenuItem>
        <MenuItem onClick={handleClose}>도움말 센터</MenuItem>
      </Menu>
    </div>
  )
}
