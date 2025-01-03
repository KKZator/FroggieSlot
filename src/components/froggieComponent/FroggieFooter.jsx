import React from "react";
import style from '@/styles/FroggieFooter.module.sass'
import Image from "next/image";

let staff = [{
    img: '/Octicons-mark-github.svg'
},
{
    img: '/Octicons-mark-github.svg'
},
{
    img: '/Octicons-mark-github.svg'
},
{
    img: '/Octicons-mark-github.svg'
},
{
    img: '/Octicons-mark-github.svg'
}]
export default function FroggieFooter(){
    return(
        <div className={style.footerContainer}>
            <div>
            <Image src={'/frgst_logo_ext.svg'} width={200} height={50} alt="logo" />
            </div>
            <div>
                <p>
                    © 2023 Froggies | All Rights Reserved.
                </p>
            </div>
            <div className={style.staffz}>
                {
                    staff.map((staffM, index) => {
                        return(
                            <div key={index} className={`${style.staffMember} ${index != 0 ? style.border : null}`}>
                                <Image src={staffM.img} width={87} height={87} alt='staff'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}