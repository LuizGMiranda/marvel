import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardCharacters from "../../components/CardCharacters";
import { getSearchCharacters } from "../../services/characters";
import { serachCompleteAsync, serachError } from "../../redux/searchReducer";
import { useDispatch } from "react-redux";

function Search() {
    const {querySearch} = useParams();
    const [resultCharacters, setResultCharacters] = useState({
        results: [],
    });
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetch() {
            const data = await getSearchCharacters(querySearch);
            setResultCharacters(data);
            if(!data.results.length) {
                dispatch(serachError())
            } else {
                dispatch(serachCompleteAsync())
            }
        }
        fetch();
    }, [querySearch, dispatch]);

    return (
        <section className="container mx-auto">
            <h1 className="font-bold font-sans text-2xl">Resultado da busca</h1>
            <div className="grid grid-cols-2 md:grid-cols-6">
                <CardCharacters data={resultCharacters.results} />
            </div>
        </section>
    );
}

export default Search;
