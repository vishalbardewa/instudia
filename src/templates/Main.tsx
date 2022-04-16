import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl 2xl:w-full 2xl:max-w-screen-2xl 2xl:max-w-screen-2xl">
      <div className="content text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
