import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-primary);
  color: var(--text-color-primary);
  
  padding-left: 13px;

  .logo-navigation {
    display: flex;
    gap: 30px;
  }

  &.collapse {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding-left: 0;
    flex-direction: column-reverse;

    transition: transform 0.3s;

    .logo-navigation {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 3fr;
      padding: 0 16px 8px 16px;
      
      .navigation {
        ul {
          justify-content: space-between;

          li {
            a {
              display: block;
            }
          }
        }
      }
    }

    .search-container {
      width: 100%;

      .input-container {
        width: 100%;

        > input {
          width: 50%;
        }
      }
    }

    &.hidden {
      transform: translateY(100%);
    }
  }
`
export const Logo = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  .logo-icon {
    width: 26.3px;
    height: 26px;
  }

  > h1 {
    font-size: 24px;
    font-weight: 600;
  }
`

export const Navigation = styled.div`
  > ul {
    display: flex;

    > li {
      list-style: none;
      padding: 15.2px 8px 11.2px;

      > a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        font-size: 16px;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 16px;

  > a {
    cursor: pointer;
    padding: 15.2px 8px 11.2px;

    &:hover {
      opacity: 0.8;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    box-sizing: content-box;
    background: var(--bg-secondary);
    border-radius: 3px 0 0 3px;
    height: 3rem;
    padding-left: 16px;
    padding-top: 1px;
    padding-bottom: 1px;

    &.focused {
      background-color: #358ef1;
    }

    > input {
      background-color: inherit;
      outline: 0;
      border: none;
      font-size: inherit;
      font-weight: inherit;
      text-indent: 5.8px;
      caret-color: var(--text-color-primary);

      height: 100%;

      &::placeholder {
        color: var(--text-color-primary);
      }
    }
  }
`