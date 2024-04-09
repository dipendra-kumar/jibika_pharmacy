interface IPageHeader {
  title: string;
  contextAction?: any;
}

const PageHeader: React.FC<IPageHeader> = ({ title, contextAction }) => {
  return (
    <div className="flex items-center justify-between border-b bg-white px-10 py-5 ">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      {contextAction}
    </div>
  );
};

export default PageHeader;
