import { Input, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

function Search({ setSearchString }) {
    const [input, setInput] = useState('')

    function showValueInput() {
        setSearchString(input)
    }

    return (
        <>
            <Input
                onChange={(event) => setInput(event.target.value)}
                icon={<IconSearch />}
                placeholder="Your email"
                rightSection={
                    <Button onClick={showValueInput}>Поиск</Button>
                }
            />

        </>
    )
}

export default Search