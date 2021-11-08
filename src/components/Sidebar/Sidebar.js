import React from 'react'
import './Sidebar.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SpeedIcon from '@material-ui/icons/Speed';
import CachedIcon from '@material-ui/icons/Cached';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import RedditIcon from '@material-ui/icons/Reddit';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Filter1Icon from '@material-ui/icons/Filter1';

function Sidebar() {
    return (
        <div className="sidebar">
      <SidebarRow Icon={DashboardIcon} title="Dashboard" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Backlog Remover" />
      <SidebarRow Icon={Filter1Icon} title="Rank up" />
      <SidebarRow Icon={SpeedIcon} title="Speed up" />
      <SidebarRow Icon={MyLocationIcon} title="Accuracy up" />
      <SidebarRow Icon={CachedIcon} title="Revision" />
      <SidebarRow Icon={RedditIcon} title="Test Creator" />
      <SidebarRow Icon={AssignmentIcon} title="Assignment Creator" />
      <SidebarRow Icon={VideoLibraryIcon} title="Study Material" />
      <SidebarRow Icon={MenuBookIcon} title="Forumula Sheet" />
        </div>
    )
}

export default Sidebar