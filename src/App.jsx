import React, { useRef } from 'react';
import { Typography, AppBar, Button, Box, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import 'animate.css';
import { shadows } from '@mui/system';
import ReactPlayer from "react-player"
import Slide from 'react-reveal/Slide';
import Reveal from 'react-reveal/Reveal';

import useStyles from './styles';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Dongle',
      'sans-serif',
    ].join(','),
  },});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const App = () => {
    const classes = useStyles();
    const nlpSection = useRef(null);
    const scicommSection = useRef(null);
    const aiSection = useRef(null);

    const scrollDown = (ref) => {
        window.scrollTo({
          top: ref.current.offsetTop,
          behavior: 'smooth',
        });
      };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography varwiant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <main>
                <div className={classes.container}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={7}>
                            <Container className={classes.welcome}>
                                <Reveal effect="animate__fadeIn">
                                <Typography variant="h2" style={{ lineHeight: 1, fontWeight: 400, color: "#72c3e2" }} align="center" gutterBottom>
                                    Hey there! My friends call me
                                </Typography>
                                </Reveal>
                                <br />
                                <Reveal effect="animate__tada animate__delay-5s">
                                <img className={classes.logo} src='/assets/Apol logo.png' alt="logo" />
                                </Reveal>
                                <br /><br />
                                <Reveal effect="animate__fadeIn animate__delay-5s">
                                <Typography variant="h4" style={{ lineHeight: 1, marginRight: "50px", marginLeft: "50px",fontWeight: 400, color: "#706f6f" }} align="center" paragraph>
                                    I'm 
                                    <space /> <b><a className={classes.redLink} href="https://www.linkedin.com/in/apolline-estrella/" >Apolline Estrella</a></b>, <space />
                                    a BS Computer Science junior at the University of the Philippines Diliman.
                                    I'm an <space />
                                    <b className={classes.yellowLink} onClick={() => scrollDown(nlpSection)}>NLP enthusiast</b>, <space />
                                    a <b className={classes.greenLink} onClick={() => scrollDown(scicommSection)}>science communicator</b>, <space />
                                    and more recently, 
                                    an <b className={classes.blueLink} onClick={() => scrollDown(aiSection)}>AI explorer</b>.
                                </Typography>
                                </Reveal>
                                {/* <Reveal effect="animate__fadeIn animate__delay-1s">
                                <Typography variant="h4" style={{ lineHeight: 1, marginRight: "50px", marginLeft: "50px", fontWeight: 400, color: "#edac58" }} align="center" paragraph>
                                    I'm an <space />
                                    <u className={classes.yellowLink} onClick={() => scrollDown(nlpSection)}>NLP enthusiast</u>, <space />
                                    a <u className={classes.yellowLink} onClick={() => scrollDown(scicommSection)}>science communicator</u>, <space />
                                    and more recently, 
                                    an <u className={classes.yellowLink} onClick={() => scrollDown(nlpSection)}>AI explorer</u>.
                                </Typography>
                                </Reveal> */}
                                <Reveal effect="animate__fadeIn animate__delay-1s">
                                <div className={classes.socials}>
                                    <a href="https://twitter.com/aplnestrella"><img src="/assets/Twitter.png" className={classes.socialIcon}/></a>
                                    <a href="https://www.instagram.com/aplnestrella/"><img src="/assets/Instagram.png" className={classes.socialIcon}/></a>
                                    <a href="https://www.youtube.com/channel/UCklT2EyCNRlwzK8KYabLnvQ"><img src="/assets/Youtube.png" className={classes.socialIcon}/></a>
                                    <a href="https://soundcloud.com/apollineestrella"><img src="/assets/Soundcloud.png" className={classes.socialIcon}/></a>
                                    <a href="https://www.linkedin.com/in/apolline-estrella/"><img src="/assets/Linkedin.png" className={classes.socialIcon}/></a>
                                    <a href="https://github.com/aplnestrella"><img src="/assets/Github.png" className={classes.socialIcon}/></a>
                                </div>
                                </Reveal>
                            </Container>
                        </Grid>
                        
                        <Grid item xs={12} sm={12} md={5} className={classes.welcome}>
                            <Reveal effect="animate__fadeInRight">
                                <Box borderColor="grey.500" className={classes.aboutMe}>
                                    <Typography variant="h3" style={{ lineHeight: 1, fontWeight: 700, color: "#706f6f" }} align="center" gutterBottom>
                                        What have I been up to?
                                    </Typography>
                                    <Box className={classes.position}>
                                        <Typography style={{ lineHeight: .5, fontSize: 30, fontWeight: 700, color: "#e25d5b" }} align="center" gutterBottom>
                                            Academic Affairs Committee Head
                                        </Typography>
                                        <Typography style={{ lineHeight: 1, fontSize: 20, fontWeight: 700, color: "#706f6f" }} align="center" gutterBottom>
                                            UP Association of Computer Science Majors <br/>
                                            (UP CURSOR)
                                        </Typography>
                                        <Typography style={{ lineHeight: 1, fontSize: 20, fontWeight: 400, color: "#706f6f" }} align="center" gutterBottom>
                                            June 2021 - Present
                                        </Typography>
                                    </Box>
                                    <Box className={classes.position}>
                                        <Typography style={{ lineHeight: .5, fontSize: 30, fontWeight: 700, color: "#edac58" }} align="center" gutterBottom>
                                            Programs Head
                                        </Typography>
                                        <Typography style={{ lineHeight: 1, fontSize: 20, fontWeight: 700, color: "#706f6f" }} align="center" gutterBottom>
                                            Computer Science Summit 6.0
                                        </Typography>
                                        <Typography style={{ lineHeight: 1, fontSize: 20, fontWeight: 400, color: "#706f6f" }} align="center" gutterBottom>
                                            September 2021 - Present
                                        </Typography>
                                    </Box>
                                    <Box className={classes.position}>
                                        <Typography style={{ lineHeight: .5, fontSize: 30, fontWeight: 700, color: "#7ecabf" }} align="center" gutterBottom>
                                            Apprentice
                                        </Typography>
                                        <Typography style={{ lineHeight: 1, fontSize: 20, fontWeight: 700, color: "#706f6f" }} align="center" gutterBottom>
                                            Algorithms & Complexity Laboratory, UP Diliman
                                        </Typography>
                                        <Typography style={{ lineHeight: 1, fontSize: 20, fontWeight: 400, color: "#706f6f" }} align="center" gutterBottom>
                                            September 2021 - Present
                                        </Typography>
                                    </Box>
                                    <Box className={classes.position}>
                                        <Typography style={{ lineHeight: .5, fontSize: 30, fontWeight: 700, color: "#72c3e2" }} align="center" gutterBottom>
                                            Editor-in-Chief
                                        </Typography>
                                        <Typography style={{ lineHeight: 1, fontSize: 20, fontWeight: 700, color: "#706f6f" }} align="center" gutterBottom>
                                            The UP Parser
                                        </Typography>
                                        <Typography style={{ lineHeight: 1, fontSize: 20, fontWeight: 400, color: "#706f6f" }} align="center" gutterBottom>
                                            May 2020 - May 2021
                                        </Typography>
                                    </Box>
                                </Box>
                            </Reveal>
                        </Grid>
                        
                        {/* <Grid item xs={12} sm={12} md={12} className={classes.welcome}>
                        <Reveal effect="animate__fadeIn animate__delay-1s">
                            <Typography variant="h4" style={{ lineHeight: 1, marginRight: "50px", marginLeft: "50px", fontWeight: 400, color: "#edac58" }} align="center" paragraph>
                                I'm an <space />
                                <u className={classes.yellowLink} onClick={() => scrollDown(nlpSection)}>NLP enthusiast</u>, <space />
                                a <u className={classes.yellowLink} onClick={() => scrollDown(scicommSection)}>science communicator</u>, <space />
                                and more recently, 
                                an <u className={classes.yellowLink} onClick={() => scrollDown(nlpSection)}>AI explorer</u>.
                            </Typography>
                            </Reveal>
                        </Grid> */}
                    </Grid>
                    {/* <Reveal effect="animate__fadeIn animate__delay-1s">
                            <Typography variant="h4" style={{ lineHeight: 1, marginRight: "50px", marginLeft: "50px", fontWeight: 400, color: "#edac58" }} align="center" paragraph>
                                I'm an <space />
                                <u className={classes.yellowLink} onClick={() => scrollDown(nlpSection)}>NLP enthusiast</u>, <space />
                                a <u className={classes.yellowLink} onClick={() => scrollDown(scicommSection)}>science communicator</u>, <space />
                                and more recently, 
                                an <u className={classes.yellowLink} onClick={() => scrollDown(nlpSection)}>AI explorer</u>.
                            </Typography>
                        </Reveal> */}
                </div>
                <div className={classes.container}>
                    <Container className={classes.intro}>
                        <Reveal effect="animate__tada">
                        <img className={classes.icon} src='/assets/Icon.png' alt="icon" />
                        </Reveal>
                        <br/><br/><br/>

                        <Reveal effect="animate__fadeInUp">
                        <Typography variant="h4" style={{ lineHeight: 1, marginRight: "50px", marginLeft: "50px", fontWeight: 400, color: "#7ecabf" }} align="center" paragraph>
                            I love listening to Clara Benin, watching vlogs, and binging on KDramas.
                        </Typography>
                        </Reveal>
                        
                        <Reveal effect="animate__fadeInUp">
                        <Typography variant="h2" style={{ fontWeight: 400, color: "#f0716f" }} align="center" gutterBottom>
                            I also love learning.
                        </Typography>
                        </Reveal>
                        <Reveal effect="animate__fadeInUp">
                        <Typography variant="h4" style={{ fontWeight: 400, color: "#72c3e2" }} align="center" gutterBottom>
                            Why? To be honest, I don’t know...
                        </Typography>
                        </Reveal>
                    </Container>
                </div>
                <div className={classes.container}>
                    <Container className={classes.learning}>
                        <Reveal effect="animate__fadeInUp">
                            <Typography variant="h4" style={{ fontWeight: 400, color: "#f0716f" }} align="center" gutterBottom>
                                Learning usually just starts with a desire – an invitation that doesn’t say where it wants to take me.
                            </Typography>
                        </Reveal>
                        <Reveal effect="animate__fadeInUp">
                            <Typography variant="h4" style={{ fontWeight: 400, color: "#edac58" }} align="center" gutterBottom>
                                The uncertainty in not knowing the end goal of learning something is my biggest obstacle when I want to try something new.
                            </Typography>
                        </Reveal>
                        <Reveal effect="animate__fadeIn">
                            <img className={classes.map} src='/assets/maps.gif' alt="map with no destination" />
                        </Reveal>
                        <Reveal effect="animate__fadeInDown">
                            <Typography variant="h4" style={{ fontWeight: 400, color: "#72c3e2" }} align="center" gutterBottom>
                                However, I’ve come to realize that perhaps learning is really like that.
                            </Typography>
                        </Reveal>
                        <Reveal effect="animate__fadeInDown">
                            <Typography variant="h3" style={{ fontWeight: 400, color: "#f0716f" }} align="center" gutterBottom>
                                Most times, the journey is the destination itself.
                            </Typography>
                        </Reveal>
                    </Container>
                </div>
                <div className={classes.container}>
                    <Container className={classes.journeys}>
                        <Reveal effect="animate__pulse">
                            <Typography variant="h3" style={{ fontWeight: 400, color: "#ffffff" }} align="center" gutterBottom>
                                But in every journey, learning always took me somewhere.<br/>
                                Let me show you.
                            </Typography>
                        </Reveal>
                    </Container>
                </div>
                <div className={classes.container}>
                    <Container className={classes.NLPjourney}>
                        <Typography ref={nlpSection} variant="h2" style={{ paddingTop: '20px', fontWeight: 600, color: "#706f6f" }} align="center" gutterBottom>
                        This is my hesitant journey on <b style={{ color: "#edac58" }}> NLP</b>.
                        </Typography>
                        <br/>
                        <Grid container spacing={4}>
                            
                            <Grid item xs={12} sm={4} md={4}>
                                {/* <Reveal effect="animate__fadeInUp"> */}
                                <Box boxShadow={2} className={classes.card}>
                                    <Typography style={{ lineHeight: 1, fontSize: 30, fontWeight: 700, color: "#edac58" }} align="center" gutterBottom>
                                        I became an NLP intern.
                                    </Typography>

                                    <Reveal effect="animate__tada">
                                        <img className={classes.NLPimg} src='/assets/nlp01.png' alt="nlp01" />
                                    </Reveal>

                                    <Typography style={{ lineHeight: 1, fontSize: 25, fontWeight: 400, color: "#edac58", textAlign: 'justify' }} align="center" gutterBottom>
                                        When I was assigned to be an intern at the <b>Center of Language Technologies at De La Salle University</b> in 2017, it wasn’t love at first sight. I didn’t want to learn about languages. I wanted to learn how to code <i>cool stuff</i> – like robots and websites.
                                    </Typography>
                                </Box>
                                {/* </Reveal> */}
                            </Grid>
                            
                            
                            <Grid item xs={12} sm={4} md={4}>
                                {/* <Reveal effect="animate__fadeInUp"> */}
                                <Box boxShadow={2} className={classes.card}>
                                    <Typography style={{ lineHeight: 1, fontSize: 30, fontWeight: 700, color: "#72c3e2" }} align="center" gutterBottom>
                                        I made a text summarizer.
                                    </Typography>

                                    <Reveal effect="animate__tada">
                                        <img className={classes.NLPimg} src='/assets/nlp02.png' alt="nlp02" />
                                    </Reveal>

                                    <Typography style={{ lineHeight: 1, fontSize: 25, fontWeight: 400, color: "#72c3e2", textAlign: 'justify' }} align="center" gutterBottom>
                                    But after a month, I couldn’t stop thinking about <b>natural language processing</b>. I was so fascinated with computers that can understand human language.
                                    <br/><br/>
                                    At the end of this internship, I had a small idea: <b>what if we created a program that could summarize papers?</b>
                                    </Typography>
                                </Box>
                                {/* </Reveal> */}
                            </Grid>
                            
                            <Grid item xs={12} sm={4} md={4}>
                                <Box boxShadow={2} className={classes.card}>
                                    <Typography style={{ lineHeight: 1, fontSize: 30, fontWeight: 700, color: "#f0716f" }} align="center" gutterBottom>
                                        I went to places.
                                    </Typography>

                                    <Reveal effect="animate__tada">
                                        <img className={classes.NLPimg} src='/assets/nlp03.png' alt="nlp03" />
                                    </Reveal>
                                    <Typography style={{ lineHeight: 1, fontSize: 25, fontWeight: 400, color: "#f0716f", textAlign: 'justify' }} align="center" gutterBottom>
                                    My friends and I worked on the summarizer. Later on, it brought us to places – literally.

                                    We were given the opportunity to present our work in <b>Los Banos, Baguio, Palawan, and Thailand</b>.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Box boxShadow={2} className={classes.card}>
                                    <Typography style={{ lineHeight: 1, fontSize: 30, fontWeight: 700, color: "#7ecabf" }} align="center" gutterBottom>
                                        I published a paper.
                                    </Typography>
                                    <Reveal effect="animate__fadeIn">
                                        <iframe style={{ maxWidth: '100%', resizeMode: 'contain', alignSelf: 'center'}} src="https://drive.google.com/file/d/1QaYvyCApJ4a3_VCOntSz0a8aBWzFPPaw/preview" width="640" height="480" allow="autoplay"></iframe>
                                    </Reveal>
                                    <br/>
                                    <Typography style={{ lineHeight: 1, fontSize: 25, fontWeight: 400, color: "#7ecabf", textAlign: 'center'}} align="center" gutterBottom>
                                    By the end of it all, learning gave me a gift I never asked for: <a className={classes.greenLink} href="https://pcj.csp.org.ph/index.php/pcj/issue/download/27/PCJ%20V13%20N1%20pp21-28%202018"><b>my very first publication at the age of 18.</b></a>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className={classes.container}>
                    <Container className={classes.NLPjourney}>
                        <Typography ref={scicommSection} variant="h2" style={{ paddingTop: '20px', fontWeight: 600, color: "#706f6f" }} align="center" gutterBottom>
                        This is my unexpected journey on <b style={{ color: "#7ecabf" }}>science communication</b>.
                        </Typography>
                        <br/>
                        <Grid container spacing={4}>
                            
                            <Grid item xs={12} sm={12} md={6}>
                                {/* <Reveal effect="animate__fadeInUp"> */}
                                    <Box boxShadow={2} className={classes.card}>
                                    <Typography style={{ lineHeight: 1, fontSize: 30, fontWeight: 700, color: "#edac58" }} align="center" gutterBottom>
                                        I had to learn how to explain science in simple words.
                                    </Typography>

                                    <Reveal effect="animate__fadeIn">
                                        <img style={{paddingTop: "20px"}} src='/assets/Summarizer PowerPoint.gif' alt="summarizer PPT" />
                                    </Reveal>
                                    

                                    <br/><br/>
                                    <Typography style={{ lineHeight: 1, fontSize: 25, fontWeight: 400, color: "#edac58", textAlign: 'justify' }} align="center" gutterBottom>
                                    Unknowingly to the traveler, some journeys may lead her to other journeys. In my case, my journey on NLP led me to another path – <b>storytelling</b>.
                                    Of course, I wanted to share everything about my summarizer to everyone. But to do that, I had to learn how to explain the science in the simplest of terms. In the process, I found the joys of creating pretty and easy-to-understand slide decks, and making impactful narratives out of technical stuff.
                                    </Typography>
                                </Box>
                            </Grid>
                                     
                            <Grid item xs={12} sm={12} md={6}>
                                <Box boxShadow={2} className={classes.card}>
                                    <Typography style={{ lineHeight: 1, fontSize: 30, fontWeight: 700, color: "#72c3e2" }} align="center" gutterBottom>
                                        I realized the importance of science communication.
                                    </Typography>

                                    <Reveal effect="animate__fadeIn">
                                        <ReactPlayer width="100%"
                                        url="https://fb.watch/ceKlFZjj5P/"
                                        controls
                                        style={{paddingTop: "20px"}}
                                        align="center"
                                        />
                                    </Reveal>
                                    
                                    
                                    <Typography style={{ lineHeight: 1, fontSize: 25, fontWeight: 400, color: "#72c3e2", textAlign: 'justify' }} align="center" gutterBottom>
                                    Eventually, I came to know that this kind of storytelling is called <b>science communication</b>. As a CS student, I realized the importance of scicomm in using tech for social good.
                                    
                                    <br/><br/> As one of the 25 individuals who were intensively mentored in <b>Mulat Pinoy-Kabataan News Network’s Science Communication Workshop</b>, I produced a 10-minute documentary on COVID-19 and numbers, featuring known data scientists Dr. Jomar Rabajante and Dr. Peter Cayton. 
                                    </Typography>
                                </Box>
                                {/* </Reveal> */}
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} align="center">
                                <Box boxShadow={2} className={classes.card}>
                                    <Typography style={{ lineHeight: 1, fontSize: 30, fontWeight: 700, color: "#f0716f" }} align="center" gutterBottom>
                                        I became the Editor-in-Chief of a tech publication.
                                    </Typography>
                                    <br/>
                                    <Reveal effect="animate__fadeIn">
                                        <Grid container spacing={1}>
                                            
                                            <Grid item xs={12} sm={6} md={3}>
                                            <img className={classes.NLPimg} src='/assets/parser01.png' alt="parser01" />   
                                            </Grid>
                                            
                                            <Grid item xs={12} sm={6} md={3}>
                                                <img className={classes.NLPimg} src='/assets/parser02.png' alt="parser02" />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={3}>
                                                <img className={classes.NLPimg} src='/assets/parser03.png' alt="parser03" />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={3}>
                                                <img className={classes.NLPimg} src='/assets/parser04.png' alt="parser04" />
                                            </Grid> 
                                        </Grid>
                                    </Reveal>
                                    
                                    <br/>
                                    <Typography style={{ lineHeight: 1, fontSize: 25, fontWeight: 400, color: "#f0716f", textAlign: 'justify' }} align="center" gutterBottom>
                                    I wanted to become a science communicator wherever I was at. So I became the <b>Editor-in-Chief of The UP Parser</b>, the official student publication of the Department of Computer Science - UP Diliman. As the one who redirected the mission and vision of Parser to build a platform that can cultivate computer scientists for social good and bring computer science to society, I spearheaded projects that made tech news reachable and approachable.
                                    </Typography>
                                </Box>
                                {/* </Reveal> */}
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div className={classes.container}>
                    <Container className={classes.NLPjourney}>
                        <Typography ref={aiSection} variant="h2" style={{ paddingTop: '20px', fontWeight: 600, color: "#706f6f" }} align="center" gutterBottom>
                        This is my out-of-the-way journey on <b style={{ color: "#72c3e2" }}>AI</b>.
                        </Typography>
                        <br/>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={12} md={12}>
                                {/* <Reveal effect="animate__fadeInUp"> */}
                                    <Box boxShadow={2} className={classes.card}>
                                    <Typography style={{ lineHeight: 1, fontSize: 30, fontWeight: 700, color: "#edac58" }} align="center" gutterBottom>
                                        I stumbled upon brain-inspired AI.
                                    </Typography>

                                    <Reveal effect="animate__fadeIn">
                                    <iframe style={{ maxWidth: '100%', resizeMode: 'contain', alignSelf: 'center'}}src="https://drive.google.com/file/d/12sUADSzgXt7-lCkj4zv5nwFqnNhqxypJ/preview" width="640" height="480" allow="autoplay"></iframe>
                                    </Reveal>
                                    
                                    <br/><br/>
                                    <Typography style={{ lineHeight: 1, fontSize: 25, fontWeight: 400, color: "#edac58", textAlign: 'justify' }} align="center" gutterBottom>
                                    I was looking for NLP research opportunities around our department. I foolishly thought that I could only do NLP in one specific lab. Thankfully, one prof politely told me that I could do NLP not only in that lab, but also in other labs.
                                    <br/><br/>
                                    <i>How dare I limit NLP? I had forgotten to think outside of the box.</i> These questions led me to <b>brain-inspired NLP and AI</b>, which entails understanding how the brain works in the hopes of creating better algorithms.
                                    Currently, I'm exploring <b>sparse distributed representations</b> – long strings of 0's and 1's that aim to imitate how neurons make intelligence and language understanding possible.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </ThemeProvider>
    );
}

export default App;