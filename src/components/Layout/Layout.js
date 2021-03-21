import React from 'react';
import Aux from '../../hoc/Aux.js';
import classes from './Layout.module.css';

const layout = (props) => (
	<Aux>
		<div>Toolbar, Side Drawer, BackDrop</div>
		<main className={classes.Content}>{props.children}</main>
	</Aux>
);

export default layout;
