import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { IPropsLocationCard } from "..";

export const LocationCard = ({ location }: IPropsLocationCard) => {
    return (
        <div className="wrap-card col col-md-4 col-m-5 mb-5">
            <Link
                className="card text-decoration-none pointer"
                to={`/location/${location.id}`}
            >
                <Card
                    className="card-card card-card-episode"
                    style={{ minWidth: "15rem" }}
                >
                    <Card.Body>
                        <Card.Title className="fs-3 fw-bold mb-6">
                            {location.name}
                        </Card.Title>
                        <Card.Text>Tipo: {location.type}</Card.Text>
                        <Card.Text>Dimensão: {location.dimension}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};
