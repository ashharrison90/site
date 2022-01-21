import Link from 'next/link'
import Highlighter from 'react-highlight-words'
import styles from './PostCard.module.scss'

export interface Props {
  coverImage: string
  date: string
  excerpt: string
  searchString?: string
  slug: string
  tags: Array<string>
  title: string
}

export default function PostCard({
  coverImage,
  date,
  excerpt,
  searchString,
  slug,
  tags,
  title,
}: Props) {
  return (
    <Link as={`/posts/${slug}`} href='/posts/[slug]'>
      <a
        aria-label={title}
        data-testid='PostCard'
        className={styles.card}
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className={styles.dateContainer}>
          <div className={styles.date}>
            {new Date(date).toLocaleDateString(undefined, {
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <Highlighter
              searchWords={searchString?.split(' ') ?? []}
              textToHighlight={title}
            />
          </div>
          <div className={styles.excerpt}>
            <Highlighter
              searchWords={searchString?.split(' ') ?? []}
              textToHighlight={excerpt}
            />
          </div>
          <div className={styles.tags}>
            <Highlighter
              searchWords={searchString?.split(' ') ?? []}
              textToHighlight={tags.map((tag) => `#${tag}`).join(' ')}
            />
          </div>
        </div>
      </a>
    </Link>
  )
}
