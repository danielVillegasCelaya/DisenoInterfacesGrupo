import React from "react";
import {COMIDAS_LISTAR_REGIONES} from '../data/ConstantesApi';

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
        console.log("Ha entrado");
        const responseRegion=await fetch(COMIDAS_LISTAR_REGIONES);
        const responseDataRegion=await responseRegion.json();
        console.log("Prueba regiones",responseDataRegion.meals);
        this.region=responseDataRegion.meals;
    }

render(){
    if(this.region===null){
        return(
            <div>
                Hola
            </div>
        );
    }else{
        return(
            <Form.Group as={Col}>
                <Form.Label>Organizar por region</Form.Label>
                <Form.Select ref={this.reference}>
                    {this.region.map((item)=>{
                        return(
                            <option value={item.strArea}>
                                {item.strArea}
                            </option>
                        );
                    })}
                </Form.Select>
            </Form.Group>
        );
    }
    
}


}
export default BuscadorRegion;