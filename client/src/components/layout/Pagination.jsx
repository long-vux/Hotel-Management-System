import { Button } from '@mui/material'
import React from 'react'

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage
}) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i)
  }

  return (
<div className="pagination flex flex-row gap-2">
  {pages.map((page, index) => {
    return (
      <button
        key={index}
        onClick={() => setCurrentPage(page)}
        className={`border rounded-md text-[16px] p-4 h-0 w-0 center hover:border-black transition-colors duration-300 ${
          page === currentPage ? 'bg-black text-white' : ''
        }`}
      >
        {page}
      </button>
    );
  })}
</div>

  )
}

export default Pagination
