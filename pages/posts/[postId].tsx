import * as React from 'react';
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'

export interface PostDetailPageProps {
    posts: any
}

export default function PostDetailPage ({ posts  }: PostDetailPageProps) {
    const router = useRouter()


  return (
    <div>
      <h1>Detail post</h1>
      <p> { posts.id } </p>
      <p> { posts.title } </p>
      <p> { posts.author } </p>
      <p> { posts.description } </p>
    </div>
  );
}

export const getStaticPaths : GetStaticPaths = async () => {
    let paths:any = []
    const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1').then((response) => response.json()) || []
    if (res) res.data.map((item:any) => paths.push({params: {postId: item.id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (context : GetStaticPropsContext) => {
    const res = await fetch(`https://js-post-api.herokuapp.com/api/posts/${context.params?.postId}`).then((response) => response.json()) || []
    // console.log('res', res)
    return{
        props: {
            posts: res
        }
    }
}