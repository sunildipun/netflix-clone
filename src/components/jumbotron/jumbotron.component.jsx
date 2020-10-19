import React from 'react';

import { Inner, Image, Item , Pane, Title, SubTitle } from './style/jumbotron';

const Jumbotron = ({children ,direction = 'row', ...restProps}) => {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item> 
    )
};



Jumbotron.Pane = function JumbotronPane ({children, ...restProps}){
    return <Pane { ...restProps }>{children}</Pane>
};

Jumbotron.Title = function JumbotronTitle ({children, ...restProps}){
    return <Title { ...restProps }>{children}</Title>
};

Jumbotron.SubTitle = function JumbotronSubTitle ({children, ...restProps}){
    return <SubTitle { ...restProps }>{children}</SubTitle>
};

Jumbotron.Image = function JumbotronImage ({children, ...restProps}){
    return <Image { ...restProps }>{children}</Image>
}

export default Jumbotron;