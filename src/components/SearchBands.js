import {Button, FormControl, InputGroup, Spinner} from "react-bootstrap";
import SearchBandsEffect from "./SearchBandsEffect";
import ShowBands from "./ShowBands";
import {useState} from "react";

export default function SearchBands(){
    const [searchQuery, setSearchQuery] = useState()

    const api = "https://api.srgssr.ch/mx3/v2/bands?query=" + searchQuery
    //const api = "mockBands.json"
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

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Band name"
                    aria-label="Band name"
                    aria-describedby="search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <Button
                    onClick={triggerSearch}
                    variant="outline-primary"
                    id="search">
                    {!isLoading && "Search"}
                    {isLoading && <div>Loading... <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    /></div>}
                </Button>
            </InputGroup>
            {error && <p>An error occurred</p>}
            {result && <ShowBands data={result}/>}
        </>
    )
}