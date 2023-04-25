import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['white100']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 25%;
  }
`

export const NewExampleButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['purple500']};
  color: ${(props) => props.theme.white100};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['purple300']};
    transition: background 0.5s;
  }
`
