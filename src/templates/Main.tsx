import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      <div className="content text-xl">{props.children}</div>

      {/* <div className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          🥰
        </span>{' '}
        by <b>Team instudia</b>
      </div> */}
    </div>
  </div>
);

export { Main };
