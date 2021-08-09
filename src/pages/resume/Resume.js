import React from 'react'
import "./Resume.css"
import { Grid, Typography,Paper } from "@material-ui/core"
import resumeData from '../../utils/resumeData'
import MyTimeLine, { CustomTimeLineSeparator } from "../../components/timeline/TimeLine"

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineDot from '@material-ui/lab/TimelineDot'
import { Icon } from "@material-ui/core"

import { TextField } from '@material-ui/core'

import MyButton from "../../components/button/MyButton"

import TimelineContent from '@material-ui/lab/TimelineContent'


const Resume = () => {
    return (
        < >
            
            {/*About me */}
            <Grid container className="section pb_45 pt_45">
                <Grid item className="section_title mb_30" xs={12}>
                    <span></span>
                    <h6 className="section_title_text"> About Me</h6>   
                </Grid>
                
                <Grid item >
                    <Typography variant="body2" className="aboutme_text">
                     {resumeData.about}
                    </Typography>
                </Grid>
            </Grid>
            
             {/*Education and experience */}
            <Grid container className="section pb_45" xs={12} >
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text"> Resume</h6>   
                </Grid>

                <Grid item xs={12}  >
                    <Grid container className="resumeTimeLine">
                     {/* Experiences*/}   
                    <Grid item xs={12} sm={12} md={6} >
                    <MyTimeLine title="Work Experience"
                                icon={<WorkIcon />}
                            >
                                {resumeData.experiences.map(experience => (
                                    <TimelineItem >
                                       <CustomTimeLineSeparator/>
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{experience.title}</Typography>
                                            
                                            <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{ experience.description}</Typography>
                                    </TimelineContent>    
                                   </TimelineItem>
                    ))}
                                
                                
                    </MyTimeLine>       
                    </Grid>

                    {/* Education*/}   
                    <Grid item xs={12} sm={12} md={6} >
                    <MyTimeLine title="Education"
                                icon={<SchoolIcon/>}
                            >
                                {resumeData.educations.map((education) => (
                                    <TimelineItem >
                                       <CustomTimeLineSeparator/>
                                        <TimelineContent className="timeline_content">
                                            <Typography className="timeline_title">{education.title}</Typography>
                                            
                                            <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                            <Typography variant="body2" className="timeline_description">{ education.description}</Typography>
                                    </TimelineContent>    
                                   </TimelineItem>
                    ))}
                                
                                
                    </MyTimeLine>       
                    </Grid>   
                 </Grid>
                </Grid>
            </Grid>
            
             {/*Services */}
            <Grid container className="section pb_45">
                <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text"> My Services</h6>   
                </Grid>
                
                <Grid item xs={12}>
                    <Grid container  spacing={3} justify="space-around">
                        {resumeData.services.map(service => (
                            <Grid item xs={12} sm={6} md={3} >
                                <div className="service">
                                    <Icon className="service_icon">
                                        {service.icon}
                                    </Icon>
                                    <Typography className="service_title" variant="h6">{service.title}</Typography>
                                    <Typography className="service_description" variant="body2">{service.description }</Typography>
                                </div>
                            </Grid>
                        ))}

                 </Grid>
                </Grid>
                <Grid/>
            
            </Grid>


            {/*Skill*/}
            <Grid container justify="space-between" className="section graybg pb_45 p_50 ">
                <Grid item xs={12}>
                    <Grid container justify="space-between " spacing={3}>
                     {resumeData.skills.map(skill => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper elevation={0} className="skill">
                            <Typography variant="h6" className="skill_title">
                              {skill.title}  
                            </Typography>
                            
                            {skill.description.map(element => (
                                <Typography variant="body2" className="skill_description">
                                    <TimelineDot variant={"outline"} className="timeline_dot" />
                                    {element }
                                </Typography>
                            ))}
                        </Paper>    
                  
                    </Grid>
              ))}  


                    </Grid>
                </Grid>
                
            </Grid>

            {/*Contact*/}            
            <Grid container spacing={6} className="section pt_45 pb_45">
                 {/*Conatct form */}
                <Grid item xs={12} lg={7}>
                    <Grid container >
                        <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text"> Contact Form</h6>   
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3} >
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="name" label="Name"></TextField>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name="email" label="E-mail"></TextField>
                                </Grid>

                                <Grid item xs={12} >
                                    <TextField fullWidth name="message" label="Message" multiline rows={4}></TextField>
                                </Grid>

                                <Grid item xs={12} >
                                 <MyButton text="Submit"/>                             
                                </Grid>
                          </Grid>
                        </Grid>
                </Grid>
    
                </Grid>
                 {/*Conatct information */}
               <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section_title mb_30" >
                    <span></span>
                    <h6 className="section_title_text"> Contact Information</h6>      
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography className="contactInfo_item">
                                      <span> Address: </span>  {resumeData.address} 
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} >
                                    <Typography className="contactInfo_item">
                                      <span> Phone: </span>  {resumeData.phone} 
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="contactInfo_item">
                                      <span> Email: </span>  {resumeData.email} 
                                    </Typography>
                                </Grid>
                            </Grid>
                       
                     </Grid>
                        <Grid item xs={12}>
                            <Grid container className="contactInfo_socialsContainer">
                                {Object.keys(resumeData.socials).map((key) => (
                                    <Grid item className="contactInfo_socials" >
                                        <a href={resumeData.socials[key].link}>{resumeData.socials[key].Icon }</a>
                                        </Grid>
                                ))}
                         </Grid>   
                       </Grid>
                    </Grid>
               </Grid>  
            </Grid>            
        
        
        </>
        
    )
}

export default Resume
