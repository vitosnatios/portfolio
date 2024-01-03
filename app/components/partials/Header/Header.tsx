'use client';
import NextLink from 'next/link';
import StyledHeader from './StyledHeader';
import StyledNav from './StyledNav';
import StyledUl from '../../elements/StyledUl';
import StyledHeaderLi from './StyledHeaderLi';
import { DiGithubBadge } from 'react-icons/di';
import HeaderLogo from './HeaderLogo';
import StyledHeaderButton from './StyledHeaderButton';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Hamburger from 'hamburger-react';
import { ISection } from '@/app/types/Section';
import { Link } from 'react-scroll';

type Props = {
  headerHeight: number;
  setHeaderHeight: Dispatch<SetStateAction<number>>;
  setSection: Dispatch<SetStateAction<ISection>>;
  section: ISection;
};

export const links: { href: ISection; content: string }[] = [
  { href: '#home', content: 'HOME' },
  { href: '#about', content: 'ABOUT' },
  { href: '#services', content: 'SERVICES' },
  { href: '#skills', content: 'SKILLS' },
  { href: '#work', content: 'MY WORK' },
  { href: '#contact', content: 'CONTACT' },
];

const Header = ({
  setSection,
  section,
  headerHeight,
  setHeaderHeight,
}: Props) => {
  const [big, setBig] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const windowSize = window.innerWidth;
      setBig(!(windowSize <= 999));
      setShowMenu(!(windowSize <= 999));
      setHeaderHeight(
        document.querySelector('#header')?.getBoundingClientRect().height || 0
      );
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setHeaderHeight]);

  return (
    <StyledHeader id='header' $big={big}>
      <HeaderLogo big={big} />
      <div
        style={{
          marginTop: '.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
          gap: '.5rem',
        }}
      >
        {!big && (
          <Hamburger
            color='var(--color-white)'
            toggled={showMenu}
            toggle={setShowMenu}
            size={20}
          />
        )}
        <StyledNav $big={big} $showMenu={showMenu}>
          <StyledUl $big={big}>
            {links.map(({ href, content }) => {
              return (
                <StyledHeaderLi key={href} selected={href === section}>
                  <Link
                    onClick={() => setSection(href)}
                    smooth={true}
                    duration={300}
                    to={href}
                    offset={-headerHeight}
                  >
                    {content}
                  </Link>
                </StyledHeaderLi>
              );
            })}
          </StyledUl>

          <NextLink href='https://github.com/vitosnatios' target='_blank'>
            <DiGithubBadge
              style={{ color: 'var(--color-white)' }}
              size='25px'
            />
          </NextLink>
          <StyledHeaderButton>Contact Me</StyledHeaderButton>
        </StyledNav>
      </div>
    </StyledHeader>
  );
};

export default Header;