import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../forms/Form.js';

/*export default function modifycard(obj) {
    return (
        <div>
            <Route exact path="/modifycard" component={() =>
                <>
                    <p>Modify card</p>
                    <p>You have {obj.listCards.length} cards:</p>
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

/*
function printfcard(obj) {
    var list="";
    for (let i = 0; i < obj.listCards.length; i++) {
        <p>
            {obj.listCards[i].last_4}
            {obj.listCards[i].brand}
            {obj.listCards[i].expired_at}
        </p>
    }
}
*/
function printfcard(listCards, usrID) {
    let str = listCards.map((card) => {
<<<<<<< HEAD
        console.log(usrID);
        //if (card.usrID == usrID) {
=======
        alert(card.user_id + " vs "+ usrID);
        if (card.user_id == usrID) {
>>>>>>> 68db3db98f50e2829ad8d1881a1d9c087b09c93a
            return (
                <p>
                    Your {card.brand} card (XXXX-XXXX-XXXX-{card.last_4}) expire at {card.expired_at}.
            </p>
            );
        //}
    });
    return (str);
}

export default function modifycard(obj, listCards, usrID) {
    return (
        <div>
            <Route exact path="/modifycard" component={() =>
                <>
                    <p>Modify card</p>
                    {printfcard(listCards, obj.getCurrentID())}
                    {obj.connected() || obj.acceptNotLoginFnc() ?
                        <Form inputNames={["last_4", "newBrand"]} inputTexts={["Last 4 digits of the card", "New brand"]} buttonText={"Change the brand"} onSend={obj.handleBrandChangeForm} />
                        : "Connection requise"}
                </>
            } />
        </div>
    )




}
