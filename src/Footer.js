import "./Footer.css"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ContentPlaceholder } from './ContentPlaceholder'
import { Link } from "react-router-dom"
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';


const Accordion = ({ i, expanded, setExpanded, linkHeading, link1, link2, link3, link4, link5, link6}) => {
    const isOpen = i === expanded

    return (
        <>
        <motion.header 
            className="accordion__header"
            initial={false}
            onClick={() => setExpanded(isOpen ? false : i )}
        >
        <Link>{linkHeading}</Link>
        <div className="accordion__icon">
            {isOpen ? (
                <KeyboardArrowUpRoundedIcon fontSize="large"/>
            ):(
                <KeyboardArrowDownRoundedIcon fontSize="large"/>
            )}
        </div>
        </motion.header>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.section 
                    key="content"
                    className="accordion__section"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity:1,height:"auto" },
                        collapsed:{ opacity:0,height:0 }
                    }}
                    transition={{
                        duration:0.8,
                        ease: [0.04, 0.62, 0.23, 0.98]
                    }}
                >
                    <ContentPlaceholder 
                        link1={link1}
                        link2={link2}
                        link3={link3}
                        link4={link4}
                        link5={link5}
                        link6={link6}
                    />
                </motion.section>
            )}
        </AnimatePresence>
        </>
    )
}
 
export const Footer = () => {
    const [expanded, setExpanded] = useState()

    return  (
        <>
            <Accordion 
                i={0} 
                expanded={expanded} 
                setExpanded={setExpanded} 
                linkHeading='About Us'
                link1='Our Heritage'
                link2='Our Coffee'
                link3='Stories and News'
                link4='Investor Relations'
                link5='Policies and Standards'
                link6='Customer Service'
            />
            <Accordion 
                i={1} 
                expanded={expanded} 
                setExpanded={setExpanded} 
                linkHeading='Careers'
                link1='Culture and Values'
                link2='Inclusion, Diversity, and Equity'
                link3='College Achievement Plan'
                link4='U.S. Careers'
                link5='International Careers'
            />
            <Accordion 
                i={2} 
                expanded={expanded} 
                setExpanded={setExpanded} 
                linkHeading='Social Impact'
                link1='Ethical Sourcing'
                link2='Leading in Sustainability'
                link3='Strengthening Communities'
                link4='Creating Oppurtunities'
                link5='Global Social Impact Report'
            />
            <Accordion 
                i={3} 
                expanded={expanded} 
                setExpanded={setExpanded} 
                linkHeading='For Business Partners'
                link1='Landlord Support Center'
                link2='Suppliers'
                link3='Corporate Gift Card Sales'
                link4='Office and Foodservice Coffee'
            />
            <Accordion 
                i={4} 
                expanded={expanded} 
                setExpanded={setExpanded} 
                linkHeading='Order and Pickup'
                link1='Order on the App'
                link2='Order on the Web'
                link3='Delivery'
                link4='Order and Pickup Options'
                link5='Explore and Find Coffee for Home'
            />
        </>
    )
}