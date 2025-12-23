export const FooterButton = ({ text = "", className = "", ...others }) => {
  return (
    <button
      type="button"
      {...others}
      className={`${className} transition-all w-full duration-300 ease-in-out rounded-lg rounded-no-tl disabled:cursor-not-allowed text-sm disabled:bg-gray-300 disabled:text-gray-500 py-4 px-5 bg-main text-white`}>
      {text}
    </button>
  );
};
