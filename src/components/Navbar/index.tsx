import { Logo, Nav, Navigation, SearchContainer } from './styles'
import { SiTypescript } from 'react-icons/si'
import { VscSearch } from 'react-icons/vsc'
import { useEffect, useState } from 'react'

export function Navbar() {
  const [ isInputFocused, setIsInputFocused ] = useState(false)
  const [ innerWidth, setInnerWidth ] = useState(0)
  const [ lastScrollTop, setLastScrollTop ] = useState(0)
  const [ showNavbar, setShowNavbar ] = useState(true)

  useEffect(() => {
    function onResize() {
      setInnerWidth(window.innerWidth)
    }

    function onScroll() {
      let st = window.pageYOffset || document.documentElement.scrollTop
      if (st > lastScrollTop){
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollTop(st <= 0 ? 0 : st) // For Mobile or negative scrolling
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [lastScrollTop])

  let navClass = ''
  if (innerWidth <= 790) {
    navClass += 'collapse'

    if (!showNavbar) {
      navClass += ' hidden'
    }
  }

  navClass.trim()

  return (
    <>
      <Nav className={navClass}>
        <div className='logo-navigation'>
          <Logo className='logo'>
            <SiTypescript className='logo-icon' />
            { innerWidth > 790 && <h1>TypeScript</h1> }
          </Logo>
          <Navigation className='navigation'>
            <ul>
              { innerWidth > 790 && <li><a href="#">Download</a></li> }
              <li><a href="#">Docs</a></li>
              { innerWidth > 870 && <li><a href="#">Handbook</a></li> }
              <li><a href="#">Community</a></li>
              { innerWidth > 1050 && <li><a href="#">Playground</a></li> }
              <li><a href="#">Tools</a></li>
            </ul>
          </Navigation>
        </div>
        <SearchContainer className='search-container'>
          { innerWidth > 790 && <a>Em Pt</a> }
          <div className={!isInputFocused ? 'input-container' : 'input-container focused'}>
            <VscSearch />
            <input
              type="text"
              placeholder="Search Docs"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}/>
          </div>
        </SearchContainer>
      </Nav>
    </>
  )
}