// import { useState } from "react";
import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));

// import RandomChar from "../randomChar/RandomChar";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";
// import ErrorBoundary from "../errorBoundary/ErrorBoundary";
// import AppBanner from "../appBanner/AppBanner";

// import decoration from '../../resources/img/vision.png';
// import ComicsList from "../comicsList/ComicsList";

const App = () => {
    // const [selectedPage, setPage] = useState('');
    // const onPageSelected = (page) => {
    //     setPage(page);
    // }
    // const character_page = (selectedPage === 'Characters' || selectedPage === '') ? <Characters selectedChar={selectedChar} onCharSelected={onCharSelected}/> : null; 
    // const comics_page = selectedPage ==='Comics' ? <Comics/> : null;

    return (
        <Router> 
            <div className="app">
                {/* <AppHeader onPageSelected={onPageSelected} selectedPage={selectedPage}/> */}
                <AppHeader/>
                <main>
                        <Suspense fallback={<Spinner/>}>
                            <Routes>
                                <Route path='/' element={<MainPage/>}/>
                                <Route path='/comics' element={<ComicsPage/>}/> 
                                <Route path='/comics/:comicId' element={<SingleComicPage/>}/> 
                                <Route path='*' element={<Page404/>}/>
                            </Routes>
                        </Suspense>
                    {/* {character_page}
                    {comics_page} */}
                </main>
            </div>
        </Router>
    )
}

// const Characters = (props) => {
//     return (
//         <>
//             <ErrorBoundary>
//                 <RandomChar/>
//             </ErrorBoundary>
//             <div className="char__content">
//                 <ErrorBoundary>
//                     <CharList onCharSelected={props.onCharSelected}/>
//                 </ErrorBoundary>
//                 <ErrorBoundary>
//                     <CharInfo charId={props.selectedChar}/>
//                 </ErrorBoundary>
//             </div>
//             <img className="bg-decoration" src={decoration} alt="vision"/>
//         </>
//     )
    
// }

// const Comics = (props) => {
//     return(
//         <>
//             <AppBanner/>
//             <ErrorBoundary>
//                 <ComicsList/>
//             </ErrorBoundary>
//         </>
//     )
// }

export default App;