import styled from 'styled-components';

export const Book = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 200px;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.secondary};
  margin: 16px;
  border-radius: 20px;

  :hover > h1 {
    color: ${p => p.theme.colors.text};
  }
`;

export const AppName = styled.h1`
  color: white;
  margin: 16px;
`;

export const HelloText = styled.p`
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.secondary};
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  color: white;
`;
