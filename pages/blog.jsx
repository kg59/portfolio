import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from '@/.contentlayer/generated'
import Layout from '@/layouts/Default/Default'
import Title from '@/components/Hero/Title'


function PostCard(post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <Layout content={
    <div className="mx-auto max-w-xl py-8">
      <Title name="Blog"/>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
    }/>
  )
}