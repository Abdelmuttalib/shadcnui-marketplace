import { ScreenContainer } from "@/components/container";

export default function Carbon() {
  return (
    <div>
      <ScreenContainer>
        <div className="p-8">
          {/* <h3>Carbon</h3> */}
          <div className="">
            {/* #0f62fe */}
            <button className="bg-[#0f62fe] text-white px-12 pl-4 py-3.5 ring-1 ring-inset ring-[#0f62fe] focus:ring-1 focus:ring-white ring-offset-2 ring-offset-[#0f62fe] text-sm font-plex-sans transition-all duration-100 ease-in-out hover:bg-blue-700 hover:text-white hover:ring-blue-700 hover:ring-offset-blue-700 active:bg-blue-800 active:text-white">
              Button
            </button>
          </div>
          <div className="">
            <button className="bg-[#0f62fe] text-white px-12 pl-4 py-3.5 ring-1 ring-inset ring-[#0f62fe] focus:ring-1 focus:ring-white ring-offset-2 ring-offset-[#0f62fe] text-sm font-plex-sans transition-all duration-100 ease-in-out hover:bg-blue-700 hover:text-white hover:ring-blue-700 hover:ring-offset-blue-700 active:bg-blue-800 active:text-white">
              Button
            </button>
          </div>
        </div>
      </ScreenContainer>
    </div>
  );
}
