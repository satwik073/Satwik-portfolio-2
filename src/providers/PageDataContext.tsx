'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface PageData {
  avatarList: any[]
  brandList: any[]
  innovationList: any[]
  onlinePresenceList: any[]
  creativeMindList: any[]
  WebResultTagList: any[]
  startupPlanList: any[]
  faqList: any[]
  achievementsList: any[]
}

interface PageDataContextType {
  data: PageData | null
  loading: boolean
  error: string | null
}

const PageDataContext = createContext<PageDataContextType>({
  data: null,
  loading: true,
  error: null,
})

export function PageDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PageData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const pageData = await res.json()
        setData(pageData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <PageDataContext.Provider value={{ data, loading, error }}>
      {children}
    </PageDataContext.Provider>
  )
}

export function usePageData() {
  const context = useContext(PageDataContext)
  if (!context) {
    throw new Error('usePageData must be used within a PageDataProvider')
  }
  return context
}


