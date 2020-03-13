import React from 'react';
import {
    HeadingWrapCont,
    HeadingElements,
    Line,
    SocialCont,
    Social
} from './styles';
import { Container } from '../container';
import { HeadingMain } from '../../styles/';

function HeadingWrap() {
    return (
        <Container>
            <HeadingWrapCont>
                <HeadingElements>
                    <Line />
                    <SocialCont>
                        <a
                            title='LinkedIn - Ananya Sharma'
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.linkedin.com/in/ananyasharma09/'
                        >
                            <Social className='linkedin'></Social>
                        </a>

                        <a
                            title='Github Repository'
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/Ananyajcodes'
                        >
                            <Social className='git'></Social>
                        </a>
                        
                    </SocialCont>
                </HeadingElements>
                <HeadingMain>
                    Hi there, I’m Ananya. <br />
                    Full Stack <span>Developer</span>, <br />
                    Student, Innovator  and Leader
                </HeadingMain>
            </HeadingWrapCont>
        </Container>
    );
}

export default HeadingWrap;
