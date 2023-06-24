import React, {useState, useEffect} from 'react'

export const Seconds = () => {


    const [time, setTime] = useState(0)

    const [startTimer, setStartTimer] = useState(false)

    const [timerId, setTimerId] = useState(0)

    useEffect(() =>{

        // Iniciamos esta variable como un null
        let intervalId = null
        // Validamos si start es false
        if (startTimer) {
            // Alamcena un segundo en el intervalId y va modificando el estado y por ende su valor
            intervalId = setInterval (() =>{
                setTime(prev => prev + 1)
            }, 1000)
            setTimerId(intervalId)
        }else{
            clearInterval(timerId)
        }        
    }, [startTimer])

    const resetear = () =>{
        setTime(0)
    }

  return (
    <div>

    <div>Segundos: {time}</div>
        <button onClick={() => setStartTimer(true)}>Play</button>
        <button onClick={() => setStartTimer(false)}>Stop</button>
        <button onClick={resetear}>Reset</button>    
    </div>
  )
}
