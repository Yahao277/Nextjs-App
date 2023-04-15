/* eslint-disable unused-imports/no-unused-vars */
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import type { ReactElement } from 'react';
import { useMemo } from 'react';

import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';
import { ProjectApi } from '@/services/project.service';

import type { NextPageWithLayout } from '../_app';
// ignore implicit any entire file
// eslint-disable  @typescript-eslint/no-explicit-any

const ProjectType = {
  SCRAPING: 'Scraping',
  AI: 'AI',
};

const GenerationStrategy: any = {
  OUTLINE: 'OUTLINE',
  HEADER: 'HEADER',
};

const separateKeywords = (keywords: string) => {
  return keywords.split('\n').filter((kw) => kw.trim() !== '');
};

const ProjectCreationPage: NextPageWithLayout = () => {
  const toast = useToast();
  const handleSubmit = (values, actions) => {
    const changed = {
      ...values,
      keywords: separateKeywords(values.keywords),
    };
    console.log('submiting data: ', changed);

    ProjectApi.createProject(changed)
      .then((res) => {
        toast({
          title: 'Project created',
          description: 'Your project has been created',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        actions.resetForm();
      })
      .catch((err) => {
        toast({
          title: 'Error creating project',
          description: 'There was an error creating your project',
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
        console.log(err);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <PageContent>
      <Formik
        initialValues={{
          name: '',
          type: ProjectType.AI,
          keywords: '',
          strategy: GenerationStrategy.STANDARD,
        }}
        onSubmit={handleSubmit}
      >
        {(props) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const lines = useMemo(() => {
            return props.values.keywords.split('\n').length;
          }, [props.values.keywords]);
          return (
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
                      defaultValue={GenerationStrategy.OUTLINE}
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
                      {...field}
                      placeholder="One keyword each line"
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
          );
        }}
      </Formik>
    </PageContent>
  );
};

ProjectCreationPage.getLayout = (page: ReactElement) => {
  return <ShellWithGroupedMenu>{page}</ShellWithGroupedMenu>;
};

export default ProjectCreationPage;
