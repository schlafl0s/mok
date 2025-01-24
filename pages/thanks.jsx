import Thanks from '@/components/blocks/Thanks'
import s from '/styles/Technical.module.scss'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function ThanksPage () {
    return (
      <>
      <Head>
          <title>Спасибо</title>
      </Head>
      <Layout footerCut={true}>
        <main className={s.main}>
          <Thanks />
        </main>
      </Layout>
      </>
    )
}