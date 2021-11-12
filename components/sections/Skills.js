import { useState, useEffect } from "react";
import useAnimation from "../../hooks/useAnimation";
import mySkills from "../../data/mySkills";
import Image from "next/image";
function Skills() {
  const animate = useAnimation();
  const [animIsLoaded, setAnimIsLoaded] = useState();

  useEffect(() => {
    if (!animIsLoaded) {
      animate("#skills", ".skills-fadeup");
      setAnimIsLoaded(true);
    }
  }, [animate, animIsLoaded]);
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section__subtitle center skills-fadeup">Skills</div>
        <h2 className="section__title center skills-fadeup">My Experience</h2>
        <div className="section__block grid grid--multiple">
          {mySkills.map((list) => (
            <div className="list list__card skills-fadeup" key={list.title}>
              <div>
                <h3 className="list__title">{list.title}</h3>
                <ul className="list__items">
                  {list.skills.map((skill) => (
                    <li className="list__item" key={skill.title}>
                      <Image
                        src={skill.svg}
                        width="25"
                        height="25"
                        alt={skill.title}
                        title={skill.title}
                      />
                      <div className="list__text">
                        {skill.title}
                        {skill.note && <span>({skill.note})</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
