import React from "react";

// Image Prop
interface ImageProp {
  src: string;
  className?: string;
  imageClassname?: string;
}

// Image Component
const Image: React.FC<ImageProp> = ({ src, className, imageClassname }) => {
  const addDefaultSrc = (ev: any) => {
    ev.target.src =
      "https://toppng.com/uploads/preview/doge-cigar-and-glasses-11609579082125aekolnk.png";
  };

  return (
    <div className={`${className} w-8 h-8 rounded-full bg-white`}>
      <img
        className={`rounded-full ${imageClassname}`}
        onError={addDefaultSrc}
        src={src}
        alt={"token"}
      />
    </div>
  );
};

export default Image;
