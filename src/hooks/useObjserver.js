import { useEffect, useState, useRef } from "react"

function useObjserver({ externalRef, once = true, distance = '100px' }) {
	const [isNeerScreen, setIsNearScreen] = useState(false);
	const fromRef = useRef()
	useEffect(() => {
		let observer
		const element = externalRef ? externalRef.current : fromRef.current	

		const onChange = (entries, observer) => {
			if (entries[0].isIntersecting) {
				setIsNearScreen(true);
				once && observer.disconnect()
			}
			else {
				setIsNearScreen(false);
			}
		}
		observer = new IntersectionObserver(onChange, {
			rootMargin: distance,
		});
		if (element) observer.observe(element);
		
	})

	return { isNeerScreen , fromRef }
}

export default useObjserver