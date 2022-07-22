import React from 'react'
import styles from "./Content.module.css" 
import ContentCard from './ContentCard/ContentCard'

let contentCard = [
    {id:1, mobileName:'Xiaomi Poco X3', price:999},
    {id:2, mobileName:'Poco M4', price:599},
    {id:4, mobileName:'Apple Iphone 11', price:545},
    {id:5, mobileName:'Apple Iphone 12', price:545},
    {id:6, mobileName:'Samsung A51', price:545},
    {id:7, mobileName:'Lenovo TAB 3', price:545},
    {id:8, mobileName:'Samsung A52', price:545},
    {id:9, mobileName:'Apple Iphone 13', price:545},
]

const Content = () => {
    let contents = contentCard.map( (content, index) => <ContentCard key={index} id={content.id} mobileName={content.mobileName} price={content.price}  />)
  return (
    <div className={styles.content}>
       {contents}
    </div>
  )
}

export default Content