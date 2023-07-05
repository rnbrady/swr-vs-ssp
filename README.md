### SWR vs SSP

This demo repo contains a home page and two other pages linked with next/link. Each will show the name of the user after 3 seconds on first view, but there are differences in loading state and caching:

- SWR page (performs a request to /api/user which returns the name of the user after 3 seconds)
- SSP page (has getServerSideProps function which returns the name of the user after 3 seconds)

Try them out to compare loading state behaviours. Visit each one twice to compare caching behaviours.