import { useState, useEffect } from 'react'

import api from '~/services/api'

export default function useFetch (path) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData () {
      try {
        setLoading(true)

        const { data } = await api.get(path)

        setData(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading }
}
