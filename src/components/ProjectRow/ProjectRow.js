import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';


import angular from '../../images/Angular.png';
import localshare from '../../images/localshare.png';

const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: unset;
    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 70px;
        margin-top: 40px;
        height: 500px;
    }
`;



const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 4px;
    transition-duration: 0.3s;
`;

const Project = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 90px;
    transition-duration: 0.3s;

    :hover {
        ${ProjectImage} {
            transform: scale(1.03);
        }

        ${ProjectLink} {
            border-bottom: 2px solid black;
        }
    }

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 10%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0px;
    }

    :nth-child(1) {
        ${ProjectImage} {
            background-image: url(${angular});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }

    :nth-child(2) {
        ${ProjectImage} {
            background-image: url(${localshare});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 30px;
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

function ProjectRow() {
    return (
        <ProjectContainer>
            <Project>
              
                    <ProjectImage />
               
               
                    <SubHeading>Angular Portfolio</SubHeading>
             
                <ProjectParagraph>
                    Personal website/portfolio built using Angular exhibiting prior work experience and projects.
                </ProjectParagraph>
              
                <div class = "forButton"> <a href='http://ananysharma.com/'>
                                            <b>View Site</b>
                </a></div>
                   
                  
              
            </Project>
            <Project>
                    <ProjectImage />
               
                    <SubHeading>Local Fileshare Client</SubHeading>
                
                <ProjectParagraph>
                A fileshare client built on Node and Express serve your files/folders locally using the client with an allowance to download to any device.
                </ProjectParagraph>

                <div class = "forButton"> <a href='https://github.com/ashar340/file-share-client'>
                                            <b>View Project</b>
                </a></div>
            </Project>
        </ProjectContainer>
    );
}

export default ProjectRow;
