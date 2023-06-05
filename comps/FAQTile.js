import styles from '@/styles/FAQ.module.css'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Background from './Background';

const FAQTile = ({ question, answer}) => {
    return (
        <div>
            <Accordion 
            sx={{
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                borderRadius: '12px!important',
                padding: '5px',
                marginTop: '15px',
                marginBottom: '15px',
            }}
            >
                <AccordionSummary 
                    sx={{
                        borderRadius: '22px',
                        marginTop: 0,
                        marginBottom: 0
                    }}
                    expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        sx={{
                            'font-family': "Montserrat",
                            'font-weight': "bold"
                        }}
                    >{question}</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        borderRadius: '22px',
                        marginTop: 0,
                        marginBottom: 0
                    }}
                >
                    <Typography
                        sx={{
                            'font-family': "Montserrat"
                        }}
                    >{answer}</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
 
export default FAQTile;