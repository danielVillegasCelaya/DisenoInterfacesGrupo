import React from "react";
import COMIDAS_LISTAR_REGIONES from '../data/ConstantesApi';
import uuid from "react-uuid";
import {Col,Form} from 'react-bootstrap';

class BuscadorRegion extends React.Component{
    constructor(props){
        super(props);
        this.reference=props.reference;
        this.region=[]
    }

    /**
     * Recuperamos LAS REGIONES
     */
    async componentDidMount(){
        const responseRegion=await fetch(COMIDAS_LISTAR_REGIONES);
        const responseDataRegion=await responseRegion.json();
        this.region=responseDataRegion.data;
       // this.setState({ region: responseDataRegion.meals, selectedItem: responseDataRegion.meals[0] });
    }

render(){
    return(
        <Form.Group as={Col}>
            <Form.Label>Region</Form.Label>
            <Form.Select ref={this.reference}>
                {this.region.map((item)=>{
                    return(
                        <option key={uuid()} value={item.strArea}>
                            {item.strArea}
                        </option>
                    )
                })}
            </Form.Select>
        </Form.Group>
    )
}


}
export default BuscadorRegion;