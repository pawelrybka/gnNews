import { useState } from 'react'
import Modal from '../Modal/Modal'
import styles from './Third.module.css'

function Third() {
  
  const [modalVisible, setModalVisible] = useState(false)

  const [data, setData] = useState(["Tak","Nie", "Sranie", "Rzyganie"])

  return (
    <>
      <div className={styles.third}>
        <button onClick={()=> setModalVisible(!modalVisible)}>Show Modal</button>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {
        modalVisible && 
        <Modal
          setData={setData}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      }
    </>
  )
}

export default Third

