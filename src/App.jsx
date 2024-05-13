import './styles.css'
import { useState } from 'react'

import { Item } from './Item'
import { useMotionValue, Reorder } from 'framer-motion'
import { useRaisedShadow } from './use-raised-shadow'

let myWord = 'happy'.split('')
console.log(myWord)
// const initialItems = myWord.split('')

// const initialItems = ['a', 'b', 'd']

export default function App() {
   const [word, setWord] = useState(myWord)
   const [wordArray, setWordArray] = useState(myWord)
   console.log(wordArray.join(''))

   function handleInput(e) {
      setWord(e.target.value)
   }

   function updateWord(word) {
      console.log(word)
      let updated = word.split('')
      console.log(updated)
      setWordArray(updated)
   }

   return (
      <>
         <input onChange={handleInput} />
         <button onClick={() => updateWord(word)}>GO</button>
         <br />
         <Reorder.Group
            className='item'
            axis='x'
            onReorder={setWordArray}
            values={wordArray}
         >
            {wordArray.map((item, index) => (
               <Item key={index} item={item} />
            ))}
         </Reorder.Group>
      </>
   )
}
