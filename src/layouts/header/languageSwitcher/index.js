import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from '@mui/material';

import { CheckCircleRounded, RadioButtonUncheckedRounded } from '@mui/icons-material';

const Index = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        variant="outlined"
        color="inherit"
        className="__link"
        sx={{
          border: '1px solid rgba(158, 158, 158, 0.5)',
          borderRadius: '40px'
        }}
        aria-describedby="languageSwitcher"
        onClick={handleClick}
      >
        <img
          src="https://placehold.co/18x18/webp"
          alt="selected language"
          width="18"
          height="18"
          style={{
            borderRadius: '50%',
            marginRight: '8px',
            border: '1px solid #ddd'
          }}
          loading="lazy"
        />
        {i18n.language === 'id' ? 'ID' : 'EN'}
      </Button>
      <Popover
        id="languageSwitcher"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <List aria-label="language selection" sx={{ padding: '0' }}>
          {['id', 'en'].map((item, idx) => (
            <ListItem
              key={item?.id || idx}
              divider
              sx={{ padding: '0' }}
              onClick={() => changeLanguage(item)}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: '30px' }}>
                  {i18n.language === item ? (
                    <CheckCircleRounded sx={{ color: '#e27900' }} />
                  ) : (
                    <RadioButtonUncheckedRounded />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={(item === 'id' && 'Indonesia') || (item === 'en' && 'English')}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Popover>
    </Fragment>
  );
};

export default Index;
