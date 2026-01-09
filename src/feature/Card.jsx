import React from 'react'


const Card = () => {

  const CardData = [


    {
      Img: "1.jpg",
      Title: "title 1",
      detail: "detail 1"
    },

    {
      Img: "1.jpg",
      Title: "title 2",
      detail: "detail 2"
    },


  ]





  return (
    <>
      <div className=" grid md:grid-cols-4 grid-cols-1 gap-3 place-items-center py-20">

        {CardData.map((c) => (

          <div className='CardBody rounded-2xl border-2 p-3 shadow-2xl'>
            <div className="CardImg">
              <img className='rounded-2xl' src={c.Img} alt="" />
            </div>
            <div className="CardTitle font-bold ">{c.Title}</div>
            <div className="CardDetail">{c.detail}</div>
          </div>


        )

        )}
      </div>

    </>
  )
}

export default Card
