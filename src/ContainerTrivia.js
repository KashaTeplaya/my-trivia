import React from 'react'
import Cards from './Cards'
import Buttons from './Buttons'
import {useEffect, useState} from 'react'


let score = 0;
function ContainerTrivia() {
    const [items,setItems] = useState([]);
    const [i, changeIndex] = useState(0)
    const URL = 'https://opentdb.com/api.php?amount=5&type=multiple'
    

    useEffect(()=>{
        fetch(URL)
    .then(response => response.json())
    .then(json => {
        setItems(json.results)
    } )
    },[])


    function nextCard(){
        changeIndex(i+1)
    }
    function addScore(event){
        if(event.target.innerText === items[i].correct_answer){
            score++;
            event.target.classList.add('correct')
        }
        else{
            event.target.classList.add('incorrect')
        }
        setTimeout(()=>{
            nextCard()
            event.target.classList.remove('correct')
            event.target.classList.remove('incorrect')
        },1000)
            
       
    }
    
    if(items.length>0 && i<items.length){
        return(
            <div className='container'>
                <h1>Trivia Game</h1>
                <Cards  question={items[i].question}/>
               <Buttons 
               correct_answer = {items[i].correct_answer} 
               incorrect_answers = {items[i].incorrect_answers}
               nextCard={addScore}  
               />
            </div>
        )
    }
    else {
        if(i===items.length){
            return (
                <div  className='container'>
                    <h1>Trivia Game</h1>
                    <div className="cards">
                    <h2>Your score = {score}</h2>
                    </div>
                    
                </div>
            )
        }else{
            return (
                <div className='container'>
                    <Cards  question = "Загрузка вопроса..."/>
                </div>
            )
        }

    }
        
    
}

export default ContainerTrivia