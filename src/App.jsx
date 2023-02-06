import React, { useState } from 'react'
import me1 from './me1.jpg'
import sun from './enjoySun.jpg'
import snowman from './snowman.jpg'
import style from './futureProject.jpg'
import './App.css'

function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle === currentArticle) {
    return 'show-article'
  }else{
    return 'hide-article'
  }
}

function App() {
  const [activeArticle, setActiveArticle] =useState('First Article')

  return (
    <>
    
    <article className={`active ${getActiveClassName(activeArticle, 'First Article')}`} >
      <h1>Hola!!!!</h1>
      <img className='me' src={me1} alt="foto of myself"/>
      <p>Hi, my name is Sheila, I am really very new in this world of web designing. I started last August when I came in ChangeMakers Educations. </p>
      <p>I have done three websites and one game while experimenting with html, css and javaScript. I really love it and I want to become very good in coding.</p>
    </article>

    <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
      <h1>Future Project</h1>
      <div className='twofotos'>
        
        <img className='snowman' src={snowman} alt='snowman' />
        <img className='sun' src={sun} alt="enjoy the sun" />
      </div>

      <p>My next project I would like to be about calculating the days left until summer. I do not really know what i can do with React so checking the list of possibilities i thougt directly in this idea. I miss summer or better said the sun and warm weather. Not to mention summer holidays, travelling, picnics, sand beaches and so on...</p>
      

    </article>

    <article className={`active ${getActiveClassName(activeArticle, '3rd Article')}`} >
      <h1>Style Future Project</h1>
      <img className='styleFutureProject' src={style} alt='Example of style for my next asigment' />
      <p>Looking in www.dribbble.com I found this page. Its style got my atention at first seight. I would show the remaining time in the center-picture and fotos around in the transition from winter to summer</p>
      
    </article>
    
    
    <div className='button'>
      <button onClick={() => {
        setActiveArticle( (a) => {
        if (a === 'First Article') {
          return '2nd Article'
        } else if (a ==='2nd Article') {
          return '3rd Article'
        } else {
          return 'First Article'
        }
      })
      }}>Switch Article</button>
    </div>
    </>
  
  
  )
}

export default App
