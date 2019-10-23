import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../forms/Form.js';

export default function modifycard(obj) {
    return (
        <div>
            <Route exact path="/modifycard" component={() =>
                <>
                    <p>Modify card</p>
                    {obj.connected() || obj.acceptNotLoginFnc() ?
                        <Form inputNames={["last_4", "newBrand"]} inputTexts={["Last 4 digits of the card", "New brand"]} buttonText={"Change the brand"} onSend={obj.handleBrandChangeForm} />
                        : "Connection requise"}
                </>
            } />
        </div>
    )
    /*
    const tabcartes = [1,2,3];

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    return (
        <div>
            <Route exact path="/modifycard" component={() =>
                <>
                    <p>Modify a card page WIP</p>

                    <p>Voir la liste de mes cartes:</p>
                    <label>
                        <select value={this.state.value} onChange={this.handleChange}>
                                <option value={this.tabcartes[i]}>Carte n° +'i'</option>
                            } 
                    </label>

                    <p>Modifier le code pin de la carte</p>
                </>
            } />
        </div>
    )
    */
}