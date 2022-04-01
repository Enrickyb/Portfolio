/** @jsxImportSource theme-ui */
import React from 'react'
import MainContent from './MainContent/MainContent'
import Gif from './MainContent/Gif'
export default function Main(props) {
  //imagens
  const imglight = <img src='images/handcoding.gif' alt='hand coding gif'></img>
  const imgdark = <img src='images/handcodingdark.gif' alt='handcoding gif dark'></img>
  //
  function changeGif(){
    if(props.colorMode === 'dark'){
      return imgdark
    }else {
      return imglight
    }
  }
  return (
    <div className='main'>
        <MainContent></MainContent>
        <Gif>{changeGif()}</Gif>
    </div>
  )
}
