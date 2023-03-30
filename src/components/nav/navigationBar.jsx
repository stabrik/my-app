import React from "react";
import './_navigationBar.scss'
import ChildCareIcon from "@mui/icons-material/ChildCare";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCopy from '@mui/icons-material/ContentCopy';

const NavigationBar = () => (
    <div className="nav">
        <MenuList>
            <MenuItem className={'nav-link'}>
                <ListItemIcon>
                    <ChildCareIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Moje dziecko</ListItemText>
            </MenuItem>
            <MenuItem className={'nav-link'}>
                <ListItemIcon>
                    <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Obecność</ListItemText>
            </MenuItem>
            <MenuItem className={'nav-link'}>
                <ListItemIcon>
                    <BabyChangingStationIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Wyposażenie</ListItemText>
            </MenuItem>
            <MenuItem className={'nav-link'}>
                <ListItemIcon>
                    <AutoStoriesIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Strefa edukacji</ListItemText>
            </MenuItem>
            <Divider className={'nav-break'} />
            <MenuItem className={'nav-link'}>
                <ListItemIcon>
                    <SettingsSuggestIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Ustawienia</ListItemText>
            </MenuItem>
        </MenuList>
    </div>
)

export default NavigationBar;