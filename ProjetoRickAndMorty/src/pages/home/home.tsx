import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
    CharacterCard,
    Loading,
    NotFound,
    Pagination,
    SectionCard,
} from "../../components";
import { getCharacters } from "../../services";

export const Home = () => {
    const [characters, setCharacters] = useState([]);

    const [numPage, setNumPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(1);

    const [isLoad, setIsload] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setIsload(true);
                const data = await getCharacters(numPage);
                setCharacters(data.results);
                setNumOfPages(data.info.pages);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
                setIsNotFound(true);
            } finally {
                setIsload(false);
            }
        };
        fetchCharacters();
    }, [numPage]);

    return (
        <Container>
            {(isLoad && <Loading />) || (isNotFound && <NotFound />) || (
                <>
                    <Pagination
                        setPage={setNumPage}
                        numPage={numPage}
                        numOfPages={numOfPages}
                    />
                    <SectionCard>
                        {characters?.map((character, index) => (
                            <CharacterCard key={index} character={character} />
                        ))}
                    </SectionCard>
                </>
            )}
        </Container>
    );
};
