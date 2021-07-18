import styled from 'styled-components'

const PokeTypeBadge = styled.span`
  width: 7rem;
  padding: 0.5rem 0;
  border-radius: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: var(--veryDarkGrayishBlue);
  &.fire {
    background-color: var(--typeGroup1);
  }
  &.grass {
    background-color: var(--typeGroup2);
  }
  &.electric {
    background-color: var(--typeGroup3);
  }
  &.water {
    background-color: var(--typeGroup4);
  }
  &.ground,
  &.rock,
  &.dark,
  &.shadow {
    background-color: var(--typeGroup5);
  }
  &.rock {
    background-color: var(--typeGroup6);
  }
  &.fairy {
    background-color: var(--typeGroup7);
  }
  &.poison {
    background-color: var(--typeGroup8);
  }
  &.bug {
    background-color: var(--typeGroup9);
  }
  &.dragon {
    background-color: var(--typeGroup10);
  }
  &.psychic,
  &.ghost,
  &.steel {
    background-color: var(--typeGroup11);
  }
  &.flying {
    background-color: var(--typeGroup12);
  }
  &.fighting {
    background-color: var(--typeGroup13);
  }
  &.normal,
  &.ice,
  &.unknown {
    background-color: var(--typeGroup14);
  }
`
export default PokeTypeBadge
