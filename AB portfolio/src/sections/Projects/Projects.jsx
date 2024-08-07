import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/AdhirajBharadwaj/Worldwise"
          h3="Worldwise"
          p="Travel App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/AdhirajBharadwaj/FastReactPizza"
          h3="Fast Pizza"
          p="Pizza Restaurant"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/AdhirajBharadwaj/eatnsplit"
          h3="EatnSplit"
          p="Bill Splitting"
        />
        
      </div>
    </section>
  );
}

export default Projects;
