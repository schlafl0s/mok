import Error from '@/components/blocks/Error'
import s from '/styles/Technical.module.scss'
import Layout from '@/components/Layout'

export default function AboutUsPage () {
    return (
      <Layout footerCut={true}>
        <main className={s.main}>
          <Error />
        </main>
      </Layout>
    )
}