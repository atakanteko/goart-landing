import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>GoArt Landing Page</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}