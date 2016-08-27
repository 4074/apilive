import React from 'react'
import { Menu } from 'antd'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

const SideMenu = React.createClass({
    getInitialState() {
        return {
            current: '1'
        }
    },

    handleClick(e) {
        if (e.key !== this.state.current) {
            this.setState({
                current: e.key
            })
        }
    },

    render() {
        return (
            <div className="side-menu">
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} defaultOpenKeys={['sub1', 'sub2']} mode="inline">
                    <SubMenu key="sub1" title="导航一">
                        <Menu.Item key="1">选项一</Menu.Item>
                        <Menu.Item key="2">选项二</Menu.Item>
                        <Menu.Item key="3">选项三</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="导航二">
                        <Menu.Item key="4">选项五</Menu.Item>
                        <Menu.Item key="5">选项六</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
})

export default SideMenu