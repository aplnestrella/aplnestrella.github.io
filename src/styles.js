import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down('xs')]: {
            // backgroundColor: theme.palette.secondary.main,
            // paddingTop: '50px',
            paddingBottom: '200px'
        },
        [theme.breakpoints.up('md')]: {
            // paddingTop: '50px',
            paddingBottom: '200px'
        },
        [theme.breakpoints.up('lg')]: {
            // paddingTop: '50px',
            paddingBottom: '100px'
        }
        // paddingTop: '50px',
    },
    yellowLink: {
        cursor: 'pointer',
        color: '#edac58',
        '&:hover': {
            color: '#d59544',
        },
        '&:link': {
            textDecoration: 'none',
        },
        '&:visited': {
            textDecoration: 'none',
        },
        '&:active': {
            textDecoration: 'none',
        },
    },
    greenLink: {
        cursor: 'pointer',
        color: '#7ecabf',
        '&:hover': {
            color: '#48a99b',
        },
        '&:link': {
            textDecoration: 'none',
        },
        '&:visited': {
            textDecoration: 'none',
        },
        '&:active': {
            textDecoration: 'none',
        },
    },
    blueLink: {
        cursor: 'pointer',
        color: '#72c3e2',
        '&:hover': {
            color: '#49a5c8',
        },
        '&:link': {
            textDecoration: 'none',
        },
        '&:visited': {
            textDecoration: 'none',
        },
        '&:active': {
            textDecoration: 'none',
        },
    },
    redLink: {
        cursor: 'pointer',
        color: '#f0716f',
        '&:hover': {
            color: '#dd4f4c',
        },
        '&:link': {
            textDecoration: 'none',
        },
        '&:visited': {
            textDecoration: 'none',
        },
        '&:active': {
            textDecoration: 'none',
        },
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        // height: '100%',
        borderRadius: '25px',
        shadow: '5px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '10px 30px'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    welcome: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        [theme.breakpoints.down('md')]: {
            paddingTop: '100px',
            // paddingBottom: '250px'
        }
    },
    socials: {
        paddingTop: '30px',
    },
    socialIcon: {
        width: '35px',
        padding: '.3rem',
        '&:hover': {
            opacity: '0.7'
        }
    },
    aboutMe: {
        // height: '100%',
        backgroundColor: '#fafafa',
        borderColor: '72c3e2',
        boxShadow: '19',
        borderRadius: '25px',
        shadow: '5px',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100%',
        width: '100%',
        padding: '40px 30px',
        justifyContent: 'center',
        alignSelf: 'center',
        [theme.breakpoints.down('xs')]: {
            // backgroundColor: theme.palette.secondary.main,
            // paddingTop: '50px',
            marginRight: '20px',
        },
        [theme.breakpoints.up('md')]: {
            // paddingTop: '50px',
            marginRight: '0px',
        },
        [theme.breakpoints.up('lg')]: {
            // paddingTop: '50px',
            marginRight: '0px',
        },
    },
    position: {
        // height: '100%',
        margin: '5px 10px',
        backgroundColor: '#ffffff',
        borderRadius: '25px',
        // shadow: '5px',
        display: 'flex',
        flexDirection: 'column',
        // height: '100%',
        padding: '10px 30px',
        paddingTop: '20px'
    },
    logo: {
        height: '200px',
        justify: 'center',
    },
    intro: {
        margin: '0',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        // backgroundColor: '#fafafa',
    },
    icon: {
        // marginTop: '100px',
        height: '250px',
        justify: 'center',
    },
    learning: {
        // paddingTop: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        whiteSpace: 'normal'
    },
    map: {
        height: '500px',
        resizeMode: 'contain',
        justify: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '250px',
        }
        
    },
    journeys: {
        maxWidth: '100%',
        backgroundColor: '#7ecabf',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '40vh',
        whiteSpace: 'normal'
    },
    NLPjourney: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'right',
        width: '100vw',
        height: '100%',
    },
    NLPimg: {
        height: '250px',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
}));

export default useStyles;