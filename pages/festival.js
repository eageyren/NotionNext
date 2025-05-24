import { getGlobalNotionData } from '@/lib/notion/getNotionData'
import { getPageTableOfContents } from '@/lib/notion/getPageTableOfContents'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { isBrowser } from '@/lib/utils'
import { getLayoutByTheme } from '@/themes/theme'
import FestivalPage from '@/themes/heo/components/FestivalPage'

const Festival = props => {
  const { theme } = props
  const router = useRouter()

  // 客户端跳转到指定路由
  useEffect(() => {
    if (isBrowser()) {
      const url = new URL(window.location.href)
      const newPath = url.pathname.replace('/festival', '/festival')
      if (newPath !== url.pathname) {
        router.push(newPath)
      }
    }
  }, [])

  return <FestivalPage {...props} />
}

export async function getStaticProps() {
  const props = await getGlobalNotionData({ from: 'festival-page' })
  props.pageTableOfContents = await getPageTableOfContents(props)
  delete props.pageTableOfContents
  return {
    props,
    revalidate: 1
  }
}

export default Festival
