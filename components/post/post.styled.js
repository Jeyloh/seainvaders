import styled, { css } from 'styled-components';

export const PostPadding = styled.div`
  padding: var(--spacing2);
`;

export const PostContainer = styled.div`
  padding: var(--spacing4) var(--spacing2);
`;

export const PostForm = styled.form`
  display: block;
`;

export const PostDivider = styled.div`
  display: flex;

  > * {
    width: 70%;
  }
  aside {
    width: 30%;
    margin-right: var(--spacing2);
  }
`;
