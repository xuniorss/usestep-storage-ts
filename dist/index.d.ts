import { Dispatch, SetStateAction } from 'react';
export default function useStep<T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>];
