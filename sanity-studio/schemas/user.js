export default {
  title: 'User', // Sanity Studio에서 볼 타이틀: User
  name: 'user', // 모델의 이름: user
  type: 'document', // 데이터 타입: document
  fields: [
    // 데이터 필드(데이터 타입 정의)
    {
      title: 'Username', // 데이터 필드 제목: 'Username' => Sanity Studio에서 볼 이름
      name: 'username', // 데이터상(BE)에 접근할 때 사용할 이름: username => 코드상 key 라고 볼 수 있다
      type: 'string', // username의 데이터 타입: string
    },
    // 여기에서 username은 userid와 비슷하고, 아래 name은 user의 실제 이름(혹은 닉네임)을 의미함
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'post',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
}
