import React, { useState, useEffect } from "react"

const usePreloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [loading])

  return loading
}

export default usePreloader
