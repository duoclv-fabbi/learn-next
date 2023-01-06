import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';
import Link from 'next/link'

export interface PostPageProps {
    posts: any[]
}

export default function PostPage ({posts}: PostPageProps) {
    const [newPost, setNewPost] = React.useState(() => posts)
    
    // React.useEffect(() => {
    //     console.log('runnnnnnnn')
    //     setNewPost([])
    // }, [])
    console.log('posts', posts)
  return (
    <div>
        <h1>List posts</h1>
      <ul>
        {
            newPost.map(item => 
                <li key={item.id}>
                    <Link href={`/posts/${item.id}`}>
                        { item.title }
                    </Link>
                </li>)
        }
      </ul>
    </div>
  );
}


export const getStaticProps: GetStaticProps<PostPageProps> = async (context : GetStaticPropsContext) => {
    console.log('static props')
    const res = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1').then((response) => response.json()) || []
    // console.log('res', res)
    return{
        props: {
            posts: res.data
        }
    }
}