import React from 'react'

export default function reviews({params}:
    {params: {reviews:string ,
        productId:string
    }}
) {
  return (
    <div>
      <h1>Reviews for Product : {params.productId} and Review: {params.reviews} </h1>
    </div>
  )
}
