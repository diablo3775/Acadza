import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Header() {
    return (
        <div className="header"> 
            <div className="header__center">
              <img src="https://pbs.twimg.com/profile_images/1370346335543513090/aGQYWd86_400x400.jpg" alt='acadza' />
              <span>ACADZA</span>
            </div>

            <div className="header__left">
                 <div className="header__te">
                 <p className="header__tee">Activity <i className="arrow down"></i></p>
                 <p>Tool Guide <i className="arrow down"></i></p>
                 </div>

                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search..." type="text" />
                </div>
            </div>
              
            <div className="header__right">
               <IconButton>
                    <NotificationsActiveIcon className="notification" />
                </IconButton>
                <div className="header__info">
                    <Avatar src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
                </div>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Header