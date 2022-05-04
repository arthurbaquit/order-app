import React from 'react';
import styles from '../../styles/Header.module.css'
import {HeaderCartButton} from "../UI/HeaderCartButton";
import Image from "next/image";

export const Header = ({onClickHandler}: {onClickHandler: ()=>void}) => {
    return (
        <>
            <div className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton title={'Your cart'} onClick={onClickHandler}/>
            </div>
            <div className={styles['main-image']}>
                <img
                     src={'/meals.jpg'} alt={'meals'}/>
            </div>
        </>
    )

}
