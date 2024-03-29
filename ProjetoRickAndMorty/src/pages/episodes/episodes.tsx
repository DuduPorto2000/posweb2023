import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {
    EpisodeCard,
    Loading,
    NotFound,
    Pagination,
    SectionCard,
} from "../../components";
import { getEpisodes } from "../../services";

export const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    const [numPage, setNumPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(1);

    const [isLoad, setIsload] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                setIsload(true);
                const data = await getEpisodes(numPage);
                setEpisodes(data.results);
                setNumOfPages(data.info.pages);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
                setIsNotFound(true);
            } finally {
                setIsload(false);
            }
        };
        fetchEpisodes();
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
                        {episodes?.map((episode, index) => {
                            return (
                                <EpisodeCard key={index} episode={episode} />
                            );
                        })}
                    </SectionCard>
                </>
            )}
        </Container>
    );
};
