import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Typography } from '@mui/material'
import './Features.css'

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
            </CardContent>
        </Card>
    )
}

export default Features
