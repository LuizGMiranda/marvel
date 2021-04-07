import React from "react";
import { Link } from "react-router-dom";

function CardItem({result}) {
    return (
        <Link to={`/detail/${result.id}`}>
        <div
            key={result.id}
            className="cardItem flex flex-col items-center m-5 shadow-lg rounded"
            style={{height: '250px'}}
        >
            <img
                style={{height: '173px', width: '173px'}}
                alt={`Imagem do personagem ${result.name} `}
                className="rounded-t"
                src={result.thumbnail.path + "." + result.thumbnail.extension}
            />
            <span className="text-center mt-1 px-2">{result.name}</span>
        </div>
        </Link>
    );
}

export default CardItem;
