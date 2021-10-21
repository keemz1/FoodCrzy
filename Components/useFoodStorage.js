import { useState } from 'react'

export default function useFoodStorage() {
    const [value, setValue] = useState()
    
    return [value, setValue]
}
