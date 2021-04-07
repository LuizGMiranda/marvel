import { useEffect, useState } from "react";
import CardCharacters from "../../components/CardCharacters";
import { getAllCharacters } from "../../services/characters";

function Home() {
    const [resultCharacters, setResultCharacters] = useState({
        results: [],
    });

    useEffect(() => {
        async function fetch() {
            const data = await getAllCharacters();
            setResultCharacters(data);
        }
        fetch();
    }, []);

    return (
        <section className="container mx-auto">
            <h1 className="font-bold font-sans text-2xl">Personagens</h1>
            <div className="grid grid-cols-2 md:grid-cols-6">
                <CardCharacters data={resultCharacters.results} />
            </div>
        </section>
    );
}

export default Home;
