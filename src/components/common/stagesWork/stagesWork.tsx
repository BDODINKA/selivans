import React from 'react';
import style from '../../../styles/components/stagesWorks/stagesWorks.module.scss'

const StagesWork: React.FC<{ text: string, title: string, number: number }> = ({
                                                                                   text,
                                                                                   title,
                                                                                   number
                                                                               }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.numbersBlock}>
                <h2 className={style.number}>{number}</h2>
                <p className={style.subTitle}>{title}</p>
            </div>
            <div className={style.descriptionBlock}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.description}>{text}</p>
            </div>
        </div>
    );
};

export default StagesWork;