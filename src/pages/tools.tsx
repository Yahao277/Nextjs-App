import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Tools = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <h2 className="text-2xl font-bold">Tools List</h2>
    <ul>
      <li>
        <Link href="/dashboard/" className="text-gray-700 hover:text-gray-900">
          GptDashboard
        </Link>
      </li>
      <li>
        <Link href="/dashboard/" className="text-gray-700 hover:text-gray-900">
          ScrapingDashboard
        </Link>
      </li>
      <li>
        <Link href="/dashboard/" className="text-gray-700 hover:text-gray-900">
          ToolsDashboard
        </Link>
      </li>
    </ul>
    <p>
      <b>Create Gpt Project:</b> providing a list of keywords, the tool will
      generate content using GPT
    </p>
    <p>
      <b>Create Scraping Project:</b> providing a csv of the scraped data, the
      tool will curate the content to fit with our niche site template
    </p>
    <p>
      <b>Other tools:</b>
    </p>
  </Main>
);

export default Tools;
