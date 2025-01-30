import React from 'react'

export default function catchAllSegments({params}:
    {params:{slug:string[]}}) {

        if(params.slug.length==3){
            return (
                <div>
                 Returning Document {params.slug[0]} , <br />
                 Section {params.slug[1]},
                Paragraph {params.slug[2]}     
                </div>
              )
        }
        else if(params.slug.length==2){
            return (
                <div>
                 Returning Document {params.slug[0]} , <br />
                 Section {params.slug[1]}  
                </div>
              )
        }
        else if(params.slug.length==1){
            return (
                <div>
                 Returning Document {params.slug[0]} , <br />
                </div>
              )
        }
      
            return (
                <div>
                 Welcome to Catch All Segments <br />
                </div>
              )
        
}
