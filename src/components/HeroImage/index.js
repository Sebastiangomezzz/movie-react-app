import react from 'react';

//styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = (props) =>( //en lugar de poner "props" aquí, podríamos desestructurar y poner solamente ({image, title, text}) y nos ahorraríamos escribir "props" cada vez más abajo.
                                                                
    <Wrapper image={props.image}>
        <Content>
            <Text>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;

