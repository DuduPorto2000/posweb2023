import { CharacterCard, IPropsLocationDetail } from "..";

export const LocationDetail = ({
    location,
    residents,
}: IPropsLocationDetail) => {
    return (
        <section className="my-4 d-flex flex-column">
            <div
                className="p-4 d-flex flex-lg-row justify-content-evenly align-items-center"
                id="local"
            >
                <div className="fs-4 d-flex flex-column justify-content-evenly ">
                    <div className="fs-1 fw-bold">{location.name}</div>
                    <p>
                        <span className="text-secondary">Tipo:</span>{" "}
                        {location.type}
                    </p>
                    <p>
                        <span className="text-secondary">Dimensão:</span>{" "}
                        {location.dimension}
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
                    Neste local mora(am):
                </p>
            </div>
            <div className="cards row mt-4">
                {Object.values(residents).map((resident, index) => {
                    return <CharacterCard key={index} character={resident} />;
                })}
            </div>
        </section>
    );
};
