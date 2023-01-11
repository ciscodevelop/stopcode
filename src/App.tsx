import React, { useState } from "react";
import Separetor from "./shared/componet/Separetor";
import SingleInfo from "./shared/componet/SingleInfo";
//import { users } from "./shared/users/DatiUsersFix";
import { DataUsersField } from "./shared/users/DataUsersField";
import UsersApi from "./shared/users/UsersApi";

function App() {
  const [indexUser, setIdexUser] = useState(0);
  const { users } = UsersApi();
  const selectedUsers = users[indexUser];
  const joinInfoUsers = selectedUsers
    ? {
        ...selectedUsers,
        ...selectedUsers.address,
        ...selectedUsers.company,nameUser:selectedUsers.name,
        ...selectedUsers.address.geo,
      }
    : { name: "carciacmento in corso..." };

  const nextHandler = () => {
    if (indexUser < users.length - 1) {
      setIdexUser(indexUser + 1);
    }
  };
  const beforHandler = () => {
    if (indexUser > 0) {
      setIdexUser(indexUser - 1);
    }
  };
  return (
    <header className="container">
      <div className="container-title">
        <h1 className="title-center">Esercizio</h1>
      </div>
      {DataUsersField.map((ele: any) => (
        <>
          <Separetor classList={ele.ico} text={ele.title} />
          {ele.info.map((userInfo: any) => (
            <SingleInfo
              label={userInfo.label}
              icon={userInfo.ico}
              text={joinInfoUsers[userInfo.field]}
            />
          ))}
        </>
      ))}
      <br />
      <div className="btn-container">
        <button className="btn btn-primary m-3 btn-beford" disabled={indexUser ===0} onClick={beforHandler}>
          Dietro
        </button>
        <button className="btn btn-primary m-3 btn-next" disabled={indexUser ===users.length-1} onClick={nextHandler}>
          Avanti
        </button>
      </div>
    </header>
  );
}

export default App;
