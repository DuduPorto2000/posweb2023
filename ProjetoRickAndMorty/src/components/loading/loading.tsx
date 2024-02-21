export const Loading = () => {
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80vh" }}
        >
            <div
                className="spinner-border text-info"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
            >
                <span className="visually-hidden">Carregando...</span>
            </div>
        </div>
    );
};
