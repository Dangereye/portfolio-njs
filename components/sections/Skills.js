import mySkills from "../../data/mySkills";
import Image from "next/image";
function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section__subtitle">Skills</div>
        <h2 className="section__title">My Experience</h2>
        <div className="section__grid">
          {mySkills.map((list) => (
            <div className="list list__card" key={list.title}>
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
                        blurDataURL={skill.title}
                        placeholder="blur"
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
