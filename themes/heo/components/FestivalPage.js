import React from 'react'
import CommonHead from '@/components/CommonHead'
import { useRouter } from 'next/router'
import { useGlobal } from '@/lib/global'
import BLOG from '@/blog.config'
import { useEffect } from 'react'

/**
 * 节日祝福页面
 * @returns {JSX.Element}
 * @constructor
 */
const FestivalPage = () => {
  const { theme } = useGlobal()
  const router = useRouter()

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <CommonHead
        title={`节日祝福 - ${BLOG.TITLE}`}
        description="节日祝福页面"
      />
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
          节日祝福
        </h1>
        
        {/* 端午节祝福 */}
        <div className="mb-8 p-6 bg-green-50 dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">
            端午节快乐
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            值此端午佳节，祝您和家人：<br/>
            粽叶飘香，欢乐安康<br/>
            五月初五，吉祥如意<br/>
            佳节团圆，幸福美满
          </p>
        </div>

        {/* 可以继续添加其他节日的祝福卡片 */}
      </div>
    </div>
  )
}

export default FestivalPage
