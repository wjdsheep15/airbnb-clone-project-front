import ItemCardView from '@/components/itemCardView/itemCardView'

const list = [
  {
    id: 1,
    images: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-54283684/original/5283e5f3-f75e-4b52-8b20-ab1dc01f7cf6.png?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-54283684/original/666d410d-6e3f-4801-91fd-4fb1afe5f7d3.png?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-54283684/original/ba01a6af-2f73-4732-85cf-76eb1f2c3a05.png?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-54283684/original/2b37bfd0-8af5-4cb7-9452-ea240297bbb7.png?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-54283684/original/145c26b8-ca6f-4835-992c-ea98e36ee2d8.png?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-54283684/original/fcde3ed0-6d75-4514-b38c-e3f7ab394823.png?im_w=720',
    ],
    name: '안락함을 주는 우디한 객실과 대형 야외수영장은 덤 !_모닝스파펜션_08_세이지',
    introduction: 'Buk-myeon, Gapyeong-gun, 한국의 펜션',
    description: [
      '가평의 푸르른 자연과 함께하는 공간',
      '안락함을 주는 우디한 객실과',
      '워터파크를 연상케하는 대형 야외 수영장까지 !',
      '사랑하는 사람과 즐겁고 편안한 시간 되세요 :)',
      '[가평 모닝 스파펜션]의 [세이지]객실 입니다.',
    ],
    host: {
      name: 'Tripeleven',
      profileImageUrl:
        'https://a0.muscache.com/im/pictures/user/ad6e3832-6352-4927-9eae-f5da8c33347b.jpg?im_w=240',
      isAuth: true,
      responseRate: 15,
      responseTime: 'normal',
    },
    price: '75,000',
    roomDetail: {
      bedroomCount: 1,
      bedCount: 1,
      bathroomCount: 1,
    },
    guestPreference: false,
    guestCapacity: 3,
    comforts: ['주방', '무선 와이파이', '업무 전용 공간', '공용 수영장'],
    checkIn: '오후 3:00 ~ 오후 10:00',
    checkOut: '오전 11시 전까지',
  },
  {
    id: 2,
    images: [
      'https://a0.muscache.com/im/pictures/2d1a28a3-212b-442c-8eb6-caaf2b1dfa82.jpg?im_w=1200',
      'https://a0.muscache.com/im/pictures/ba23384d-4e10-405b-9271-b5f0363071d0.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/5b9083c0-854b-4968-96ae-5d4110388ce6.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/a4a5e030-3386-49f0-9490-19bd5b698d49.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/78695e33-5684-4df5-9bb3-09e07b4536c8.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/cb074feb-861e-4598-bc4e-4a7959eebaeb.jpg?im_w=1200',
    ],
    name: "앉아만 있어도 힐링되는 용담한옥에서 쉬었다가세요! '여주 용담한옥'",
    introduction: 'Sanbuk-myeon, Yeoju-gun, 한국의 통나무집 전체',
    description: [
      '가평의 푸르른 자연과 함께하는 공간',
      '안락함을 주는 우디한 객실과',
      '워터파크를 연상케하는 대형 야외 수영장까지!',
      '사랑하는 사람과 즐겁고 편안한 시간 되세요 :)',
      '[가평 모닝 스파펜션]의 [세이지]객실 입니다.',
    ],
    host: {
      name: '은철',
      profileImageUrl:
        'https://a0.muscache.com/im/pictures/user/8309f1fc-f8ad-4c7f-858a-491fa4c16251.jpg?im_w=240',
      isAuth: true,
      responseRate: 15,
      responseTime: 'normal',
    },
    price: '346,000',
    roomDetail: {
      bedroomCount: 3,
      bedCount: 1,
      bathroomCount: 2,
    },
    guestPreference: true,
    guestCapacity: 12,
    comforts: ['산 전망', '무선 인터넷', '주방', '반려동물 입실 가능', '건조기'],
    checkIn: '오후 3시 이후',
    checkOut: '오전 11시 전까지',
  },
]

export default function ItemCardViewGrid() {
  const itemsMap = list.map((itemIndex) => {
    return (
      <ItemCardView
        key={itemIndex.id}
        slides={itemIndex.images}
        id={itemIndex.id}
        host={itemIndex.host.name}
        guestPreference={itemIndex.guestPreference}
        price={itemIndex.price}
        introduction={itemIndex.introduction}
      />
    )
  })
  return <div className='w-11/12 h-full grid gap-x-[24px] gap-y-10 grid-cols-5'>{itemsMap}</div>
}
