import React, { useState, useEffect } from "react";

const LatestRelease = ({ prerelease }) => {
	const [releases, setReleases] = useState({
		latest: "v2.3.0",
		prerelease: "v2.4.0-beta.1",
	});

	useEffect(() => {
		(async () => {
			const response = await fetch(
				// api to get latest realese
				// {"latest":"v2.28.1","prerelease":"v2.29.0-beta.1"}
				// "https://releases.hasura.io/graphql-engine?agent=docs.hasura.io"
				"https://releases.dronahq.io/graphql-engine?agent=docs.dronahq.io"
			);
			const responseJson = await response.json();
			setReleases(responseJson);
		})();
	}, []);

	return (
		<span>
			{prerelease ? releases.prerelease : releases.latest}
		</span>
	);
};

export default LatestRelease;
