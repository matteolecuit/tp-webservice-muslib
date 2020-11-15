import React from "react";
import styled from "styled-components";
import Icon from 'react-eva-icons';
import LoginModalForm from '../../components/Modals/LoginModal'
import RegisterModalForm from "../Modals/RegisterModal";
import { TransitionPropTypeKeys } from "reactstrap/lib/utils";


const Topbar = styled.section`
  display: flex;
  background-color: #FFFFFF;
  height: 10vh;
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

function updateState(item) {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
        // destructure all items from beginning to the indexed item
        ...this.state.items.slice(0, itemIndex),
        // add the updated item to the array
        item,
        // add the rest of the items to the array from the index after the replaced item
        ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
}

function deleteItemFromState(id) {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
}


export default (props) => {
    return (
        <Topbar>
            <TopbarSearch></TopbarSearch>
            <RegisterModalForm buttonLabel="Inscription" addItemToState={addItemToState} />
            <LoginModalForm buttonLabel="Connexion" addItemToState={addItemToState} />
            <TopbarProfile>
                <TopbarProfileImg>
                    <img src={props.profilePic} alt="profile picture" height="35px" width="35px" />
                </TopbarProfileImg>
                <TopbarProfileName>
                    <span>{props.firstname} {props.lastname}</span>
                </TopbarProfileName>
                <TopbarProfileSettings>
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
                </TopbarProfileSettings>
            </TopbarProfile>
        </Topbar>
    );
};
