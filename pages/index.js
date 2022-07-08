import Head from "next/head"
import { React,useState } from "react"
import Filtering from "../components/Filtering"
import House from "../components/House"
import Places from "../components/Places"
import placesdata from "../data/placesdata"
export default function Home() {
    
  const [data,setData] = useState(placesdata)
  const [part,setPart] = useState(data)

  function choosing(location,type,price)
  {
    let min_price = parseInt(price.split('-')[0])
    let max_price = parseInt(price.split('-')[1])
    setPart(data.filter(box=>(box.country==location||location=='any')&&(box.type==type||type=='any')
    &&((box.price<=max_price&&box.price>=min_price)||price=='any')))
  }

  return (
    <>
    <Head>
      <title>App</title>
    </Head>
    <div>
      <House/>
      <Filtering choosing={choosing}/>
      <Places data={part}/>
    </div>
    </>
  )
}