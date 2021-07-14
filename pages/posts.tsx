import Head from 'next/head'
import { getAllPosts, PostMetadata } from '../lib/postsApi'
import PostGrid from '../components/PostGrid/PostGrid'
import PostCard from '../components/PostCard/PostCard'
import Search from '../components/Search/Search'
import Layout from '../components/Layout/Layout'
import EmptyState from '../components/EmptyState/EmptyState'
import styles from '../styles/Posts.module.scss'
import { useState } from 'react'

export interface Props {
  allPosts: PostMetadata[]
}

export default function Posts({ allPosts }: Props) {
  const [searchString, setSearchString] = useState('')

  const postFilter = (post: PostMetadata) => {
    return (
      post.title.toLowerCase().includes(searchString.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchString.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchString.toLowerCase())
      )
    )
  }

  const filteredPosts = allPosts.filter(postFilter)
  return (
    <Layout>
      <Head>
        <title>posts</title>
        <meta
          name='description'
          content='A dumping ground for thoughts from my brain.'
        />
      </Head>

      <h1>posts</h1>

      <p>
        Read my ramblings. I'm aiming for a post every couple of{' '}
        <del>weeks</del> <ins>months</ins>. Will it happen? No, probably not.
      </p>

      <div className={styles.searchContainer}>
        <Search
          className={styles.search}
          onChange={(evt) => setSearchString(evt.target.value)}
          placeholder='Search posts'
        />
      </div>
      <PostGrid className={styles.postGrid}>
        {filteredPosts.map((post) => (
          <PostCard
            key={post.slug}
            coverImage={post.coverImage}
            date={post.date}
            excerpt={post.excerpt}
            searchString={searchString}
            slug={post.slug}
            tags={post.tags}
            title={post.title}
          />
        ))}
      </PostGrid>
      {!filteredPosts.length && (
        <EmptyState className={styles.emptySearch} message='Nothing found' />
      )}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts()

  return {
    props: {
      allPosts,
    },
  }
}
