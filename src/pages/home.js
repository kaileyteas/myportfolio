import React from 'react'
import { Card, Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";

function home(){
    const { Meta } = Card;

    return <div className="page">
        <div className="homeSection">
            <h1>Hi there, I'm Kailey.</h1>
            <h2>I'm a UX Designer based in Seattle, WA.</h2>
        </div>

        <div className="aboutSection">
            <h1>About</h1>
            <div className="aboutSectionDetails">
                <img src="https://image.flaticon.com/icons/svg/1067/1067993.svg" 
                alt="Graduate Icon" width="200px" height="200px"/>
                <div className="aboutSectionDescription">
                    <p>I'm a Junior in Human-Centered Design & Engineering with a focus in 
                        Human-Computer Interaction at the University of Washington, Seattle.</p>
                </div>

                <div className="aboutSectionSocials">
                    <div style={{"display":"flex", "flex-direction":"row", "justify-content":"center"}}>
                        <a href="https://linkedin.com/in/kaileytea">
                            <img src="https://image.flaticon.com/icons/svg/145/145807.svg" alt="LinkedIn" width="40px" height="40px"/>
                                <figcaption>@kaileytea</figcaption>
                        </a>
                    </div>
                    <div style={{"display":"flex", "flex-direction":"row", "justify-content":"center"}}>
                        <a href="https://www.instagram.com/braveiy/">
                            <img src="https://image.flaticon.com/icons/svg/733/733558.svg" alt="Instagram" width="40px" height="40px"/>
                                <figcaption>@braveiy</figcaption>
                        </a>
                    </div>
                    <div style={{"display":"flex", "flex-direction":"row", "justify-content":"center"}}>
                        <a href="mailto:kailet@uw.edu?Subject=Hello%20again">
                            <img src="https://image.flaticon.com/icons/svg/732/732200.svg" alt="Gmail" width="40px" height="40px"/>
                                <figcaption>kailet@uw.edu</figcaption>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="projects">
            <h1>Projects</h1>
            <div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>

}

export default home