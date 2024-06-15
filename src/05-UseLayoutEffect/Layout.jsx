import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from '../03-Examples/LoadingQuote';
import { Quote } from '../03-Examples/Quote';




export const Layout = () => {
    const { counter,
        increment,
        reset,
        decrement} = useCounter()
    const {data,isLoading,hasError} = useFetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${counter}`)
    const {character,quote} = !!data && data[0];   
    console.log(data,isLoading,hasError)
   
    return (
    <><h1>Breaking bad quotes</h1>
        <hr />
        {
            isLoading ?(
                <LoadingQuote/>
            )
            :(
                <Quote quote = {quote}character={character}/>
            )
        }
        <button disabled = {isLoading} className='btn btn-primary' onClick = {()=>increment()}>
            Next quote
        </button>


    </>
  )
}
