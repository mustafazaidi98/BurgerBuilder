import React from 'react'
import Aux from '../../HOC/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends React.Component {
    state = {
        showSideDrawer:false
    }
    sideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    toggleDrawerHandler=()=>{
        this.setState((prevState) => {return{showSideDrawer:!prevState.showSideDrawer}})
    }
    render(){
        return (
        <Aux>
        <Toolbar toggleDrawer={this.toggleDrawerHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
        </Aux>
    )
}
}
export default Layout;