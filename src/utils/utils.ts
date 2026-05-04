export const initItems = new Array(6_999_999).fill(0).map((_, index) => ({
  id: index,
  isSelected: index === 2_500_000,
}));
