import React from 'react'
import products from '../page';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { resolve } from 'path';
import { title } from 'process';

type props ={
  params :{
    productId :string
  }
}
export const generateMetadata =async({params}:props): Promise <Metadata> =>{

  const title = await new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve(`product ${params.productId}`)
    },5000)
    
  })
 return{
  title :  `${title}`,
 };
}

export default function page({params} :props) {

  if (parseInt(params.productId )>100){
    return notFound();
  }else{
    return (
      <div>
        <h1>Details of the {params.productId}</h1>
      </div>
    )
  }
 
}
