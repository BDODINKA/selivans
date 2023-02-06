import Head from 'next/head'
import React from "react";
import style from '../styles/Home.module.scss'
import Header from "@/components/common/header/Header";
import Wrapper from "@/components/common/wrapper";
import headerStyle from './../styles/components/header.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Silevans</title>
                <meta name="description" content="Silevans Web-Studio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={style.main}>
                <Wrapper className={headerStyle.wrapper}><Header isMainPage={true}
                                                                 currentPage={"Разработка сайтов"}/></Wrapper>
            </main>
        </>
    )
}
