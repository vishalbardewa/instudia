import DividerWithName from '@/components/atom/DividerWithName';
import { Meta } from '@/layout/Meta';
import PageLayout from '@/layout/PageLayout';
import { Main } from '@/templates/Main';

const About = () => (
  <Main
    meta={
      <Meta
        title="About Us | instudia"
        description="About us page for instudia"
      />
    }
  >
    <PageLayout>
      <DividerWithName name="About Us" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </PageLayout>
  </Main>
);

export default About;
