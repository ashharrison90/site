import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'
import PostGrid from '../components/PostGrid/PostGrid'
import PostCard from '../components/PostCard/PostCard'
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.scss'

const ThemeToggle = dynamic(() => import('../components/ThemeToggle/ThemeToggle'), {
  ssr: false,
})

const test = () => {
  document.querySelector(`.${styles.content}`)?.scrollIntoView({
    behavior: 'smooth'
  });
}

export interface Props {
  allPosts: {
    title: string,
    date: string,
    author: {
      name: string,
      image: string
    },
    slug: string,
    coverImage: string
    excerpt: string
  }[]
  buildTimestamp: number
}

export default function Home({ allPosts, buildTimestamp }: Props) {
  return (
    <div className={styles.parallaxContainer}>
      <div className={styles.background} />
      <div className={styles.foreground}>
        <div className={styles.heroTitleContainer}>
          <h1 className={styles.heroTitle}>
            hi<br/>
            i'm ash
          </h1>
          <button className={styles.goToContent} onClick={test}>Scroll</button>
        </div>
        <div className={styles.content}>
          <Layout buildTimestamp={buildTimestamp}>
            <Head>
              <title>Create Next App</title>
              <meta name='description' content='Generated by create next app' />
              <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
              <h2>about</h2>
              <Link href='/about'>
                <button>About</button>
              </Link>
              <h2>posts</h2>
              <PostGrid>
                {
                  allPosts.map(post => (
                    <PostCard
                      key={post.slug}
                      coverImage={post.coverImage}
                      date={post.date}
                      excerpt={post.excerpt}
                      slug={post.slug}
                      title={post.title}
                    />
                  ))
                }
              </PostGrid>
              <Link href='/posts'>
                <button>View all posts</button>
              </Link>

              <ThemeToggle />
            </main>
          </Layout>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])
  
  return {
    props: {
      allPosts,
      buildTimestamp: Date.now()
    }
  }
}
