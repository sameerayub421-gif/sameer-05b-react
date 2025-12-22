import React from 'react'


const Card = () => {

const CardData =[


         {
          id:1,
          Title:"title 1",
          detail:"detail 1"
         },

         {
          id:2,
          Title:"title 2",
          detail:"detail 2"
         },


]





  return (
    <>
      {CardData.map((c)=>(

        <div>

            <h3>{c.id}</h3>
             <h1>{c.Title}</h1>
             <p>{c.detail}</p>

        </div>
       

      )

      )}
    </>
  )
}

export default Card
