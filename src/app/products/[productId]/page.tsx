import React from 'react'
import products from '../page';

export default function page({params} :
    {params:{productId:string}}
) {
  return (
    <div>
      <h1>Details of the {params.productId}</h1>
    </div>
  )
}
