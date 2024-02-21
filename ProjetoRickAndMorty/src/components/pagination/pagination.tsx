import { useState } from "react";
import * as React from "react";

interface IPropsSetPage {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    numPage: number;
    numOfPages: number;
}

export const Pagination: React.FC<IPropsSetPage> = ({
    setPage,
    numOfPages,
    numPage,
}) => {
    const [nPage, setNpage] = useState<number>(1);

    const handlePrev = () => {
        setPage((n: number) => n - 1);
        setNpage(nPage - 1);
    };

    const handleNext = () => {
        setPage((n: number) => n + 1);
        setNpage(nPage + 1);
    };

    return (
        <nav aria-label="Page navigation">
            <ul
                className="pagination justify-content-end align-items-center pt-5 gap-3"
                style={{
                    marginBottom: "5rem",
                }}
            >
                {numPage == 1 && (
                    <li className="page-item page-item-prev disabled">
                        <button onClick={handlePrev} className="page-link">
                            Anter
                        </button>
                    </li>
                )}
                {numPage !== 1 && (
                    <li className="page-item page-item-prev ">
                        <button onClick={handlePrev} className="page-link">
                            Anter
                        </button>
                    </li>
                )}
                <div className="display-num-pag">
                    Pág. {numPage} / {numOfPages}
                </div>
                {numPage < numOfPages && (
                    <li className="page-item">
                        <button onClick={handleNext} className="page-link">
                            Próx.
                        </button>
                    </li>
                )}
                {numPage == numOfPages && (
                    <li className="page-item disabled">
                        <button onClick={handleNext} className="page-link">
                            Próx.
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};
