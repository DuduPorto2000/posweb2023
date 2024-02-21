import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsEpisodeCard } from "..";

export const EpisodeCard = ({ episode }: IPropsEpisodeCard) => {
    return (
        <div className="wrap-card col col-md-4 col-m-5 mb-5">
            <Link
                className="card text-decoration-none pointer"
                to={`/episode/${episode.id}`}
            >
                <Card
                    className="card-card card-card-episode"
                    style={{ minWidth: "15rem" }}
                >
                    <Card.Body>
                        <Card.Title className="fs-3 fw-bold mb-6">
                            {episode.name}
                        </Card.Title>
                        <Card.Text>Episódio: {episode.episode}</Card.Text>
                        <Card.Text>
                            Data de lançamento: {episode.air_date}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
