import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { SocketIOProvider } from './socket';

import GameLogin from './pages/GameLogin/GameLogin';
import Main from './pages/Main/Main';
import Lobby from './pages/Lobby/Lobby';
import Test from './pages/Test/Test';
import TestLogin from './pages/TestLogin/TestLogin';
import Partners from './pages/Partners/Partners';
import Stream from './pages/Stream/Stream';
import Game from './pages/Game/Game';
import Rooms from './pages/Rooms/Rooms';
import Chat from './components/Chat/Chat';
import Timer from './components/Timer/Timer';

import { APIadress } from './utils/API';

import { UserContextProvider } from './context/user/user';
import { TimerContextProvider } from './context/timer/timer';
import { PlayerContextProvider } from './context/player/player';

import './App.sass';


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className="bg" />
                <Route exact path="/" render={() => <Main />} />
                <Route exact path="/lobby" render={() => <Lobby />} />
                <Route exact path="/test" render={() => <Test />} />
                <Route exact path="/test/login" render={() => <TestLogin />} />
                <Route exact path="/test/partners" render={() => <Partners />} />
                <Route exact path="/test/stream" render={() => <Stream />} />
                <SocketIOProvider url={APIadress}>
                    <PlayerContextProvider>
                        <Route exact path="/rooms" render={() => <Rooms />} />
                        <Route exact path="/game" render={() => <Game />} />
                        <Route exact path="/game/login" render={() => <GameLogin />} />
                        <Chat />
                    </PlayerContextProvider>
                </SocketIOProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
