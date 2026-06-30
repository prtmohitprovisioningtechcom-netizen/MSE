export const socialWorkImages = Array.from({ length: 10 }, (_, index) => {
  const number = index + 1;
  return {
    src: `/Social Work/${number}.jpeg`,
    alt: `MSE Social Work activity ${number}`,
  };
});
