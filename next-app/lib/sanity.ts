import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'your_project_id', // replace with your project id
  dataset: 'production', // replace with your dataset
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-03-25', // use a UTC date string
  token: '', // or leave blank for unauthenticated usage
});