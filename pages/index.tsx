import Head from 'next/head'
import { useState, useEffect } from 'react'
import classnames from 'classnames'
import { getAllPosts, PostData } from '../lib/postsApi'
import PostGrid from '../components/PostGrid/PostGrid'
import PostCard from '../components/PostCard/PostCard'
import Layout from '../components/Layout/Layout'
import LinkButton from '../components/LinkButton/LinkButton'
import styles from '../styles/Home.module.scss'

export interface Props {
  allPosts: PostData[]
}

export default function Home({ allPosts }: Props) {
  const [pageLoaded, setPageLoaded] = useState(false)
  useEffect(() => {
    function handlePageLoad() {
      setPageLoaded(true)
    }
    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      window.addEventListener('load', handlePageLoad)
      return () => window.removeEventListener('load', handlePageLoad)
    }
  }, [])
  const backgroundContent = (
    <>
      <div
        data-testid='heroFallback'
        className={classnames(styles.fallback, {
          [styles.hide]: pageLoaded,
        })}
      />
      <div
        data-testid='heroBackground'
        className={classnames(styles.heroBackground, {
          [styles.hide]: !pageLoaded,
        })}
      />
      <div
        data-testid='heroCutout'
        className={classnames(styles.heroCutout, {
          [styles.hide]: !pageLoaded,
        })}
      />
    </>
  )

  const foregroundContent = (
    <div className={styles.heroTitleContainer}>
      <div>
        <h1 className={styles.line1}>hi</h1>
        <h1 className={styles.line2}>i'm ash</h1>
      </div>
    </div>
  )

  return (
    <Layout
      hideHeaderUntilScroll
      blurBackground={!pageLoaded}
      backgroundContent={backgroundContent}
      backgroundHeight={100}
      foregroundContent={foregroundContent}
    >
      <Head>
        <title>hi, i'm ash</title>
        <meta
          name='description'
          content='The personal site of Ashley Harrison.'
        />
      </Head>

      <main>
        <div className={styles.about}>
          <div>
            <h2>about</h2>
            <p>I'm a software engineer based in the UK.</p>
            <p>
              I specialize in all things frontend, with a focus on{' '}
              <strong>clean</strong>, <strong>testable</strong> and{' '}
              <strong>maintainable</strong> code.
            </p>
            <p>
              When I'm not typing on a keyboard, you can find me{' '}
              <s>typing on a keyboard</s> gaming, playing football and hanging
              out with friends. Gym or mountain biking if I'm feeling motivated.
              Music and films if I'm not.
            </p>
          </div>
          <LinkButton className={styles.aboutButton} href='about'>
            Learn more
          </LinkButton>
        </div>

        <div className={styles.posts}>
          <h2>posts</h2>
          <PostGrid className={styles.postGrid}>
            {allPosts.map((post) => (
              <PostCard
                key={post.slug}
                coverImage={post.coverImage}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                title={post.title}
              />
            ))}
          </PostGrid>
          <LinkButton className={styles.postsButton} href='posts'>
            View all posts
          </LinkButton>
        </div>
      </main>
    </Layout>
  )
}

export const getStaticProps = () => {
  const allPosts = getAllPosts(6)

  return {
    props: {
      allPosts,
    },
  }
}
