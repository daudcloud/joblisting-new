import Head from 'next/head'
import Image from 'next/image'
import {Header} from './style'

export default function Layout({children}) {
    return (
        <>
        <Head>
            <title>Job Listing</title>
        </Head>
            <Header>
                <img className="desktop" src="/images/bg-header-desktop.svg" alt="bg-desktop" />
                <img className="mobile" src="/images/bg-header-mobile.svg" alt="bg-mobile" />
            </Header>
            <main>
                {children}
            </main>
        </>
    )
}
