import React, { useState, useEffect, useRef } from 'react';

//image of the icon 
import searchIcon from '../../images/search-icon.svg';

//Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('')
    const initial = useRef(true);//Este hook nos retorna un objeto con una propiedad current que es mutable y cuyo valor persiste durante los renderizados y ciclo de vida del componente.
    
    useEffect(()=>{ //retrasa el hook useHomeFetch medio segundo

        if(initial.current){//si el valor es false se ejecutará el resto del código o sea, si no es el primer renderizado.
            initial.current = false;
            return;
        }
        const timer = setTimeout(()=>{
            setSearchTerm(state);
        }, 500)

        return ()=> clearTimeout(timer)//limpia el intérvalo para que no se creen múltiples intérvalos.
    },[setSearchTerm, state])

    return(
        <Wrapper>
            <Content>
                <img src= {searchIcon} alt='search-icon'/>
                <input 
                    type='text' 
                    placeholder='Search Movie'
                    onChange= {event => setState(event.currentTarget.value)}
                    value={state}

                />
            </Content>
        </Wrapper>
    )

}

export default SearchBar;


