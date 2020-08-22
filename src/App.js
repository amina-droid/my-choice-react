import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Lobby from './pages/Lobby/Lobby';
import Test from './pages/Test/Test';
import TestLogin from './pages/TestLogin/TestLogin';
import Partners from './pages/Partners/Partners';
import Stream from './pages/Stream/Stream';
import Game from './pages/Game/Game';
import './App.sass';
import { UserContextProvider } from './context/user/user';
import { TimerContextProvider } from './context/timer/timer';
import Timer from './components/Timer/Timer';

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                    <div className="bg" />
                    <Route exact path="/login" render={() => <Login />} />
                    <Route exact path="/" render={() => <Main />} />
                    <Route exact path="/lobby" render={() => <Lobby />} />
                    <UserContextProvider>
                        <Route exact path="/test" render={() => <Test />} />
                        <Route exact path="/test/partners" render={() => <Partners />} />
                        <Route exact path="/test/login" render={() => <TestLogin />} />
                    </UserContextProvider>
                    <Route exact path="/test/stream" render={() => <Stream />} />
                    <Route exact path="/game" render={() => <Game />} />
            </div>
        </BrowserRouter>
    );
}

export default App;
