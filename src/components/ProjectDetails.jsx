import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  logo,      
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
  className="relative w-[95%] sm:w-auto max-w-lg sm:max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-y-auto max-h-[90vh]"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
>
  {/* Close button */}
  <button
    onClick={closeModal}
    className="absolute p-2 rounded-sm top-3 right-3 bg-midnight hover:bg-gray-500"
  >
    <img src="assets/close.svg" alt="close" className="w-5 h-5 sm:w-6 sm:h-6" />
  </button>

  {/* Project Image */}
  <img src={image} alt={title} className="w-full rounded-t-2xl max-h-60 sm:max-h-96 object-cover" />

  {/* Content */}
  <div className="p-4 sm:p-5 text-sm sm:text-base">
    <div className="flex items-center gap-3 mb-2">
      {logo && (
        <img src={logo} alt={`${title} logo`} className="w-6 h-6 sm:w-8 sm:h-8 rounded-md" />
      )}
      <h5 className="text-lg sm:text-2xl font-bold text-white">{title}</h5>
    </div>

    <p className="mb-3 font-normal text-neutral-400">{description}</p>
    {subDescription.map((subDesc, index) => (
      <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
    ))}

    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <img
            key={tag.id}
            src={tag.path}
            alt={tag.name}
            className="rounded-lg size-8 sm:size-10 hover-animation"
          />
        ))}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
      >
        View Project
        <img src="assets/arrow-up.svg" alt="arrow" className="size-4" />
      </a>
    </div>
  </div>
</motion.div>

    </div>
  );
};

export default ProjectDetails;
