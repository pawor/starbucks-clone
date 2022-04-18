import React from 'react'
import "./MenuLink.css"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'


const variants = {
    open: {
        y: 0 ,
        opacity: 1,
        transition: {
            y: {
                stiffness: 100,
                velocity: -100
            }
        }
    },
    closed: {
        y: 50 ,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000,
            }
        }
    }
}


export const MenuLink = ({ link, path, icon, goBackIcon, onClick, width }) => {
    return (
        <>
            <Link to={path}>
            <motion.li 
                style={{ width }}
                onClick={onClick}
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {goBackIcon && <ChevronLeftRoundedIcon fontSize="large"/>}
                {link}
                {icon && <ChevronRightRoundedIcon fontSize="large"/>}
            </motion.li>
            </Link>
        </>
    )
}