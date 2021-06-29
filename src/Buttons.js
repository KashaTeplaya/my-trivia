import React from 'react'



function Buttons(props) { 

    const answers  = [props.correct_answer, ...props.incorrect_answers]
    answers.sort(()=>Math.random() - 0.5)
    console.log(props.correct_answer)
    
    return(
        <div>
        <div className="button-container">
            <button onClick={props.nextCard} className="button"
            dangerouslySetInnerHTML={{__html: answers[0]}}>
               
            </button>
            <button onClick={props.nextCard} className="button"
            dangerouslySetInnerHTML={{__html: answers[1]}}>
            </button>
        </div>
        <div className="button-container" id="button-container">
            <button onClick={props.nextCard}  className="button" dangerouslySetInnerHTML={{__html: answers[2]}}>
            </button>
         
            <button onClick={props.nextCard} className="button"
            dangerouslySetInnerHTML={{__html: answers[3]}}>
            </button>
        </div>

    </div>
    )
}

export default Buttons