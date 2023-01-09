import * as React from 'react';
import { useRouter } from 'next/router'
import Header from '@/components/common/header'
import dynamic from 'next/dynamic'
import { MainLayout } from 'layout';


const HeaderComponent = dynamic(() => import('@/components/common/header'), {ssr: false})

export interface AboutPageProps {
}

export async function getServerSideProps() {
    return {
      props: {}, // will be passed to the page component as props
    }
  }

export default function AboutPage (props: AboutPageProps) {
    const router = useRouter()
    
    console.log('router.query', router.query)

  return (
    <div>
      <HeaderComponent />
    </div>
  );
}

AboutPage.layout = MainLayout
