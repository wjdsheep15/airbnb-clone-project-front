/**
 * 전체 내용을 가지는 컴포넌트
 */
export default function Screen({ children }: { children: React.ReactNode }) {
  return <div className='flex justify-center'>{children}</div>
}
