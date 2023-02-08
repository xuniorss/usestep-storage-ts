import { Dispatch, SetStateAction } from 'react'

declare module 'usestep-storage-ts' {
   export default function useStep<T>(
      key: string,
      defaultValue: T
   ): [T, Dispatch<SetStateAction<T>>]
}
