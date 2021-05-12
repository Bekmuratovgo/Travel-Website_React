import React, { useContext, useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import './Navbar.css'
import { Link } from 'react-router-dom';
import { topicContext } from '../../contexts/TopicContext';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    backgroundColor: fade(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.50),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
      color: 'white',
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
      color: 'white',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  // SEARCH
  const { search, searchData , cartLength, lengthFavorite} = useContext(topicContext)
   const [searchValue, setSearchValue] = useState("");

  const handleValue = (e) =>{
    setSearchValue(e.target.value)
    search(e.target.value)
  }

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);



  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (
    <div className={classes.grow} id="main-nav">
      
      <AppBar position="static" style={{ background: 'transparent', boxShadow: ''}}> 
        <Toolbar>
          
          <Typography className={classes.title} variant="h6" >
            <Link to="/"style={{color: 'White'}}>EasyFly</Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon} >
              <SearchIcon />
            </div>
            <InputBase className="search-item"
              placeholder="Search…"
              onChange={handleValue}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
              <div className="search-result">
                {searchData.map(item => (
                  <Link to={`/details/${item.id}`}>
                    <div>{item.title}</div>
                  </Link>
                ))}
              </div>

          </div>
          
          <div className={classes.grow} />
          <Link to="/admin" style={{color: 'White',marginRight:'20px'}}>
            ADMIN
          </Link>
          
          <div className={classes.title} style={{textAlign:'center'}} variant="h6" >
            <Link to="/contact" style={{color: 'White'}}>
              CONTACT
            </Link>
          </div>
                  {/* КОРЗИНКА */}
          <div className={classes.title} style={{textAlign:'center',marginRight:'20px'}} variant="h6" >
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={cartLength} color="secondary">
              <Link to="/basket" style={{color: 'White'}}>
                  <ShoppingCartIcon />
              </Link>
            </Badge>
          </IconButton>
          </div>

          {/* ИЗБРАННОЕ */}
          <div className={classes.title} style={{textAlign:'center',marginRight:'20px'}} variant="h6" >
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={lengthFavorite} color="secondary">
              <Link to="/favorite" style={{color: 'White'}}>
                  <BookmarkBorderIcon />                  
              </Link>
            </Badge>
          </IconButton>
          </div>
          
          {/* <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
          </div> */}
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
}
