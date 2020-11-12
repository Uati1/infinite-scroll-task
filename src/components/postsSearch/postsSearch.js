import { useEffect, useState } from 'react'
import axios from 'axios'

export default function PostsSearch(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [posts, setPosts] = useState([])
  const [hasMore, setHasMore] = useState(pageNumber)


  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'http://localhost:3001/posts/',
      params: {
        _start: pageNumber*12,
        _end: pageNumber*12+12
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setPosts(prevPosts => {
        return [...new Set([...prevPosts, ...res.data.map(post => post)])]
      })
      setHasMore(res.headers["x-total-count"] > pageNumber*12+12)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, posts, hasMore }
}