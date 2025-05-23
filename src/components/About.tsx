type Props = {
  id?: string;
  about: {
    title: string;
    content: string;
  };
};

const About = ({ id, about }: Props) => {
  return (
    <div id={id}>
      <h1>{about.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: about.content }} />
    </div>
  );
};

export default About;