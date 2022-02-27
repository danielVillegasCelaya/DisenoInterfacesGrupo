import React from 'react';
import {Row,Form} from 'react-bootstrap';
import BuscadorRegion from './BuscadorRegion';
import Boton from './Boton';

class SelectorRegion extends React.Component{
    constructor(props){
        super(props);
        this.reference=props.reference;
        this.onClickForm=props.onClickForm;
    }

render(){
    return(
        <Form>
            <Row>
                <BuscadorRegion reference={this.reference}/>
            </Row>
            <p/>
            <Boton text="Actualizar" onClickButton={this.onClickForm}/>
        </Form>
    );
}

}
export default SelectorRegion;
