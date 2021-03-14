import React from 'react';

function Header(props) {

    return(
        <header>
            <hi>Felix Gutierrez</hi>
            {props.children}
        </header>
    )
}

export default Header;