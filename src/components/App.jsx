import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  function createCard(contacts){

     return( <Card 
        key ={contacts.id}
        name= {contacts.name}
        imgURL ={contacts.imgURL}
        phone = {contacts.phone}
        email = {contacts.email}
      />
     )
  }
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
     {contacts.map(createCard)}
      {/* <Card
        {...contacts[0]}
      />
      <Card
        {...contacts[1]}
      />
      <Card
        {...contacts[2]}
      /> */}
    </div>
  );
}

export default App;
