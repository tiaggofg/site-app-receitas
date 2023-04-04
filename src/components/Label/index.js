import { Children } from 'react';
import './Label.css';

function Label({children}) {
    return (
        <label>{children}</label>
    )
}

export default Label;