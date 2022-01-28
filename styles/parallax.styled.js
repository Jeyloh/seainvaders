import styled from 'styled-components';

export const StyledParallax = styled.div`
  height: calc(150vh * ${(props) => props.stretchHeight || 1});

  .wrapper {
    position: relative;
    width: 100vw;
    height: 150vh;
    margin-left: calc((100% - 100vw) / 2);
    display: grid;
    grid-template-columns: repeat(10, 10%);
    grid-template-rows: repeat(10, 10%);
    grid-auto-flow: row;

    .grid-child {
    }

    .image-clip {
      clip: rect(0, auto, auto, 0);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100%);
    }

    .text-wrapper {
      position: absolute;
      height: inherit;
      width: inherit;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      z-index: 10;
      font-weight: bolder;
      font-size: 3rem;
      color: white;
      padding: 3rem;

      .viewport-listener {
        position: absolute;
        padding: 20px;
        left: 0;
        width: 100%;
        font-size: 14px;
      }

      .bottom {
        bottom: 0;
        background: hotpink;
        ${
          '' /* &:after {
          content: 'bottom';
        } */
        }
      }

      .top {
        top: 0;
        background: purple;
        ${
          '' /* &:after {
          content: 'top';
        } */
        }
      }

      .text-position {
        overflow-y: auto;
        text-align: center;
        width: 50%;
        z-index: 20;
      }
      .center {
        margin: 0 auto;
      }
      .right {
        margin-left: auto;
        text-align: right;
      }
      .left {
        margin-right: auto;
        text-align: left;
      }
    }
  }
`;

export const ParallaxImageItem = styled.div`
  background-image: url(${(props) => props.url});
  background-attachment: scroll;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateZ(0);
  will-change: transform;
  z-index: 1;
  transition: background-image 300ms ease-in-out;
`;
