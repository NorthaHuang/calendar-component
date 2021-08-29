import type { GetArrowDegreeType } from '../type';

/**
 * Get the degree number for `<ArrowButton />` component.
 *
 * @param props.direction - The direction of the arrow.
 * The value could only be `top`, `right`, `bottom`, `left`.
 * `left` is default.
 *
 * @returns rotate degree number.
 */
export const getArrowDegree: GetArrowDegreeType = ({ direction }) => {
  switch (direction) {
    case 'top':
      return -45;
    case 'right':
      return 45;
    case 'bottom':
      return 135;
    // left
    default:
      return -135;
  }
};
