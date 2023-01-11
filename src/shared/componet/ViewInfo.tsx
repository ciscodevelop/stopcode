import React, { useState } from "react";
import Separetor from "./Separetor";
import { DataUsersField } from "../users/DataUsersField";
import SingleInfo from "./SingleInfo";
import UsersApi from "../users/UsersApi";
import MapsInfo from "./MapsInfo";
const ViewInfo = () => {
  const [indexUser, setIdexUser] = useState(0);
  const { users } = UsersApi();
  const selectedUser = users[indexUser];
  const joinInfoUsers = selectedUser
    ? {
        ...selectedUser,
        ...selectedUser.address,
        ...selectedUser.company,
        nameUser: selectedUser.name,
        ...selectedUser.address.geo,
      }:{ name: "carciacmento in corso..." };
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
    <>
      <div className="container-title">
        <h1 className="title-center">
          {`${joinInfoUsers.nameUser} ${joinInfoUsers.username}`}
        </h1>
      </div>
      <div className="container-single-info">
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
          <button
            className="btn btn-primary m-2 btn-beford"
            disabled={indexUser === 0}
            onClick={beforHandler}>
            Back
          </button>
          <button
            className="btn btn-primary m-2 btn-next"
            disabled={indexUser === users.length - 1}
            onClick={nextHandler}>
            Next
          </button>
        </div>
        <MapsInfo
          lat={parseInt(joinInfoUsers.lat)}
          long={parseInt(joinInfoUsers.lng)}
        />
      </div>
    </>
  );
};

export default ViewInfo;
