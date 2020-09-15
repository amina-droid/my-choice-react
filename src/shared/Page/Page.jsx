import React from 'react';
import cn from 'classnames';

import s from './Page.module.sass';

const Page = ({ className = '', children }) => (
    <div className={cn(s.page, className)}>{children}</div>
);

export default Page;
