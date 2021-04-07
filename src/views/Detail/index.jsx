import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getByIdCharacters } from "../../services/characters";

function Detail() {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        async function fetch() {
            const data = await getByIdCharacters(id);
            setCharacter(data);
        }

        if(localStorage.getItem(id)) {
            const data = JSON.parse(localStorage.getItem(id))
            setCharacter(data)
            return
        }

        fetch();
    }, [id]);

    return (
        <section className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="h-96 w-full md:w-80">
                    {character.thumbnail && (
                        <img
                            alt={`Imagem do personagem ${character.name}`}
                            className="h-full w-full"
                            src={
                                character.thumbnail.path +
                                "." +
                                character.thumbnail.extension
                            }
                        />
                    )}
                </div>
                <div className="ml-2 md:w-80">
                    <h1 className="font-bold font-sans text-2xl">
                        {character.name}
                    </h1>
                    <p>{character.description}</p>
                    <br />
                    <h2 className="font-bold font-sans text-xl">
                        Series
                    </h2>
                    <ul>
                        {
                            character.series && character.series.items.map(item => (
                                <li>{item.name}</li>
                            ))
                        }
                    </ul>
                    <small>
                        <Link to={`/edit/${id}`} className="text-blue-500 hover:text-blue-800">
                            Edit
                        </Link>
                    </small>
                </div>
            </div>
        </section>
    );
}

export default Detail;
