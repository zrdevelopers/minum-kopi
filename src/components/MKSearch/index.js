import { AppBar, Toolbar, TextField, InputAdornment } from '@mui/material';
import { Search, LocalCafe } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Index = (props) => {
  const { title } = props;
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{
        background: 'none',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ paddingLeft: { xs: '0' }, paddingRight: { xs: '0' } }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder={title}
          inputProps={{ maxLength: 25 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: theme.palette.secondary.main }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <LocalCafe sx={{ color: theme.palette.secondary.main }} />
              </InputAdornment>
            ),
            sx: {
              borderRadius: '50px',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.main
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.secondary.main
              }
            }
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Index;
