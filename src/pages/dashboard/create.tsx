import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';

import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';

import type { NextPageWithLayout } from '../_app';
// ignore implicit any entire file
// eslint-disable  @typescript-eslint/no-explicit-any

const ProjectType = {
  SCRAPING: 'Scraping',
  AI: 'AI',
};

const GenerationStrategy: any = {
  STANDARD: 'standard',
  HEADER: 'n-headers',
};

const ProjectCreationPage: NextPageWithLayout = () => {
  const [keywords, setKeywords] = useState<string>('');

  const handleText = (e: any) => {
    console.log(e.target.value);
    setKeywords(e.target.value);
  };

  const lines = useMemo(() => {
    return keywords.split('\n').length;
  }, [keywords]);

  return (
    <PageContent>
      <Formik
        initialValues={{
          name: '',
          type: ProjectType.AI,
          keywords: '',
          strategy: GenerationStrategy.STANDARD,
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <Field name="name">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Nombre proyecto</FormLabel>
                  <Input {...field} type="text" />
                </FormControl>
              )}
            </Field>
            <Field name="type">
              {({ field }) => (
                <FormControl>
                  <FormLabel as="legend">Tipo de proyecto</FormLabel>
                  <RadioGroup defaultValue="AI" {...field} isDisabled={true}>
                    <HStack spacing="24px">
                      <Radio {...field} value="Scraping">
                        Scraping
                      </Radio>
                      <Radio {...field} value="AI">
                        Generación con AI
                      </Radio>
                    </HStack>
                  </RadioGroup>
                </FormControl>
              )}
            </Field>
            <Field name="strategy">
              {({ field }) => (
                <FormControl>
                  <FormLabel as="legend">Estrategia de generación</FormLabel>
                  <RadioGroup
                    defaultValue={GenerationStrategy.STANDARD}
                    {...field}
                  >
                    <HStack spacing="24px">
                      {Object.keys(GenerationStrategy).map((key) => (
                        <Radio
                          {...field}
                          value={GenerationStrategy[key]}
                          key={key}
                        >
                          {GenerationStrategy[key]}
                        </Radio>
                      ))}
                    </HStack>
                  </RadioGroup>
                </FormControl>
              )}
            </Field>
            <Field name="keywords">
              {({ field }) => (
                <FormControl>
                  <FormLabel>Listado de keyword ({lines} lines)</FormLabel>
                  <Textarea
                    placeholder="One keyword each line"
                    value={keywords}
                    onChange={handleText}
                    height="300px"
                  />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </PageContent>
  );
};

ProjectCreationPage.getLayout = (page: ReactElement) => {
  return <ShellWithGroupedMenu>{page}</ShellWithGroupedMenu>;
};

export default ProjectCreationPage;
