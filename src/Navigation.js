import { motion } from "framer-motion";


const variants = {
    open: {
        transition: {
            staggerChildren: 0.07 ,
            delayChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05 ,
            delayChildren: -1
        }
    }
}

const variants2 = {
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

export const Navigation = ({ toggle }) => {
    const [showMenuCategories, setShowMenuCategories] = React.useState(false)


    return (
        <>
            {showMenuCategories ? (
                <motion.ul variants={variants}>
                    <MenuLink link='Menu' goBackIcon onClick={() => {setShowMenuCategories(false)}} width="60%"/>
                    <MenuLink 
                        link='All products' 
                        path='/menu' 
                        onClick={() => {
                            setShowMenuCategories(false) 
                            toggle()
                        }} 
                    />
                    <MenuLink 
                        link='Featured' 
                        path='/menu/featured' 
                        onClick={() => {
                            setShowMenuCategories(false) 
                            toggle()
                        }} 
                    />
                    <MenuLink 
                        link='Previous Orders' 
                        onClick={() => {
                            setShowMenuCategories(false) 
                            toggle()
                        }} 
                    />
                    <MenuLink 
                        link='Favorite Products' 
                        onClick={() => {
                            setShowMenuCategories(false) 
                            toggle()
                        }} 
                    />
                </motion.ul>
            ):(
                <motion.ul variants={variants}>
                    <MenuLink link='Menu' icon onClick={() => {setShowMenuCategories(true)}} width="60%"/>
                    <MenuLink link='Rewards' />
                    <MenuLink link='Gift Cards' />
                    <motion.hr variants={variants2}/>
                    <motion.div variants={variants2} className='navigation__buttons'></motion.div>
                    <motion.div variants={variants2}>
                        <FindAStore />
                    </motion.div>
                </motion.ul>
            )}
        </>
    )
}