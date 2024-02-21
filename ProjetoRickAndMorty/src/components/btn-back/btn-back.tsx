export const BtnBack = () => {
    return (
        <nav className="pt-2 d-flex flex-row-reverse">
            <button onClick={() => history.back()} className="nav-link">
                Voltar
            </button>
        </nav>
    );
};
