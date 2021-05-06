import React from "react";
import { DrawerItems } from "react-navigation-drawer";

export default class CustomSideBarMenu extends React.Component {

    render(){
        return(
            <DrawerItems {...this.props} />
        )
    }
}