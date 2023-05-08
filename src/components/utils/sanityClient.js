import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'lc70pwx2', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
  token:
    'skw9XM1Vp4CEs8LKskSRiLtmvjBAqhMyGtaAzc6Fac4ZtJrm5Idn8Mbh1NmU5TKFPmKK7hTILeffmiM2Ex35n6njcgy07RJkLN8OehUUbnk3voAzVnhymVLiNFcZHrVaU3kPSezovyKTFSvYXblQ21EPnuJq8xqr5EnIcQIi7tSZ1y38dpjw',
  apiVersion: 'v1',
});
