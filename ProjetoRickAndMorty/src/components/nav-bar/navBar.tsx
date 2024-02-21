import { Navbar as BoostrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <BoostrapNavbar expand="lg" className="bg-body-tertiary">
            <Container fluid className="align-items-center">
                <BoostrapNavbar.Brand href="/">
                    <div className="d-flex flex-row align-items-right gap-4">
                        <img
                            src="/logo.png"
                            alt="logo rick and morty"
                            width="180px"
                        ></img>
                    </div>
                </BoostrapNavbar.Brand>
                <BoostrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BoostrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="justify-content-between flex-grow-1 pe-3"
                        justify
                        variant="underline"
                    >
                        <Link className="fs-4 nav-link" to="/">
                            {" "}
                            Personagens
                        </Link>

                        <Link className="fs-4 nav-link" to="episodes">
                            {" "}
                            Episódios
                        </Link>

                        <Link className="fs-4 nav-link" to="location">
                            {" "}
                            Localização
                        </Link>
                    </Nav>
                </BoostrapNavbar.Collapse>
            </Container>
        </BoostrapNavbar>
    );
};
