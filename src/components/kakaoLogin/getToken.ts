const KAKAO_API_KEY = process.env.NEXT_PUBLIC_API_KEY

{
  /* 카카오로 날리는 api
 - 여기 진입했다는 것은 앞에 쓴 api가 성공해서 아래와 같은 형태로 다시 카카오가 리다이렉트한 상황
 - http://localhost:3000/login?code=인가 코드 (매번 바뀌는 값임)*/
}

export const getToken = async () => {
  console.log('Aaron : ', window.location)
  const search = new URLSearchParams(window.location.search)
  const code = search.get('code')

  //만약 code 없으면 빈값 반환
  if (!code) {
    return {}
  }
  const param = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: KAKAO_API_KEY || '',
    redirect_uri: 'http://localhost:3000/kakaoLogin',
    code,
  })

  //code 값 있으면 카카오 요청해서 토큰값 받기
  const response = await fetch('https://kauth.kakao.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: param,
  })

  const result = await response.json()
  console.log(' ---- : ' + KAKAO_API_KEY + ' ------ : ', result)
  return result
}
