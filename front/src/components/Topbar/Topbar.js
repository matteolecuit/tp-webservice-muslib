import React from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import LoginModalForm from '../../components/Modals/LoginModal'
import RegisterModalForm from "../Modals/RegisterModal";
import { TransitionPropTypeKeys } from "reactstrap/lib/utils";
import { Button, Divider } from "@material-ui/core";
import ChangeUserInfoModalForm from "../Modals/ChangeUserInfosModal";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Topbar = styled.section`
  display: flex;
  background-color: #FFFFFF;
  height: 75px;
  width: 100%;
  z-index: 1;
  position: fixed;
`;

const TopbarSearch = styled.section`
  flex: 8;
`;

const TopbarProfile = styled.section`
    display: flex;
    flex: 2;
    border-left: solid 1px rgba(0,0,0,0.3);
`;

const TopbarProfileImg = styled.section`
    height: 100%;
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 50%;
    }
`;

const TopbarProfileName = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
    
    span {
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

const TopbarProfileSettings = styled.section`
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
`;
function addItemToState(item) {
    this.setState(prevState => ({
        items: [...prevState.items, item]
    }))
}

function logout() {
    localStorage.clear();
    window.location.reload(false);
}


export default (props) => {
    let topbar = null;

    let manageIcon = [];
    if (props.admin) {
        manageIcon =
            <TopbarProfileSettings>
                <Link to="/manage/artists">
                    <Icon
                        name="settings-outline"
                        size="large"
                        fill="#000000"     // small, medium, large, xlarge
                        animation={{
                            type: "pulse",  // zoom, pulse, shake, flip
                            hover: true,
                            infinite: false
                        }}
                    />
                </Link>
            </TopbarProfileSettings>
    }

    if (localStorage.getItem("token")) {
        topbar =
            <Topbar>
                <TopbarSearch></TopbarSearch>
                <Button
                    color="success"
                    onClick={logout}
                    style={{ float: "left", marginRight: "10px" }}>Deconnexion
                </Button>
                <TopbarProfile>
                    <TopbarProfileImg>
                        <ChangeUserInfoModalForm src={props.profilePic} />
                    </TopbarProfileImg>
                    <TopbarProfileName>
                        <span>{props.firstname}</span>
                    </TopbarProfileName>
                    {manageIcon}
                </TopbarProfile>
            </Topbar>

    } else {
        topbar =
            <Topbar>
                <TopbarSearch></TopbarSearch>
                <RegisterModalForm buttonLabel="Inscription" addItemToState={addItemToState} />
                <LoginModalForm buttonLabel="Connexion" addItemToState={addItemToState} />
            </Topbar>

    }
    return (
        topbar
    );
};
