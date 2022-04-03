/** @jsxImportSource theme-ui */
import React from 'react'
import MainContent from './MainContent'
import Gif from './Gif'
export default function Main(props) {
  //imagens
  const imglight = <img src='images/handcoding.gif' alt='hand coding gif'></img>
  const imgdark = <img src='images/handcodingdark.gif' alt='handcoding gif dark'></img>
  //
  //icons
  
  function changIcon() {
    if(props.colorMode === 'light'){
      return true
    }else{
      return false
    }
  }
  function changeGif(){
    if(props.colorMode === 'dark'){
      return imgdark
    }else {
      return imglight
    }
  }
  return (
    <div className='main'>
        <MainContent changIcon={changIcon()}></MainContent>
        <Gif>{changeGif()}</Gif>
    </div>
  )
}
