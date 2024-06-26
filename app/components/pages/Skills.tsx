'use client';
import Section from '../containers/Section';
import SkillsSwiper from '../swiper/SkillsSwiper';
import { memo, useState } from 'react';
import SwiperCore from 'swiper';
import Reveal from '../containers/Reveal';
import styled from 'styled-components';
import Js from '@/public/skills/js.svg';
import Ts from '@/public/skills/ts.svg';
import Node from '@/public/skills/node.svg';
import Php from '@/public/skills/php.svg';
import Next from '@/public/skills/next.svg';
import React from '@/public/skills/react.svg';
import Express from '@/public/skills/express.svg';
import Mongo from '@/public/skills/mongo.svg';
import Mysql from '@/public/skills/mysql.svg';
import Redux from '@/public/skills/redux.svg';
import Electron from '@/public/skills/electron.svg';
import bootstrap from '@/public/skills/bootstrap.svg';
import css from '@/public/skills/css.svg';
import docker from '@/public/skills/docker.svg';
import git from '@/public/skills/git.svg';
import ubuntu from '@/public/skills/ubuntu.svg';
import postman from '@/public/skills/postman.svg';
import sass from '@/public/skills/sass.svg';
import tailwind from '@/public/skills/tailwind.svg';
import styledI from '@/public/skills/styled.svg';
import material from '@/public/skills/material.svg';
import html from '@/public/skills/html.svg';
import cs from '@/public/skills/cs.svg';
import vite from '@/public/skills/vite.svg';
import vitest from '@/public/skills/vitest.svg';
import jest from '@/public/skills/jest.svg';

import {
  AboutTextContainer,
  StyledAboutSubText,
  StyledAboutTitle,
} from '../contents/about/AboutContent';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const [swipers, setSwipers] = useState<{
    first: SwiperCore | null;
    sec: SwiperCore | null;
  }>({
    first: null,
    sec: null,
  });

  const pauseSwipers = () => {
    if (!swipers?.first || !swipers?.sec) return;
    swipers?.first?.autoplay?.stop();
    swipers?.sec?.autoplay?.stop();
  };

  const playSwipers = () => {
    if (!swipers?.first || !swipers?.sec) return;
    swipers?.first?.autoplay?.start();
    swipers?.sec?.autoplay?.start();
  };
  const skills = [
    { name: 'Javascript', img: Js },
    { name: 'Typescript', img: Ts },
    { name: 'ReactJS', img: React },
    { name: 'NextJS', img: Next },
    { name: 'PHP', img: Php },
    { name: 'C#', img: cs },
    { name: 'NodeJS', img: Node },
    { name: 'ExpressJS', img: Express },
    { name: 'Mongo DB', img: Mongo },
    { name: 'MySQL', img: Mysql },
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'Git', img: git },
    { name: 'Redux', img: Redux },
    { name: 'Docker', img: docker },
    { name: 'Electron', img: Electron },
    { name: 'Bootstrap', img: bootstrap },
    { name: 'Ubuntu', img: ubuntu },
    { name: 'Postman', img: postman },
    { name: 'SASS', img: sass },
    { name: 'TailwindCSS', img: tailwind },
    { name: 'Styled Comp', img: styledI },
    { name: 'Material UI', img: material },
    { name: 'VITE', img: vite },
    { name: 'VITEST', img: vitest },
    { name: 'JEST', img: jest },
  ];

  const half = Math.floor(skills.length / 2);

  return (
    <SkillsSection id='#skills'>
      <StyledCenterDiv>
        <Reveal x={-75}>
          <SkillsTextContainer>
            <StyledAboutTitle>{t('MY PROGRESS SO FAR')}</StyledAboutTitle>
            <SkillsTitle>{t('My Skills')}</SkillsTitle>
          </SkillsTextContainer>
        </Reveal>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={-75}>
            <SkillsSwiper
              setSwipers={setSwipers}
              name='first'
              skills={skills.slice(0, half)}
            />
          </Reveal>
        </div>
        <div onMouseEnter={pauseSwipers} onMouseLeave={playSwipers}>
          <Reveal x={75}>
            <SkillsSwiper
              setSwipers={setSwipers}
              name='sec'
              reverse
              skills={skills.slice(half)}
            />
          </Reveal>
        </div>
      </StyledCenterDiv>
    </SkillsSection>
  );
};

export default memo(Skills);

export const SkillsSection = styled(Section)`
  flex-direction: column;
  place-content: center;
`;

export const StyledCenterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const IconContainer = styled.div`
  background: rgb(23, 32, 61);
  border-radius: 50%;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkillsTextContainer = styled(AboutTextContainer)`
  text-align: center;
  flex: 0;
`;

export const SkillsTitle = styled(StyledAboutSubText)`
  margin: 0 auto;
  text-transform: none;
`;
