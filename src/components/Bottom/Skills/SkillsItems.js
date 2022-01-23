import { motion } from "framer-motion";
import styled from "styled-components";

import { IntersectionContext } from "hooks/useIntersection";
import { useContext } from "react";
import Skill from "./Skill";

const SkillsItemsStyled = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > p {
        font-size: 1.563vw;
        margin-right: 30px;
        color: #b2b2b2;

        @media (min-width: 1920px) {
            font-size: 30px;
        }
        @media (max-width: 768px) {
            font-size: 3.146vw;
        }
        @media (max-width: 500px) {
            font-size: 4.546vw;  
            margin-bottom: 0px;
        }
    }
`

const SkillsItems = () => {

    const { inView } = useContext(IntersectionContext);

    const variants = {
        closed: {
          transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        },
        open: {
          transition: { staggerChildren: 0.1 }
        }
    };

    const skills = ["Product design", "Ui design", "Web design", "Graphic design", "Branding", "3D", "Illustracje", "HTML",
    "CSS", "SASS", "JS", "Bootstrap/UIkit", "NPM", "Parcel", "GIT", "RWD/W3C/WCAG", "Photoshop", "Illustrator", "Figma",
    "XD", "Blender", "Substance Painter", "Affinity Designer/Publisher"]

    return(
        <>
            <SkillsItemsStyled initial="closed"
                    animate={inView ? "open" : "closed"}
                    variants={variants}>
                        {skills.map((item, i) => {
                            return <Skill key={i} data={item} pos={i} />
                        })}
            </SkillsItemsStyled>
        </>
    )
}

export default SkillsItems;