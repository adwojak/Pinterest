import { imagePlaceholders, w, m } from "src/misc/constants";

export interface Image {
  width: number;
  height: number;
}

interface ScaledImage {
  scaledWidth: number;
  scaledHeight: number;
}

export default (): Array<Image> => {
  let formattedImages: Array<Image> = [];
  let singleGroup: Array<Object> = [];
  let summary: number = 0;
  imagePlaceholders.forEach((image: Image, i: number): void => {
    summary += image.width;
    singleGroup.push(image);
    if (summary >= w) {
      formattedImages.push(...formatSingleGroup(singleGroup));
      singleGroup = [];
      summary = 0;
    } else if (i === imagePlaceholders.length - 1) {
      formattedImages.push(image);
    }
  });
  return formattedImages;
};

const formatSingleGroup = (group: Array<Object>): Array<Image> => {
  group.length === 1 && group;
  const smallestHeight: number = Math.min.apply(
    null,
    group.map((image: Image) => image.height)
  );
  const scaledToSameSize: Array<Object> = group.map(
    (image: Image): ScaledImage => {
      const scale: number = smallestHeight / image.height;
      return {
        scaledWidth: image.width * scale,
        scaledHeight: image.height * scale
      };
    }
  );
  const finalScale: number =
    (w - m * (group.length - 1)) /
    scaledToSameSize
      .map((image: ScaledImage): number => image.scaledWidth)
      .reduce((a: number, b: number): number => a + b);
  return scaledToSameSize.map(
    (image: ScaledImage): Image => ({
      width: Math.round(image.scaledWidth * finalScale),
      height: Math.round(image.scaledHeight * finalScale)
    })
  );
};
