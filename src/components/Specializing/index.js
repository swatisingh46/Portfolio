import React from 'react'
import Card from "../UI/Card"
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import Skill from "../UI/Skill";
import {colors} from "../../style";


const Specializing=(props)=> {
    const skills = [
        {
          skillName: "HTML/CSS",
          desc: "Hands on experience in Html/Css",
          value: 90,
          textColor: colors.primaryColor,
          pathColor: "#f2a154",
        },
        {
          skillName: "JavaScript",
          desc: "Hands on experience in JavaScript",
          value: 80,
          textColor: colors.primaryColor,
          pathColor: "#f9f871",
        },
        {
          skillName: "ReactJS",
          desc: "Hands on experience in ReactJS",
          value: 50,
          textColor: colors.primaryColor,
          pathColor: "#00af91",
        },
        {
          skillName: "jQuery",
          desc: "Hands on experience in Html/Css",
          value: 70,
          textColor: colors.primaryColor,
          pathColor: "#845ec2",
        },
        {
          skillName: "Bootstrap",
          desc: "Hands on experience in Html/Css",
          value: 85,
          textColor: colors.primaryColor,
          pathColor: "#845ec2",
        },
        {
          skillName: "NodeJS",
          desc: "Hands on experience in Html/Css",
          value: 60,
          textColor: colors.primaryColor,
          pathColor: "#54e346",
        },
        {
          skillName: "PHP",
          desc: "Hands on experience in Html/Css",
          value: 85,
          textColor: colors.primaryColor,
          pathColor: "#111d5e",
        },
        {
          skillName: "Mysql",
          desc: "Hands on experience in Html/Css",
          value: 86,
          textColor: colors.primaryColor,
          pathColor: "#f88f01",
        },
      ];
    return (
        <div className="container" style={{marginTop: '-60px'}}>
            <Card style={{padding: '50px'}}>
                <SmallHeading text="What I do" />
                <MediumHeading text="Specialization in" />
                <div data-aos="fade-up" className="flexRow wrap justify-sb" style={{ padding: "30px" }}>
                    {skills.map((skill, index) => (
                        <Skill
                            key={index}
                            skillName={skill.skillName}
                            desc={skill.desc}
                            value={skill.value}
                            textColor={colors.primaryColor}
                            pathColor={skill.pathColor}
                        />
                    ))}
                </div>
            </Card>
            
        </div>
    );
};

export default Specializing
