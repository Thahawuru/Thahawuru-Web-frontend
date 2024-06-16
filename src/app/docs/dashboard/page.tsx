import DocsSideBar from "@/components/docsSidebar";

export default function AdminDashboardPage() {
  return (
    <>
      <div className="w-full minh-screen h-auto bg-gradient-to-r from-white to-primary font-semibold flex flex-row">
        <DocsSideBar />
        <div className="w-full h-full bg-white dark:bg-gray-800 text-black">
          <div className="flex flex-row justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-row items-center border border-secondary rounded-md w-[200px] h-[30px]"></div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-secondary mt-10 ml-10">
              Welcome to Thahawuru Docs
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
