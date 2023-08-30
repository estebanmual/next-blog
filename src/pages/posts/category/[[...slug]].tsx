import { useRouter } from 'next/router'
import React from 'react'

const CategoryPost = () => {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>CategoryPost</div>
  )
}

export default CategoryPost