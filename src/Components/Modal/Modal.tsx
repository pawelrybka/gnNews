import { useState } from 'react'
import styles from './Modal.module.css'

interface Props {
  setData: React.Dispatch<React.SetStateAction<string[]>>
  modalVisible: boolean
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function Modal({ setData, modalVisible, setModalVisible }: Props) {
  
  const [value, setValue] = useState("");

  const handleAdd = () => {
    setData((prevState) => [...prevState, value])
    setValue("")
    setModalVisible(!modalVisible)
  };

  return (
    <div className={styles.modal}>
      <input 
        type="text" 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Submit</button>
    </div>
  )
}

export default Modal

