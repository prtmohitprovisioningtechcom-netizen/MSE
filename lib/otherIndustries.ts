export const otherIndustriesImages = Array.from({ length: 5 }, (_, index) => {
  const number = index + 1;
  return {
    src: `/home/industrial/${number}.jpg`,
    alt: `MSE Other Industries ${number}`,
  };
});
