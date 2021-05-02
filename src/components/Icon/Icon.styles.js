import styled from 'styled-components';

export const IconWrapper = styled.div`
  position: relative;

  ${({ theme, hover }) =>
    hover &&
    `
        &:hover {
            background-color: ${theme.colors.lightenGrey};

            > div {
                visibility: visible;
            }
        }
    `}
`;

export const IconItem = styled.div`
  background-image: ${({ iconUrl }) => `url(${iconUrl})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: ${(props) => props.iconSize}rem;
  height: ${(props) => props.iconSize}rem;
`;