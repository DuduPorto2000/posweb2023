import { Badge, Card } from "react-bootstrap";

import { EpisodeCard, IPropsCharacterDetail } from "..";

export const CharacterDetail = ({
    character,
    episodes,
}: IPropsCharacterDetail) => {
    return (
        <section className="my-4 d-flex flex-column">
            <Card
                className="card-detail p-4 d-flex flex-lg-row justify-content-evenly align-items-center"
                id="char"
            >
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <div className="fs-3 fw-bold">{character.name} &#160;</div>
                    <p>
                        <span className="text-secondary">Espécie:</span>{" "}
                        {character.species}
                    </p>
                    <p>
                        <span className="text-secondary">Origem:</span>{" "}
                        {character.origin.name}
                    </p>
                    <div>
                        <span className="text-secondary">
                            ultimo local visto:
                        </span>
                        <br />
                        {character.location.name}
                    </div>
                    <br />
                    <div>
                        <span className="text-secondary">Status:</span>{" "}
                        <Badge
                            bg={
                                character.status != "Alive"
                                    ? character.status != "Dead"
                                        ? "secondary"
                                        : "danger"
                                    : "success"
                            }
                            style={{
                                maxWidth: "12rem",
                            }}
                        >
                            {character.status}
                        </Badge>
                    </div>
                </div>
                <Card.Img
                    style={{
                        maxWidth: "15rem",
                        margin: "-2rem 0 0 1rem",
                        borderRadius: "5rem",
                        boxShadow: "1px 1px 20px #1eff00",
                    }}
                    src={character.image}
                />
            </Card>
            <div className="pt-4">
                <p className="fs-3 text-center">
                    {character.name} Aparece neste(s) episodio(s):
                </p>
                <div className="row">
                    {Object.values(episodes).map((episode, index) => {
                        return <EpisodeCard key={index} episode={episode} />;
                    })}
                </div>
            </div>
        </section>
    );
};
