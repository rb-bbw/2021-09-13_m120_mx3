import React, {useEffect, useState} from "react"

/*
 Source: https://lukstei.com/2019-10-27-doing-asynchronous-calls-using-react-hooks/
 */
export default function SearchBandsEffect(f) {
    const [result, setResult] = useState()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let subscribed = true

        if(counter>0) {
            // TODO fix this timer
            setTimeout(()=>{},1000) // artificially slow down search to show loading

            setIsLoading(true)


            f().then(
                r => {
                    if (subscribed) {
                        setIsLoading(false)
                        setResult(r.response.bands)
                    }
                },
                e => {
                    if (subscribed) {
                        setIsLoading(false)
                        setError(e)
                    }
                }
            )
        }
        return function cleanup(){
            subscribed = false
            setResult() // clear old data when re-running
        }
    },
    [counter])

    function triggerEffect(){
        setCounter(counter => counter + 1)
    }

    return [result, error, isLoading, triggerEffect]
}
