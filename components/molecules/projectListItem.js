import { Card, Col, Row, Button, Text, Badge, styled } from "@nextui-org/react";
import { motion } from "framer-motion";

const TechBadge = styled(Badge, {
    variants: {
        background: {
            "JavaScript": {
                ".nextui-badge": {
                    background: "$warning"
                }
            },
            "CSS": {
                ".nextui-badge": {
                    background: "blue"
                }
            },
            "React": {
                ".nextui-badge": {
                    background: "lightgrey"
                }

            },
            "Next": {
                ".nextui-badge": {
                    background: "$secondary"
                }

            },
            "HTML": {
                ".nextui-badge": {
                    background: "$error"
                }

            }
        }
    }
})

export const ProjectListItem = ({ project }) => (

    <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0" }}
        transition={{ type: "spring", stiffness: 100, duration: 20 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
    >
        <Card css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
                        {project.projectDate[0]} - {project.projectDate[1] ? project.projectDate[1] : "current"}
                    </Text>
                    <Text h3 color="white">
                        {project.title}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src="https://nextui.org/images/card-example-5.jpeg"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Text>{project.description}</Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row justify="flex-end" align="center">
                            {project.techUsed.map((techUsed) => <TechBadge key={techUsed} background={techUsed}>{techUsed}</TechBadge>)}
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    </motion.div>
);
