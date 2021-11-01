import {Button, FormControl, InputGroup, Spinner} from "react-bootstrap";
import {useState} from "react";

export default function ShowSearch({query, search}){
    const [input, setInput] = useState(query || "");

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Band name"
                    aria-label="Band name"
                    aria-describedby="search"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <Button onClick={() => search(input)} variant="outline-primary" id="search">
                    Search
                </Button>
            </InputGroup>
        </>
    )
}