import React from 'react'
import Slot from '@/components/slot'
import Layout from '@/components/Layout';

import style from '@/styles/HomePage.module.sass'
export default function slot() {
  return (
    <Layout>
        <div className={style.container}>
            <Slot />
        </div>
    </Layout>
  )
}


