import React from "react";

// const useOutsideClick = (ref, callback, isActive) => {
// 	React.useEffect(() => {
// 		const handleOutsideClick = (event) => {
// 			if (ref.current && !ref.current.contains(event.target)) {
// 				callback();
// 			}
// 		};
// 		if (isActive) {
// 			document.addEventListener("mousedown", handleOutsideClick);
// 		}
// 		return () => {
// 			document.removeEventListener("mousedown", handleOutsideClick);
// 		};
// 	}, [ref, callback, isActive]);
// };

const useOutsideClick = (refs, callback, isActive) => {
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      const isOutside = refs.every((ref) => ref.current && !ref.current.contains(event.target));
      if (isOutside) {
        callback();
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [refs, callback, isActive]);
};

export default useOutsideClick;