import Link from "next/link";
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h2>Hello, my name is Victor. I'm from Russia.</h2>
    </Layout>
  )
}