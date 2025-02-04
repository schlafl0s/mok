import s from '/styles/Home.module.scss'
import Link from 'next/link'

export default function Bread({ first, firstLink, second }) {
  return (
    <div className={s.bread}>
      <Link href="/" className={s.breadLink}>Главная</Link>
      {' | '}
      <Link href={firstLink} className={s.breadLink}>{first}</Link>
      {second && (
        <>
          {' | '}
          <span>{second}</span>
        </>
      )}
    </div>
  );
}
