import Error from '@/components/blocks/Error'
import s from '/styles/Technical.module.scss'
import Layout from '@/components/Layout'
import Head from 'next/head'

export default function errorPage () {
    return (
      <>
      <Head>
          <title>404</title>
      </Head>
      <Layout footerCut={true}>
        <main className={s.main}>
          <Error />
        </main>
      </Layout>
      </>
    )
}