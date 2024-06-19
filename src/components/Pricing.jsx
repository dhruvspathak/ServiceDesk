import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import './Pricing.css'

const Pricing= ()=>{
    return(
        <>
        <Card className='parentCard'>
            <Typography variant='h4' className='header'>
                PRICING
            </Typography>

            <Card className='cardContent'>
                <Card>
                    <Typography variant='h5'>
                        FREE
                    </Typography>
                </Card>

                <Card>
                    <Typography variant='h5'>
                        BASIC
                    </Typography>
                </Card>

                <Card>
                    <Typography variant='h5'>
                        PRO
                        poppular
                    </Typography>
                </Card>

                <Card>
                    <Typography  variant='h5'>
                        ENTERPRISE
                    </Typography>
                </Card>
            </Card>
        </Card>
        </>
    )
}

export default Pricing
