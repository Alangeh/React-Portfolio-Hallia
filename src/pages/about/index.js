import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  schooltimeline,
  skills,
  services,
  languages,
  certificates
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp separation__line">
          <Col lg="3">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="9" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp separation__line">
          <Col lg="3">
            <h3 className="color_sec py-4">My Certificates</h3>
          </Col>
          <Col lg="9" className="d-flex align-items-center">
          {certificates.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <a href={data.link} target="_blank" rel="noopener noreferrer" className="button">
                    <div id="button_p" className="ac_btn btn">
                      View
                    </div>
                  </a>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp separation__line">
          <Col lg="3">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="9">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp separation__line">
          <Col lg="3">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp separation__line">
          <Col lg="3">
            <h3 className="color_sec py-4">Eduction</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {schooltimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp separation__line">
          <Col lang="5">
            <h3 className="color_sec py-4">Awards</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp separation__line">
          <Col lg="3">
            <h3 className="color_sec py-4">Languages</h3>
          </Col>
          <Col lg="9">
            {languages.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
