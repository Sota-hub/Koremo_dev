import { GetStaticProps } from "next";

const titleSSG = (title: string) => {
  const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        title,
      },
    };
  };
  return getStaticProps;
};

export default titleSSG;
