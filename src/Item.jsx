import { useMotionValue, Reorder } from 'framer-motion'
import { useRaisedShadow } from './use-raised-shadow'

// interface Props {
//    item: string;
// }

export const Item = ({ item }) => {
   const y = useMotionValue(0)
   const boxShadow = useRaisedShadow(y)
   // console.log('item: ', item)

   return (
      <Reorder.Item
         className='item'
         value={item}
         id={item}
         style={{ boxShadow, y }}
      >
         <span style={{ color: 'brown', alignItems: 'center' }}>
            {item}
         </span>
      </Reorder.Item>
   )
}
