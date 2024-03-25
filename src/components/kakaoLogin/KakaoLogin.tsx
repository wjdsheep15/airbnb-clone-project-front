import { getToken } from '@/components/kakaoLogin/getToken'
import { useEffect } from 'react'
import Button from '@mui/material/Button'
import Image from 'next/image'
import { isNull } from 'lodash'

const KAKAO_API_KEY = process.env.NEXT_PUBLIC_API_KEY
const client_id = KAKAO_API_KEY || ''
const redirect_uri = 'http://localhost:3000/kakaoLogin'
const response_type = 'code'

interface KakaoLoginProps {
  KakaoLocation: string
}

// function KakaoLocation({ KakaoLocation }: KakaoLoginProps) {
//   return <div></div>
// }

export default function KakaoLogin({ KakaoLocation }: KakaoLoginProps) {
  useEffect(() => {
    console.log('Reloaded')
    console.log('1')
    const search = new URLSearchParams(window.location.search) //인가 코드 요청시 redirect로 받는 값 http://localhost:3000/login?code= 인가 코드 (매번 바뀌는 값임)
    console.log('1-2')
    const code = search.get('code') // code부분인 인가 코드 추츨
    console.log('1-3')
    const accessToken = localStorage.getItem('access_token')

    console.log('2')
    //카카오로부터 redirect 당한 경우 code가 들어있을 것이다!
    if (code && (!accessToken || accessToken === 'undefined')) {
      //post로 aouth/token 토큰 요청하는 부분
      console.log('2-2')
      handleGetToken()
    }
  }, []) //최초 진입시 발동 (1.실제 최초인 경우 2. 카카오로부터 redirect 당해서 진입한 경우)

  const handleGetToken = async () => {
    const { token_type, access_token, expires_token, refresh_token, refresh_token_expires_in } =
      await getToken()

    if (access_token) {
      localStorage.setItem('access_token', access_token)
      window.close()
    }
  }

  //authParam은 카카오에 인가코드 요청할 떄 필요한 파라미터 값임
  const authParam = new URLSearchParams({
    client_id,
    redirect_uri,
    response_type,
  })

  const handleLoginClick = () => {
    const authCodeUrl = `https://kauth.kakao.com/oauth/authorize?${authParam.toString()}`
    window.open(authCodeUrl, '_blank', 'popup=1, width=500,height=600,left=500,top=50')
  }

  return (
    <div className={`${KakaoLocation === '카카오 로그인' ? 'w-auto' : 'w-full'}`}>
      {KakaoLocation === '카카오 로그인' ? (
        <Button className='text-black text-sm font-bold w-full' onClick={handleLoginClick}>
          카카오로 로그인하기
        </Button>
      ) : (
        <p className='w-full' onClick={handleLoginClick}>
          {' '}
        </p>
      )}
    </div>
  )
}
