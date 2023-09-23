const ProjectTag = ({name, onClick, isSelected}) => {

   const buttonStyles = isSelected ? 'text-white bg-purple-500' : 'text-[#ADB7BE] hover:border-slate-600'

  return (
    <button className={`${buttonStyles} rounded-full border-2  px-6 py-6 text-xl cursor-pointer`}
    onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
