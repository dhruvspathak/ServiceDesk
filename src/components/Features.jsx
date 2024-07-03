import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import './Features.css'
import ticketImg from '../assets/flat-design-person-making-complain.png'
import trackImg from '../assets/landing-page-template.png'
import priorityImg from '../assets/freepik-export-20240703124357i6VW.png'

const Features= ()=>{
    return(
        <Card className='featureSection'>
            <CardContent>
                <Typography variant='h4' className='heading'>
                Our Features
                </Typography>
                <Typography variant='h6'>
                Raise tickets by providing details such as issue description, priority level, and category.
                </Typography>
                <Typography variant='h6'>
                Ticket management system for administrators to assign, track, and resolve tickets efficiently.
                </Typography>
                <Typography variant='h6'>
                Features for users to track the status of their tickets, receive updates, and provide additional
                information if required
                </Typography>
                <div className='imgDiv'>
                <div className='ticketImg'>
                    <img src={ticketImg} alt='img' className='theImage' />
                </div>
                <div className='deskImage'>
                    <img src={trackImg} alt='img' className='theImage' />
                </div>
                <div className='deskImagePriority'>
                    <img src={priorityImg} alt='img' className='theImage' />
                </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Features
