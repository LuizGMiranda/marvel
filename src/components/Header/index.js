import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { serachInProgress } from "../../redux/searchReducer";

import logo from "../../assets/logo.png";
import back from "../../assets/back.png";

function Header() {
    const [searchInput, setSearchInput] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    const handleInputSearch = useCallback((e) => {
        e.preventDefault();
        const { target } = e;
        setSearchInput(target.value);
    }, []);

    const handleSearch = useCallback(
        ({ which }) => {
            if (which === 13) {
                dispatch(serachInProgress());
                history.push(`/search/${searchInput}`);
                return;
            }
        },
        [searchInput, history, dispatch]
    );

    return (
        <header id="header" className="bg-gray-600 flex items-center justify-around shadow-lg mb-5">
            <Link to="/">
                <img
                    src={logo}
                    alt="Logo com escrita Marvel"
                    className="h-16 hidden m-5 md:block"
                />
                <img
                    src={back}
                    alt="Voltar a página anterior"
                    className="h-6 md:hidden"
                />
            </Link>
            <input
                id="input-search"
                onKeyPress={(e) => handleSearch(e)}
                onChange={(e) => handleInputSearch(e)}
                type="text"
                placeholder="Busque um personagem"
                className="h-auto m-5 p-2 rounded"
            />
        </header>
    );
}

export default Header;
