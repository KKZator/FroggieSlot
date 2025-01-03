import React from "react";
import style from '@/styles/FroggieNavbar.module.sass'
import Image from "next/image";
export default function FroggieNavbar(){
    return(
        <div className={style.navbarContainer}>
            <Image src={'/frgst_logo_ext.svg'} width={200} height={50} alt="logo" />
        </div>
       
    )
}