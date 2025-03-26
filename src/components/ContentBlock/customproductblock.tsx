import { Fade } from "react-awesome-reveal";
import { Col } from "antd";
import { ContentSection, ContentWrapper, StyledRow } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";

interface CustomProductBlockProps {
  id: string;
}

const CustomProductBlock: React.FC<CustomProductBlockProps> = ({ id }) => {
  return (
    <ContentSection>
      <Fade direction="left" triggerOnce>
        <StyledRow justify="space-between" align="middle" id={id} direction="left">
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src="waving.svg" width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>Contact Us</h6>
              <p>Have questions? Reach out to us!</p>

              <p>
                📞 <strong>TR Qadri Sir:</strong> 
                <a href="tel:+919960257440" style={{ color: "#007bff", textDecoration: "none", marginLeft: "5px" }}>
                  +91 99602 57440
                </a>
              </p>

              <p>
                📞 <strong>Er Mohammad Aasim:</strong> 
                <a href="tel:+919130510989" style={{ color: "#007bff", textDecoration: "none", marginLeft: "5px" }}>
                  +91 91305 10989
                </a>
              </p>

              <p>
                📧 <a href="mailto:buniyaadacademythefoundation@gmail.com" style={{ color: "#007bff", textDecoration: "none" }}>
                  buniyaadacademythefoundation@gmail.com
                </a>
              </p>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default CustomProductBlock;
