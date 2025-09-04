import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  logo,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
  className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-10 space-y-6 sm:space-y-0"
  onMouseEnter={() => setPreview(image)}
  onMouseLeave={() => setPreview(null)}
>
  <div>
    <p className="text-xl sm:text-2xl">{title}</p>
    <div className="flex flex-wrap gap-3 mt-2 text-sand text-sm sm:text-base">
      {tags.map((tag) => (
        <span key={tag.id}>{tag.name}</span>
      ))}
    </div>
  </div>

  <button
  onClick={() => {
    setIsHidden(true);
    setPreview(null); 
  }}
  className="flex items-center gap-1 cursor-pointer hover-animation text-sm sm:text-base"
>
  Read More
  <img src="assets/arrow-right.svg" className="w-4 sm:w-5" />
</button>

</div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          logo={logo} 
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
