import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette:{
    purple : {
      light:'#EDE7F5',
      dark :'#5B37AD',
      veryDark :'#42299C'
    },
    blue:{
      dark :'#4C99E5',
      light:'#A4D1F8',
      veryDark:'#1F65BC'
    },
    myGray : '#78848d',
    myGreen:{
      dark:'#39C65C',
      light:'#EBF9EE'
    } ,
    myRed:{
      dark: '#ED4C3E',
      light:'#FAEDE9'
    }
  },
  
});

export default theme;