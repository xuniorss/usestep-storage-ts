import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export default function useStep<T>(
   key: string,
   defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
   const [step, setStep] = useState(() => {
      try {
         const value = localStorage.getItem(key)
         return value !== null ? JSON.parse(value) : defaultValue
      } catch (error) {
         return defaultValue
      }
   })

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(step))
      console.log(step)
   }, [key, step])

   return [step, setStep]
}
