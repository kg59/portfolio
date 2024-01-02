import { useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { allPosts } from '@/.contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { useRouter } from 'next/router'


const generatePost= ({slug}) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)
  const Content = getMDXComponent(post.body.code)
  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1>{post.title}</h1>
      </div>
      <Content />
    </article>
  )
}

const PostLayout = () => {
  const router = useRouter()
  const { isReady, query } = router

  useEffect(() => {
    if (!isReady) return	  
  }, [isReady, query])

  return (
    !isReady ? <>Loading....</> : (generatePost(query))
  )
}

export default PostLayout
