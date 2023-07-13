export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author', // "누가" 포스트를 작성했는지
      name: 'author',
      type: 'reference', // 타입: 포스트를 작성한 유저를 "가리킨다" => 레퍼런스한다
      to: [{type: 'user'}], // "무엇을(=to)" 레퍼런스하나? 포스트를 작성한 "유저"
    },
    {
      title: 'Photo', // 작성할 때 사용한 "이미지(사진)"
      name: 'photo',
      type: 'image',
    },
    {
      title: 'Likes', // 유저의 "좋아요"
      name: 'likes',
      type: 'array', // 좋아요 누른 "유저(들)"??
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}], // "유저"를 "참조" 하는 "배열(type: 'array')" => 사용자의 id 배열
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Comments', // 포스트에 있는 "코멘트"
      name: 'comments',
      type: 'array', // 포스트에 있는 "코멘트(들)"??
      of: [
        {
          title: 'Comment', // Comment로 찾을 수 있는
          name: 'comment', // comment라는 이름의
          type: 'document', // "문서"
          fields: [
            // 문서의 필드는 2개가 있는데
            {
              title: 'Author', // "유저"가 있고,
              name: 'author',
              type: 'reference', // 그 유저는 "user를 참조"한다
              to: [{type: 'user'}],
            },
            {
              title: 'Comment', // "코멘트"가 있다
              name: 'comment',
              type: 'string', // 코멘트는 "문자열 string" 이다
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'comments.0.comment',
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo',
    },
    prepare(selection) {
      const {title, authorName, authorUsername, media} = selection
      return {
        title,
        subtitle: `by ${authorName} (${authorUsername})`,
        media,
      }
    },
  },
}
