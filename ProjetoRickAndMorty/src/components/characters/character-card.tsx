import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsCharacterCard } from "..";

export const CharacterCard = ({ character }: IPropsCharacterCard) => {
    return (
        <div className="wrap-card col col-md-3 col-m-8 mb-5">
            <Link
                className="card text-decoration-none pointer"
                to={`/character/${character.id}`}
            >
                <Card className="card-card align-items-center">
                    <Card.Img variant="top" src={character.image} />
                    <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title className=" fs-3 fw-bold mb-2">
                            {character.name}
                        </Card.Title>
                        <Card.Text>
                            <span className="text-secondary">Espécie: </span>
                            {character.species}
                        </Card.Text>
                        <Card.Text>
                            <span className="text-secondary">Origem:</span>{" "}
                            {character.origin.name}
                        </Card.Text>
                        <Card.Text>
                            <span className="text-secondary">
                                {" "}
                                Ultimo local visto:{" "}
                            </span>
                            {character.location.name}
                        </Card.Text>
                        <span className="text-secondary">Status:</span>
                        <Badge
                            bg={
                                character.status != "Alive"
                                    ? character.status != "Dead"
                                        ? "secondary"
                                        : "danger"
                                    : "success"
                            }
                            style={{
                                maxWidth: "7rem",
                                margin: "-2rem 0 0 1rem",
                                borderRadius: "5rem",
                            }}
                            className="text-small"
                        >
                            {character.status}
                        </Badge>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
