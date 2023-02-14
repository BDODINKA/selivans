import React from 'react';
import Head from "next/head";
import style from "@/styles/Home.module.scss";
import TopBlock from "@/components/common/topBlock/TopBlock";
import bgImage from "@/assets/svg/designBg.svg";

const Design: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>Design</title>
            </Head>
            <main className={style.main}>
                <TopBlock currentPage={"Веб-дизайн"}
                          serviceDescription={"— имидж и стиль. Грамотная концепция формирует первое впечатление. Это всегда требует больше внимания"}
                          backgroundImage={bgImage.src} button={"Заполнить анкету"}
                          buttonDescription={"Заполните анкету, чтобы получить бесплатную консультацию"}
                />
            </main>
        </>
    );
};

export default Design;