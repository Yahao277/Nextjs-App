// diagram
/**
 * scraped file
 * collections:
 * scraping-projects (register metadata)
 * amazon-links
 * interlinks
 * scraping-posts-original
 * scraping-posts-final
 *
 * gpt-projects (register metadata)
 * gpt-posts
 *
 * flow:
 * 1. upload scraped file -> scraping-posts-original
 * 2. extract links -> amazon-links, interlinks
 * 3. replace links, curate -> scraping-posts-final
 */

export const gptStages = [
  {
    stage: 'Introduce Keywords',
    actions: [{ action: 'Upload keywords' }],
  },
  {
    stage: 'Introduce title',
    actions: [
      { action: 'generate titles' },
      { action: 'upload titles' },
      { action: 'upload full' },
    ],
  },
  {
    stage: 'Introduce outline',
    actions: [
      { action: 'generate outline' },
      { action: 'upload outline' },
      { action: 'upload full' },
    ],
  },
  {
    stage: 'Introduce content',
    actions: [
      { action: 'generate content' },
      { action: 'upload content' },
      { action: 'upload full' },
    ],
  },
];

export const scrapedStages = [
  {
    stage: 'Upload Csv file',
    actions: [{ action: 'Upload csv file' }],
  },
  {
    stage: 'Extract links',
    actions: [
      { action: 'Extract amazon links' },
      { action: 'Extract interlinks' },
      { action: 'Extract images' },
    ],
  },
  {
    stage: 'Replace links',
    actions: [
      { action: 'Upload amazon links csv' },
      { action: 'Upload interlinks csv' },
      { action: 'Upload images' },
    ],
  },
  {
    stage: 'Curation',
    actions: [{ action: 'Curate' }],
  },
];
