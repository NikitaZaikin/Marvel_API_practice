import './comicsList.scss';

import {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [comicEnded, setComicEnded] = useState(false);
    const [newItemLoading, setnewItemLoading] = useState(false);



    const {loading, error, getComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {

        initial ? setnewItemLoading(false) : setnewItemLoading(true)

        getComics(offset)
            .then(comicsListLoaded)
    }

    const comicsListLoaded = (newComicList) => {
        let ended = false;
        if (newComicList.length < 8) {
            ended = true;
        }

        setComicsList((comicList) => [...comicList, ...newComicList])
        setnewItemLoading((newItemLoading) => false);
        setOffset((offset) => offset + 8)
        setComicEnded(comicEnded => ended);
    }

    function renderComics (arr) {
        const comics = arr.map((item, i) => {

            return (
                <li className="comics__item"
                    key={item.id}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.prices}</div>
                    </Link>
                </li>
            )

        });

        return (
            <ul className="comics__grid">
                {comics}
            </ul>
        )
    }

    const item = renderComics(comicsList);
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    const err = error ? <ErrorMessage/> : null;

    return (
        <div className="comics__list">
            {spinner}
            {err}
            {item}
            <button className="button button__main button__long"
                    onClick={() => onRequest(offset)}
                    style={{'display': comicEnded ? 'none' : 'block'}}
                    disabled={newItemLoading}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;