import React, { useEffect } from 'react'

export const GetDentist = () => {

    const [Dentist, setDentist] = useState([]); 

    const getData = async () => {
        const data = await
        fetch('https://jsonplaceholder.typicode.com/users')
        const convert = await data.json();
        setDentist(convert)
        }
        
        useEffect(() => {
            getData();
        })





  return (
    <div>GetDentist</div>
  )
}
