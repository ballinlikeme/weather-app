import React, { useState, useEffect } from "react"
import { useDebounce } from "../../hooks/debounce"
import { useAppDispatch } from "../../hooks/redux"
import { setInputValue } from "../../store/slices/userInputSlice"
import styles from "../../styles/modules/headerInput.module.css"

export const HeaderInput: React.FC = () => {

     const [value, setValue] = useState<string>('')
     const debouncedValue = useDebounce<string>(value, 500)

     const dispatch = useAppDispatch()

     useEffect(() => {
          dispatch(setInputValue(debouncedValue))
     }, [debouncedValue])

     return (
          <div className={styles.container}>
               <input
                    className={styles.input}
                    type="text"
                    placeholder="Location name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
               />
          </div>
     )
}