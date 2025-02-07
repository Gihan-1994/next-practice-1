import { notFound } from 'next/navigation'
import React from 'react'

export default function reviews({params}:
    {params: {reviews:string ,
        productId:string
    }}
) {
  if(parseInt(params.reviews)>100 || parseInt(params.productId)>100){
    return notFound();
  }
  return (
    <div>
      <h1>Reviews for Product : {params.productId} and Review: {params.reviews} </h1>
    </div>
  )
}
