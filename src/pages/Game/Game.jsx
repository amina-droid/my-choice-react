import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../shared/Page/Page';
import Card from '../../shared/Card/Card';
import Button from '../../shared/Button/Button';

import s from './Game.module.sass';


const Game = () => {
    const history = useHistory();
    const navigateTo = () => history.push('/');
    
    return (
        <Page className={s['game-page']}>
            <Card className={s['game-card']} title="Игра в разработке">
                <Button onClick={navigateTo} className={s['game__button']}>Вернуться назад</Button>
            </Card>
        </Page>
    )
}

export default Game;