import React from './node_modules/reacte_modules/react';
import PropTypes from './node_modules/prop-typesules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles-ui/core/styles';
import Drawer from './node_modules/@material-ui/core/Drawer-ui/core/Drawer';
import Button from './node_modules/@material-ui/core/Button-ui/core/Button';
import List from './node_modules/@material-ui/core/Listal-ui/core/List';
import Divider from './node_modules/@material-ui/core/Dividerui/core/Divider';
import ListItem from './node_modules/@material-ui/core/ListItemi/core/ListItem';
import ListItemIcon from './node_modules/@material-ui/core/ListItemIconre/ListItemIcon';
import ListItemText from './node_modules/@material-ui/core/ListItemTextre/ListItemText';
import InboxIcon from './node_modules/@material-ui/icons/MoveToInboxons/MoveToInbox';
import MailIcon from './node_modules/@material-ui/icons/Maill-ui/icons/Mail';

const styles = {
list: {
    width: 250,
},
fullList: {
    width: 'auto',
},
};

class Hamburger extends React.Component {
state = {
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
};

toggleDrawer = (side, open) => () => {
    this.setState({
    [side]: open,
    });
};

render() {
    const { classes } = this.props;

    const sideList = (
    <div className={classes.list}>
        <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        <Divider />
        <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
    </div>
    );

    const fullList = (
    <div className={classes.fullList}>
        <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
        <Divider />
        <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
            </ListItem>
        ))}
        </List>
    </div>
    );

    return (
    <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
        <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
        >
            {sideList}
        </div>
        </Drawer>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
        <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
        >
            {fullList}
        </div>
        </Drawer>
        <Drawer
        anchor="bottom"
        open={this.state.bottom}
        onClose={this.toggleDrawer('bottom', false)}
        >
        <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
        >
            {fullList}
        </div>
        </Drawer>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
        <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
        >
            {sideList}
        </div>
        </Drawer>
    </div>
    );
}
}

Hamburger.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hamburger);