import './TechProfile.css';
import CardGrid from './CardGrid';
import { Tabs, Divider } from 'antd';
import { GlobalOutlined, BranchesOutlined, LinuxOutlined, RobotOutlined } from '@ant-design/icons';
//////////// IMAGES /////////////////
import webgis from '../assets/techprofile/webdev/webgis.png';
import webdev from '../assets/techprofile/webdev/webdev.png';
import backend from '../assets/techprofile/webdev/backend.png';
import parking from '../assets/techprofile/genprog/parking.png';
import algorithms from '../assets/techprofile/genprog/algorithms.jpg';
import database from '../assets/techprofile/genprog/rdbms.png';
import mapsminer from '../assets/techprofile/automation/dataminer.gif';
import scripting from '../assets/techprofile/automation/scripting.png';
import servers from '../assets/techprofile/server/servers.png';

const TechProfile = () => {

  const WebDevelopmentItems = [
    {
      title: 'Web GIS Applications',
      content:
        <>
          <p>I have contributed to the full stack development of web GIS applications,
            effectively displaying geospatial data primarily utilizing open-source web mapping libraries, as well as spatial servers and databases.
            <br /><Divider /><b>Expertise: React.js, Leaflet.js, GeoServer</b></p>
        </>,
      image: webgis,
    },
    {
      title: 'Web Fundamentals',
      content: <>
        <p>Mastering web fundamentals is crucial in today's landscape. Understanding the backbone of the web
          allows me to harness powerful development frameworks and build high-quality web applications.
          <br /><Divider /><b>Expertise: HTML, CSS, JavaScript, React.js, Node.js</b></p>
      </>,
      image: webdev,
    },
    {
      title: 'Backend Development',
      content: <>
        <p>Facilitating information exchange between different systems seems deeply fascinating to me.
          While I currently lack professional experience, I am practicing developing APIs with Java and Spring Boot.
          <br /><Divider /><b>Expertise: Java, Spring Boot, Node.js, Express.js</b></p>
      </>,
      image: backend,
    }
  ];

  const GeneralPurposeProgrammingItems = [
    {
      title: 'Desktop Applications',
      content:
        <>
          <p>I have experience developing a variety of desktop applications, ranging from command line tools to GUI software systems with complex features.
          <br/><i>Image:</i> Par👑king - A desktop parking management solution (Java).
            <br /><Divider /><b>Expertise: C++, C# .NET, Java</b></p>
        </>,
      image: parking,
    },
    {
      title: 'Algorithm Design',
      content: <>
        <p>I am a big fan of Occam's razor. Equipped with the most appropriate data structures and algorithms for each business case,
          I aim for minimal complexity, delivering efficient, easy-to-use software solutions.
          <br /><Divider /><b>Expertise: Data Structures, Algorithm Design & Optimization</b></p>
      </>,
      image: algorithms,
    },
    {
      title: 'Database Systems',
      content: <>
        <p> I have worked with relational databases like MySQL and PostgreSQL, and plan to explore NoSQL and cloud alternatives soon.
          <br /><i>Image: e-Commerce RDBMS (MySQL, MS Access).</i>
          <br /><Divider /><b>Expertise: Database design, MySQL, PostgreSQL</b></p>
      </>,
      image: database,
    }
  ];

  const AutomationItems = [
    {
      title: 'Manual Task Automation',
      content:
        <>
          <p>Focusing on efficiency and productivity, I specialize in automating manual tasks and helping save workhours and effort.
            <br/><i>Video: Google Maps data mining tool</i>
            <br/><Divider /><b>Expertise: C++, C# .NET, Java</b></p>
        </>,
      image: mapsminer,
    },
    {
      title: 'Scripting',
      content: <>
        <p>With the help of scripting languages and tools, I am able to automate a variety of processes which may in turn improve software development, business operations or other critical parts of production.
          <br/><Divider /><b>Expertise: Bash, JavaScript, Python</b></p>
      </>,
      image: scripting,
    },
  ];

  const ServerItems = [
    {
      title: 'Virtualization',
      content:
        <>
          <p>ITEM 1
            <br /><Divider /><b>Expertise:</b></p>
        </>,
      image: servers,
    },
    {
      title: 'Server Configuration',
      content:
        <>
          <p>ITEM 2
            <br /><Divider /><b>Expertise:</b></p>
        </>,
      image: servers,
    },
    {
      title: 'Server Orchestration',
      content:
        <>
          <p>ITEM 3
            <br /><Divider /><b>Expertise:</b></p>
        </>,
      image: servers,
    },
  ];
  const tabs = [
    {
      key: 1,
      label: `Web Development`,
      children:  <CardGrid items={WebDevelopmentItems} />,
      icon: <GlobalOutlined />,
    },
    {
      key: 2,
      label: `General Purpose Programming`,
      children: <CardGrid items={GeneralPurposeProgrammingItems} />,
      icon: <BranchesOutlined />,
    },
    {
      key: 3,
      label: `Automation Development`,
      children: <CardGrid items={AutomationItems} />,
      icon: <RobotOutlined />,
    },
    {
      key: 4,
      label: `Server Administration & Configuration`,
      children: <CardGrid items={ServerItems}/>,
      icon: <LinuxOutlined />,
    },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Tech Profile</h1>
      <h3>Who is this Sam guy anyway?</h3>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p className='techprofile-subtitle'>
          <i>When you love computers, this industry becomes a vast playground, where every language is a new toy, and every system is a new pool of mud for you to let your inner kid get dirty...</i>
          <br /><br /> As a student of computing,
          I seek deep knowledge and understanding, and I feel blessed to have the ability to face challenging problems and come up with creative solutions.
          <br /><br />I am passionate about development and large-scale information systems.<br /> My next goal is to enter a position in which I can delve
          into backend develompent, or cloud computing and DevOps.
          <br /><br /><b>You can take a look at my tech stack in the tabs below.</b>
        </p>
      </div>
      <Divider />
      <Tabs style={{ marginLeft: '10px' }} items={tabs} />
    </div>
  );
}

export default TechProfile;