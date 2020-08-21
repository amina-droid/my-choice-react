import React from 'react';
import ReactPlayer from 'react-player';

import s from './Stream.module.sass';

const Stream = () => {
    return (
        <ReactPlayer className={s['stream__video']} controls playing url={question.video} />
    )
}

export default Stream;