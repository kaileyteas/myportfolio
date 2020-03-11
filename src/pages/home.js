import React from 'react'
import { Card, Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons"; 
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

function home(){
    const { Meta } = Card;

    return <div className="page">
        <div className="homeSection">
        <img src="https://i.gyazo.com/b34d214b3e384ed3fbf2986d36fb61ab.png" alt="me" width="500px" height="500px"/>
            <div className="homeSection-wrapper"> 
                    <ScrollAnimation animateIn="pulse">
                        <h1>Hi there, I'm Kailey.</h1>
                    </ScrollAnimation>
                <h2>I'm a UX Designer based in Seattle, WA.</h2>
            </div>

        </div>

        <div className="aboutSection">
            <h1>About</h1>
            <div className="aboutSectionDetails">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <img src="https://image.flaticon.com/icons/svg/1067/1067993.svg" 
                alt="Graduate Icon" width="200px" height="200px"/></ScrollAnimation>
                <div className="aboutSectionDescription">
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut"><p>I'm a Junior in Human-Centered Design & Engineering with a focus in 
                        Human-Computer Interaction at the University of Washington, Seattle.</p></ScrollAnimation>
                </div>

                <div className="aboutSectionSocials">
                <ScrollAnimation animateIn='bounceInRight'>
                    <div style={{"display":"flex", "flex-direction":"row", "justify-content":"center"}}>
                        <a href="https://linkedin.com/in/kaileytea">
                            <img src="https://image.flaticon.com/icons/svg/145/145807.svg" alt="LinkedIn" width="40px" height="40px"/>
                                <figcaption>@kaileytea</figcaption>
                        </a>
                    </div> </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' delay={300}><div style={{"display":"flex", "flex-direction":"row", "justify-content":"center"}}>
                        <a href="https://www.instagram.com/braveiy/">
                            <img src="https://image.flaticon.com/icons/svg/733/733558.svg" alt="Instagram" width="40px" height="40px"/>
                                <figcaption>@braveiy</figcaption>
                        </a>
                    </div></ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight' delay={600}>
                    <div style={{"display":"flex", "flex-direction":"row", "justify-content":"center"}}>
                        <a href="mailto:kailet@uw.edu?Subject=Hello%20again">
                            <img src="https://image.flaticon.com/icons/svg/732/732200.svg" alt="Gmail" width="40px" height="40px"/>
                                <figcaption>kailet@uw.edu</figcaption>
                        </a>
                    </div></ScrollAnimation>
                
                </div>
            </div>
            
        </div>
        <div className="projects">
            <h1>Projects</h1>
            <div className="projectItems">
                <ScrollAnimation animateIn="fadeInUpBig">
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <a href="https://kaileytea.myportfolio.com/auxilia">
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/69ca2579-0187-4867-b319-c6b997d7b9d0/ee695a64-cc3f-41d7-8e01-686e4f8b0325_rwc_0x86x800x626x800.png?h=89086405623c4e3f409ed2e46f62320f" />}
                        >
                            <Meta title="Auxilia" description="A tool to support librarians to connect with remote patrons." />
                        </Card>
                    </Col>
                    </a>
                    <a href="https://kaileytea.myportfolio.com/interactions-in-dog-parks">
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/69ca2579-0187-4867-b319-c6b997d7b9d0/5b1b48ef-c101-41e0-bfa9-12c63ad3cffc_rwc_16x0x1354x1061x1354.jpg?h=3b32fce6bd388d2eff9e82df19dd49ce" />}
                        >
                            <Meta title="UX in Dog Parks" description="A research heavy project focused on between interactions of Seattle dog owners at dog parks." />
                        </Card>
                    </Col>
                    </a>
                    <a href="https://kaileytea.myportfolio.com/untitled">
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/69ca2579-0187-4867-b319-c6b997d7b9d0/503839ac-1fdd-41b5-a548-00446888b231_carw_202x158x640.jpg?h=c356a3eab94eabbbcd6dfbfd536ff1d4%20640w,%20https://pro2-bar-s3-cdn-cf4.myportfolio.com/69ca2579-0187-4867-b319-c6b997d7b9d0/503839ac-1fdd-41b5-a548-00446888b231_carw_202x158x1280.jpg?h=9917438376aa461be0eea9ec9f287f7e%201280w,%20https://pro2-bar-s3-cdn-cf4.myportfolio.com/69ca2579-0187-4867-b319-c6b997d7b9d0/503839ac-1fdd-41b5-a548-00446888b231_carw_202x158x1366.jpg?h=665037b17d9d7216512ebae6635c1352%201366w,%20https://pro2-bar-s3-cdn-cf4.myportfolio.com/69ca2579-0187-4867-b319-c6b997d7b9d0/503839ac-1fdd-41b5-a548-00446888b231_carw_202x158x1920.jpg?h=86824cac1522c793c8492590d1a5892a%201920w,%20https://pro2-bar-s3-cdn-cf4.myportfolio.com/69ca2579-0187-4867-b319-c6b997d7b9d0/503839ac-1fdd-41b5-a548-00446888b231_carw_202x158x2560.jpg?h=d1aed4d8c463404cf68a7f65bb04fec3%202560w,%20https://pro2-bar-s3-cdn-cf4.myportfolio.com/69ca2579-0187-4867-b319-c6b997d7b9d0/503839ac-1fdd-41b5-a548-00446888b231_carw_202x158x5120.jpg?h=a4ef6e92928f8f6cee8be6e2e059d0f5%205120w" />}
                        >
                            <Meta title="Untitled (the game)" description="An interactive game where you get to make choices that (don't) matter." />
                        </Card>
                    </Col>
                    </a>
                    </Row>
                    
                </div>
                </ScrollAnimation>
            </div>
        </div>
        <div className="footerCustom"><footer>Kailey Terracciano | Coded with React 🥴</footer></div>
    </div>

}

export default home