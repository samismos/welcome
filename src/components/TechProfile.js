import { useState, useEffect } from 'react';
import './TechProfile.css';
import { List, Image, Tabs, Card, Divider } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { GlobalOutlined, BranchesOutlined, LinuxOutlined, RobotOutlined } from '@ant-design/icons';
import adventure from '../assets/adventure1.png';
import webgis from '../assets/techprofile/webdev/webgis.png';
import webdev from '../assets/techprofile/webdev/webdev.png';
import backend from '../assets/techprofile/webdev/backend.png';
import parking from '../assets/techprofile/genprog/parking.png';
import algorithms from '../assets/techprofile/genprog/algorithms.jpg';
import database from '../assets/techprofile/genprog/rdbms.png';

const TechProfile = () => {

  const WebDevelopmentItems = [
    {
      title: 'Web GIS Applications',
      content:
        <>
          <p>I have contributed to the full stack development of web GIS applications,
            effectively displaying geospatial data primarily utilizing open-source web mapping libraries, as well as spatial servers and databases.
            <br /><Divider /><b>Skills: React.js, Leaflet.js, GeoServer</b></p>
        </>,
      image: webgis,
    },
    {
      title: 'Web Fundamentals',
      content: <>
        <p>Mastering web fundamentals is crucial in today's landscape. Understanding the backbone of the web
          allows me to harness powerful development frameworks and build high-quality web applications.
          <br /><Divider /><b>Skills: HTML, CSS, JavaScript, React.js, Node.js</b></p>
      </>,
      image: webdev,
    },
    {
      title: 'Backend Development',
      content: <>
        <p>Facilitating information exchange between different systems seems deeply fascinating to me.
          While I currently lack professional experience, I am practicing developing APIs with Java and Spring Boot.
          <br /><Divider /><b>Skills: Java, Spring Boot, Node.js, Express.js</b></p>
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
            <br /><i>Image: Par👑king - A desktop parking management solution (Java).</i>
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
      title: 'Desktop Applications',
      content:
        <>
          <p>I have experience developing a variety of desktop applications, ranging from command line tools to GUI software systems with complex features.
            <br /><i>Image: Par👑king - A desktop parking management solution (Java).</i>
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

  const CardGrid = ({ items }) => {
    return (
      <>
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <Card className="fade-up-animation" title={<h3 style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.title}</h3>}
                cover={<Image preview={true} src={item.image} />}>
                {item.content}
              </Card>
            </List.Item>
          )}
        />
      </>
    )
  }

  const WebDevelopment = () => {
    return (
      <>
        <CardGrid items={WebDevelopmentItems} />
      </>
    )
  };

  const GeneralPurposeProgramming = () => {
    return (
      <>
        <CardGrid items={GeneralPurposeProgrammingItems} />
      </>
    )
  };

  const AutomationDevelopment = () => {
    return (
      <>
        <CardGrid items={AutomationItems} />
      </>
    )
  };

  const ServerAdminConfig = () => {
    return (
      <>

      </>
    )
  };


  const tabs = [
    {
      key: 1,
      label: `Web Development`,
      children: <WebDevelopment />,
      icon: <GlobalOutlined />,
    },
    {
      key: 2,
      label: `General Purpose Programming`,
      children: <GeneralPurposeProgramming />,
      icon: <BranchesOutlined />,
    },
    {
      key: 3,
      label: `Automation Development`,
      children: <AutomationDevelopment />,
      icon: <RobotOutlined />,
    },
    {
      key: 4,
      label: `Server Administration & Configuration`,
      children: <ServerAdminConfig />,
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
