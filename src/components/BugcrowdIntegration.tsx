import { useEffect } from "react";

const BugcrowdIntegration = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://bugcrowd.com/de6c1492-2b86-4d32-bf01-4c5faca093d2/external/script"; // Update with your Bugcrowd script URL
        script.async = true;
        script.setAttribute("data-bugcrowd-program", "https://bugcrowd.com/de6c1492-2b86-4d32-bf01-4c5faca093d2/external/report");

        // main div inside container class
        const containerdivs = document.getElementsByClassName("theme-doc-markdown"); 
        const mainContentDiv = containerdivs[0];
        mainContentDiv.appendChild(script);

        // document.body.appendChild(script);

        return () => {
            if (mainContentDiv.contains(script)) {
                // dynamically generated bugcrowd form
                const bugcrowdFrame = document.getElementById("bugcrowd-external-submission-form"); 

                if (bugcrowdFrame && bugcrowdFrame.parentNode) {
                    bugcrowdFrame.parentNode.removeChild(bugcrowdFrame);
                }
                mainContentDiv.removeChild(script);
            }
        };
    }, []);

    return null; // This component does not render anything
};

export default BugcrowdIntegration;