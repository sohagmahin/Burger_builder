import React from 'react';
import Aux from '../../aux/aux';
import classes from './Layout.module.css'

const layout = (props) => (
    <Aux>
        <div> ToolBar, SideDrawer, Backdrop  </div>
        <main className = {classes.Content}> {props.children} </main>
    </Aux>
)

export default layout;