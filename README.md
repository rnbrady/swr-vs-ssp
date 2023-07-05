### SWR vs SSP

This demo repo contains a home page and two other pages linked with next/link, both will show the name of the user after 3 seconds:

- SWR page (performs a request to /api/user which returns the name of the user after 3 seconds)
- SSP page (has getServerSideProps function which returns the name of the user after 3 seconds)

Try them out to compare loading states behaviour. Visit easch one twice to compare caching behaviour.