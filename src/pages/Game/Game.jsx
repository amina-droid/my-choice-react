import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { PlayerContext } from '../../context/player/player';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Button from '../../shared/Button/Button';
import Chat from '../../components/Chat/Chat';

import s from './Game.module.sass';

import { ReactComponent as Back } from '../../icons/back.svg';


const Game = () => {
    const { userName } = useContext(PlayerContext);
    const history = useHistory();
    const navigateToBack = () => history.push('/rooms');
    
    if (!userName) {
        return (<Redirect to="/game/login" />)
    }

    return (
        <Page className={s['game-page']}>
            <Button className={s['game-page__button_back']} onClick={navigateToBack}>
                <Back />
            </Button>
            <Card className={s['game-card']} title="Игра в разработке" />
            <Chat />
        </Page>
    )
}

export default Game;