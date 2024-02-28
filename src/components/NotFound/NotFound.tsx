import type { ReactElement } from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
	const { pathname } = useLocation();

	const currentPath = pathname.split("/") // Splits the string into an array based on the given separator.
																					// In this case, "/" that separate parts of the URL.
															.toSpliced(1, 1) // Removes "Website" from the array and returns a new array.
															.join("/"); // Join the array back together into a string

	return (
		<>
			<h3>Page Not Found</h3>
			<p>
				Ops! It appears you encountered a <code>404</code> error.<br />
				This error occurred because the url you tried to go to, "<i>{currentPath}</i>",
				does not exist.
			</p>
		</>
	);
}

export default NotFound;