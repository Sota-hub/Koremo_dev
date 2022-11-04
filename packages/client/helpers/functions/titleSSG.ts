import { GetStaticProps } from "next";

const titleSSG = (title: string) => {
  const getStaticProps: GetStaticProps = async (props) => {
    return {
      props: {
        title,
      },
    };
  };
  return getStaticProps;
};

export default titleSSG;
