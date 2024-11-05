import React from "react";
import NavbarSection from "./NavbarSection";
import styles from '@/styles/Nav.module.css';

const NavData = [
    {
        section_id: 'nav_section_1',
        section_name: 'Aspect 1',
        choices: [
            {id: 'nav_choice_11', name: 'choice_1', link: '/aspect1/choice1'}, 
            {id: 'nav_choice_12', name: 'choice_2', link: '/aspect1/choice2'}, 
            {id: 'nav_choice_13', name: 'choice_3', link: '/aspect1/choice3'}, 
        ]
    }, 
    {
        section_id: 'nav_section_2',
        section_name: 'Aspect 2',
        choices: [
            {id: 'nav_choice_21', name: 'choice_1', link: '/aspect2/choice1'}, 
            {id: 'nav_choice_22', name: 'choice_2', link: '/aspect2/choice2'}, 
            {id: 'nav_choice_23', name: 'choice_3', link: '/aspect2/choice3'}, 
        ]
    },
    {
        section_id: 'nav_section_3',
        section_name: 'Aspect 3',
        choices: [
            {id: 'nav_choice_31', name: 'choice_1', link: '/aspect3/choice1'}, 
            {id: 'nav_choice_32', name: 'choice_2', link: '/aspect3/choice2'}, 
            {id: 'nav_choice_33', name: 'choice_3', link: '/aspect3/choice3'}, 
        ]
    }
]

const Navbar = () => {
    return (<nav className={styles.nav}>
        {NavData.map((section) => {
            return <NavbarSection key={section.section_id} title={section.section_name} choices={section.choices}/>
        })}
    </nav>)
};

export default Navbar;