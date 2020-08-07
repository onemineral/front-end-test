import styled from "styled-components";

export const VideoWrapper = styled.div`
  --color-white: hsl(0, 0%, 100%);
  --color-trans: hsl(0, 0%, 100%, 0.25);
  --color-black: hsl(0, 0%, 14%);
  --color-black-transparent: hsla(0, 0%, 14%, 0.7);

  --layout-gutter: 1rem;
  --zindex-meta: 1;
  --transition: all 0.2s ease-in-out;
  --transition-slow: all 0.5s ease-in-out;
  --scrubberSize: 16px;

  font-weight: 100;
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 1253px;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  .videovideo {
    width: 100%;
    display: block;
  }
  .videobutton {
    text-align: left;
    color: var(--color-trans);
    background-color: transparent;
    padding: 0;
    border: 0;
    appearance: none;
  }
  .videobutton,
  .video[type="range"] {
    cursor: pointer;
  }
  .video[type="range"] {
    background-color: transparent;
    -webkit-appearance: none;
  }

  /* custom range input styling: http://danielstern.ca/range.css/#/ */
  .video[type="range"]::-webkit-slider-thumb {
    background: var(--color-white);
    height: 16px;
    width: 16px;
    border-radius: 50%;
    margin-top: -7px;
    -webkit-appearance: none;
  }
  .video[type="range"]::-moz-range-thumb {
    background: var(--color-white);
    height: 16px;
    width: 16px;
    border-radius: 50%;
    margin-top: -7px;
  }
  .video[type="range"]::-ms-thumb {
    background: var(--color-white);
    height: 16px;
    width: 16px;
    border-radius: 50%;
    margin-top: -7px;
  }
  .video[type="range"]::-webkit-slider-runnable-track {
    background: var(--color-trans);
    height: 2px;
  }
  .video[type="range"]::-moz-range-track {
    background: var(--color-trans);
    height: 2px;
  }
  .video[type="range"]::-ms-track {
    background: var(--color-trans);
    height: 2px;
  }
  .video[type="range"]::-ms-thumb {
    background: var(--color-trans);
    height: 2px;
  }

  &:hover .video__statusIcon,
  &:focus .video__statusIcon {
    opacity: 0.5;
  }

  &.video__statusIcon:focus-within {
    opacity: 1;
  }

  &:hover .video__controls,
  &:focus .video__controls {
    opacity: 0.5;
  }
  &.video__controls:hover,
  &.video__controls:focus,
  &.video__controls:focus-within {
    opacity: 1;
  }
`;

export const StatusIcon = styled.button`
  width: 100px;
  height: 100px;
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  filter: drop-shadow(2px 4px 6px var(--color-black));
  z-index: var(--zindex-meta);
  opacity: 0;
  transition: var(--transition);

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const VideoControls = styled.div`
  width: 100%;
  padding: var(--layout-gutter);
  position: absolute;
  left: 0;
  z-index: var(--zindex-meta);
  opacity: 0;
  transition: var(--transition);

  font-size: 13px;
	background: linear-gradient(
		to top,
		hsl(0, 0%, 14%) 0%,
		hsla(0, 0%, 14%, 0.738) 19%,
		hsla(0, 0%, 14%, 0.541) 34%,
		hsla(0, 0%, 14%, 0.382) 47%,
		hsla(0, 0%, 14%, 0.278) 56.5%,
		hsla(0, 0%, 14%, 0.194) 65%,
		hsla(0, 0%, 14%, 0.126) 73%,
		hsla(0, 0%, 14%, 0.075) 80.2%,
		hsla(0, 0%, 14%, 0.042) 86.1%,
		hsla(0, 0%, 14%, 0.021) 91%,
		hsla(0, 0%, 14%, 0.008) 95.2%,
		hsla(0, 0%, 14%, 0.002) 98.2%,
		hsla(0, 0%, 14%, 0) 100%
	);
	bottom: 0;
`;


export const VideoControlsLower = styled.div`
	color: var(--color-trans);
	display: flex;
	justify-content: space-between;
`

export const VideoControlsLeft = styled.div`
	display: flex;
	flex-grow: 4;
`

export const VideoControlsRight = styled.div`
  display: flex;
	flex: auto;
	align-items: center;
`