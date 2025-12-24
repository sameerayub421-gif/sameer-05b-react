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

            <h3 className='border-10 m-2 p-3 font-semibold text-xl'>{c.id}</h3>
             <h1 className='border-10 m-2 p-3 font-extrabold text-4xl'>{c.Title}</h1>
             <p className='border-10 m-2 p-3'>{c.detail}</p>

        </div>
       

      )

      )}
    </>
  )
}

export default Card
