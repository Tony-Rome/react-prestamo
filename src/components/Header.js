import React, {Fragment} from 'react';

const Header = (props) => {

    console.log(props);

    return(
        <Fragment>
            <h1>{props.titulo}</h1>
            <h1>{props.descripcion}</h1>
        </Fragment>
    )

    
}

export default Header;