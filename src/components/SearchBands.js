import SearchBandsEffect from "./SearchBandsEffect";

export default function SearchBands(searchQuery){

    const api = "https://api.srgssr.ch/mx3/v2/bands?query=" + searchQuery
    //const api = "/mockBands.json" // debug
    const [result, error, isLoading, triggerSearch] = SearchBandsEffect(
        () => fetch(
            api,
            {headers: {
                    "Authorization": "Bearer YtaOD6gXb0yDd1p1FBMFDTgAD0ir",
                    "Accept": "application/json"
                }}
        ).then(r => r.json())
    )

    // ensure biographies is not empty
    result && result.forEach(i => {
        let hasGerman = false

        i.biographies.forEach((i) => {
            if(i.language_code === "DE"){
                hasGerman = true
            }
        })

        if(!hasGerman){
            i.biographies.push({
                "language_code": "blank",
                "description": ""
            })
        }
    })

    return [result, error, isLoading, triggerSearch]
}