import { makeStyles } from "@mui/styles";



export const useStyles = makeStyles((theme) => ({
    formDiv: {
        width: '100%',
        height: '40%',
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
        '& h4': {
            textTransform: 'uppercase'
        },
        "& p": {
            marginTop: '20px',
            fontSize: '14px',
            color: '#616161',
            marginBottom: '30px',
 
        }
     },
     form: {
         // display: 'flex',
         // flexDirection: 'column',
         // justifyContent: 'center',
         // alignItems: 'center',
         width: '50%',
     },
     formForgot: {
         width: '90%',
         textAlign: 'right',
         '& p': {
             color: 'rgba(0, 82, 53, 0.7)',
             cursor: 'pointer'
         }
     },
     formDes: {
         width: '40%',
         textAlign: 'center'
         
     },
     formBtn: {
         width: '90%',
         height: '50px',
         backgroundColor: '#005235',
         marginTop: '20px',
         border: 'none',
         color: '#ffffff',
         fontSize: '16px',
         textTransform: 'uppercase',
         cursor: 'pointer'
     },
     formInput: {
         width: '100%',
         height: '60px',
         backgroundColor:'rgba(0, 82, 53, 0.03)',
         border: 'none',
         padding: '10px',
         marginBottom: '10px',
         '& input':{
             fontSize: '16px',
             paddingLeft: '10px',
         }
     },
     formIcons: {
         '& p':{
             textAlign: 'center' ,
             color: '#000000'
         }
     },
     textToreg: {
         width: '50%',
         height: '50px',
         display: 'flex',
         justifyContent: 'center',
         "& p:first-child": {
             color: '#000000'
         },
         '& p:last-child': {
             color: '#005235',
             marginLeft: '5px',
             cursor: 'pointer'
         }
     },
     btnShow: {
         position: 'absolute',
         right: '0',
         // marginTop: '10px',
         width: '56px',
         height: '60px',
         border: 'none',
         backgroundColor: 'transparent',
         cursor: 'pointer'
     },
     confirmInputWrapper: {
         position: 'relative'
     },
     label: {
         fontSize: '14px',
         marginLeft: '5px',
         fontWeight: '400',
         color: 'red', 
     },
     btnGoogle: {
         width: '90%',
         height: '50px',
         marginTop:'20px',
         display: 'flex',
         justifyContent:'space-around',
         // alignItems: 'center',
         padding:'10px',
         backgroundColor: '#F5F5F5',
         border: 'none',
         cursor: 'pointer'
     },
     googleWrapper: {
         display: 'flex',
         justifyContent:'space-around',
         alignItems: 'center',
         '& p': {
             marginTop: '25px'
         }
     }
}))