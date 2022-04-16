import DividerWithName from '@/components/atom/DividerWithName';
import { Meta } from '@/layout/Meta';
import PageLayout from '@/layout/PageLayout';
import { Main } from '@/templates/Main';

const Community = () => (
  <Main
    meta={
      <Meta
        title="Community | instudia"
        description="Community Knowledge Center"
      />
    }
  >
    <PageLayout>
      <DividerWithName name="Community" />
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

export default Community;
