import { useState } from 'react'
import styles from './Counter.module.css'

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </div>
  )
}

export default Counter

