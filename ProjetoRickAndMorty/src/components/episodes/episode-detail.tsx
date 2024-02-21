import { CharacterCard, IPropsEpisodeDetail } from "..";

export const EpisodeDetail = ({ episode, characters }: IPropsEpisodeDetail) => {
    return (
        <section className="my-4 d-flex flex-column">
            <div
                className="p-4 d-flex flex-lg-row justify-content-evenly align-items-center"
                id="episode"
            >
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <div className="fs-1 fw-bold">
                        {episode.name} - {episode.episode}
                    </div>
                    <p>
                        <span className="text-secondary">
                            Data de lançamento:
                        </span>{" "}
                        {episode?.air_date}
                    </p>
                </div>
            </div>
            <div className="pt-4">
                <p
                    className="fs-3 text-center"
                    style={{
                        marginBottom: "100px",
                    }}
                >
                    Neste episódio esta(ão) presente(s)
                </p>
            </div>
            <div className="cards row mt-4">
                {Object.values(characters)?.map((character, index) => {
                    return <CharacterCard key={index} character={character} />;
                })}
            </div>
        </section>
    );
};
