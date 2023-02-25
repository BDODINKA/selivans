import React from 'react';
import Link from "next/link";
import * as Scroll from "react-scroll";
import {useRouter} from "next/router";
import Wrapper from "@/components/common/wrapper";
import LinkBtn from "@/components/common/buttons/LinkBtn";
import style from '../../../styles/components/header.module.scss'
import logo from '../../../assets/svg/Logo.svg'

const Header: React.FC<{ isMainPage: boolean, currentPage: string }> = ({isMainPage, currentPage}) => {

    const router = useRouter()

    const scrollToComponent = (target: string, offset: number) => {
        Scroll.scroller.scrollTo(target, {
            duration: 700,
            smooth: true,
            offset,
        })
    }

    const onServicesClickHandler = () => {
        router.push('/').then(() => {
            scrollToComponent('ourServices', 0)
        })
    }

    const onCallMeBackClickHandler = () => {
        if (currentPage === "Анкета" || currentPage === "Наши проекты") {
            router.push('/').then(() => {
                scrollToComponent('callMeBack', 250)
            })
        } else scrollToComponent('callMeBack', 0)
    }

    return (
        <Wrapper className={style.wrapper}>
            <header className={style.header}>
                <div className={style.row}>
                    <div className={style.logoBlock}>
                        <img src={logo.src} alt="silevans" width={180} height={31}/>
                    </div>

                    <div className={style.navBlock}>
                        <nav className={style.navLinks}>
                            <div className={style.servicesLink}><span
                                onClick={onServicesClickHandler}>Услуги</span>
                            </div>
                            <div className={style.portfolioLink}><Link href='/portfolio'>Портфолио</Link></div>
                        </nav>
                        <LinkBtn className={style.buttonCallback} onClick={onCallMeBackClickHandler}>Заказать
                            звонок</LinkBtn>

                    </div>
                </div>
                {!isMainPage && <span className={style.currentPage}>
                    <span className={style.mainPageLink} onClick={() => {
                        router.push('/')
                    }}>Главная</span> <span className={style.currentPageName}> &#8226; {currentPage}</span>
                </span>}
            </header>
        </Wrapper>
    );
};

export default Header;