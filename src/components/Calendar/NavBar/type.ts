type DirectionType = 'top' | 'right' | 'bottom' | 'left';
export type ArrowButtonProps = {
  direction: DirectionType;
};
export type GetArrowDegreeType = (props: ArrowButtonProps) => number;

export type ClickDirectionType = 'increase' | 'decrease';
