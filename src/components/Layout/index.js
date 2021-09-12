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
                <div className="desktop">
                    <Image layout="fill" src="/images/bg-header-desktop.svg" alt="bg-desktop" />
                </div>
                <div className="mobile">
                    <Image layout="fill" src="/images/bg-header-mobile.svg" alt="bg-mobile" />
                </div>
            </Header>
            <main>
                {children}
            </main>
        </>
    )
}
