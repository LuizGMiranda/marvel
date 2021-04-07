/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import { getByIdCharacters } from "../../services/characters";
import { useHistory } from "react-router-dom";

function Edit() {
    const { id } = useParams();
    const history = useHistory();

    const [character, setCharacter] = useState({});
    const [nameCharacter, setNameCharacter] = useState('')
    const [descriptionCharacter, setDescriptionCharacter] = useState('')

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        function initData(data) {
            setCharacter(data);
            setNameCharacter(data.name);
            setDescriptionCharacter(data.description);
        }

        async function fetch() {
            const data = await getByIdCharacters(id);
            initData(data);
        }

        if(localStorage.getItem(id)) {
            const data = JSON.parse(localStorage.getItem(id))
            initData(data)
            return
        }

        fetch();
    }, [id]);

    const handleSave = useCallback((e)=>{
        e.preventDefault()
        const data = character;
        data.name = nameCharacter;
        data.description = descriptionCharacter
        setCharacter(data)

        const json = JSON.stringify(data)
        localStorage.setItem(id, json)
        toast.success('Personagem salvo com sucesso!')
        history.goBack()
    },[id, character, nameCharacter, descriptionCharacter, history])

    const handleAddSerieItem = () =>{
        const newCharacter = character
        newCharacter.series.items.push({name: ''})
        setCharacter(newCharacter)
        forceUpdate()
    }

    const handleRemoveSerieItem = useCallback((index) => {
        const newCharacter = character
        newCharacter.series.items.splice(index, 1);
        setCharacter(newCharacter)
        forceUpdate()
    }, [character, forceUpdate])

    function handleChangeName({target}) {
        const { value } = target
        setNameCharacter(value)
    }

    function handleChangeDescription({target}) {
        const { value } = target
        setDescriptionCharacter(value)
    }

    const handleChangeSeriesItem = useCallback((index, { target }) => {
        const { value } = target
        const newCharacter = character

        newCharacter.series.items[index].name = value

        setCharacter(newCharacter)
        forceUpdate()
    }, [character, forceUpdate])

    const handleMapSeriesItems = useCallback(( character ) => {
        if(character.series) {
            return character.series.items.map((item, i) => (
               <li key={i} id={i} className="mb-2 w-full">
                   <input className="border rounded p-1 w-11/12" type="text" onChange={(e) => handleChangeSeriesItem(i, e)} value={item.name} id={item.name}/>
                   <a className="cursor-pointer pl-1 text-bold text-red w-1/12" onClick={(e) => handleRemoveSerieItem(i)}>
                       &times;
                   </a>
               </li>
           ))
        }

        return ''
    }, [handleChangeSeriesItem, handleRemoveSerieItem])


    return (
        <section className="container mx-auto">
            <form onSubmit={handleSave} className="flex flex-col mb-3 md:flex-row justify-center">
                <div className="h-96 w-full md:w-80">
                    {character.thumbnail && (
                        <img
                            className="h-full w-full"
                            alt={`Imagem do personagem ${character.name}`}
                            src={
                                character.thumbnail.path +
                                "." +
                                character.thumbnail.extension
                            }
                        />
                    )}
                </div>
                <div className="ml-2 md:w-80">
                    <label from="title" className="flex">
                        Titulo
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="border font-bold font-sans p-1 rounded text-2xl w-full"
                        onChange={handleChangeName}
                        value={nameCharacter}
                    />
                    <label from="description" className="flex">
                        Descrição
                    </label>
                    <textarea
                        id="description"
                        className="border font-sans my-2 p-1 rounded w-full"
                        rows="5"
                        cols="33"
                        onChange={handleChangeDescription}
                        value={descriptionCharacter}
                    />
                    <br />
                    <h2 className="font-bold font-sans text-xl">
                        Series
                    </h2>
                    <ul>
                        {
                            handleMapSeriesItems(character)
                        }
                    </ul>
                    <a onClick={() => handleAddSerieItem()} className="bg-blue-100 text-blue-500 px-3 py-1 mb-3 text-sm rounded">
                        <small>
                            Adicionar nova serie
                        </small>
                    </a>
                    <div className="flex mt-2">
                        <button type="submit" className="bg-green-600 text-white px-5 py-2 text-sm mr-2 rounded">
                            Save
                        </button>
                        <a href="#" onClick={() => history.goBack()} className="bg-red-600 text-white px-5 py-2 text-sm rounded">
                            Cancelar
                        </a>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Edit;
