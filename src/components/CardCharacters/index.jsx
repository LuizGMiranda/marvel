import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { serachLoading } from '../../redux/searchReducer';
import CardItem from './CardItem';
import LoadingCard from './LoadingCard'

function CardCharacters({data}) {
    const serachLoadingData = useSelector(serachLoading);
    return (
        <Fragment>
            {
                 serachLoadingData === 'error' && <span className="mt-2">Nenhum personagem encontrado</span>
            }
            {
                serachLoadingData === 'loading' && (
                    <Fragment>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </Fragment>
                )
            }
            {
                serachLoadingData === 'success' &&
                data.map(result => (
                    <CardItem key={result.id} result={result} />
                ))
            }
        </Fragment>
    );
}

export default CardCharacters;
