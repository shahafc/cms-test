export default {
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'openingSentence',
      title: 'Opening Sentence',
      type: 'text',
    },
    {
      name: 'insightDetails',
      title: 'Insight Details',
      type: 'text',
    },
    {
      name: 'companyInformation',
      title: 'Company Information',
      type: 'text',
    },
    {
      name: 'annualRevenue',
      title: 'Annual Revenue',
      type: 'number',
    },
    {
      name: 'causeOfAction',
      title: 'Cause of Action',
      type: 'reference',
      to: [{ type: 'causeOfAction' }],
    },
  ],
}