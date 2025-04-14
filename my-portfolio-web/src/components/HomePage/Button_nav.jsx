const Button_nav = ({ link,title,description }) => {
  return (
    <div className="group flex items-center h-44 max-w-3xl bg-background
                            transition-all duration-300 ease-in-out transform hover:text-accent hover:border-b-2 hover:border-accent md:hover:px-16 cursor-pointer">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
          <h3 className="text-xl mb-5 text-center font-semibold text-second-text group-hover:text-accent">{title}</h3>
          <p className="text-second-text mx-10 group-hover:text-accent">{description}</p>
      </a>
    </div>
  );
};

export default Button_nav;
