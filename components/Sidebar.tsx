/* eslint-disable @next/next/no-img-element */
"use client";

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import LinkNewTab from "./LinkNewTab";

function Sidebar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className=" p-2 flex flex-col h-screen">
      <div className=" flex-1">
        <div>
          <NewChat />
          <div className=" hidden sm:inline">
            <ModelSelection />
          </div>
          <div className=" flex flex-col space-y-2 my-2">
            {loading && (
              <div className=" animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {/* Map through the ChatRows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div className=" flex flex-col">
          <div className=" cursor-pointer">
            <img
              src={session.user?.image!}
              alt="Profile Pic"
              className="h-6 w-6 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
            />
            <p className=" text-white font-bold text-sm text-center">
              {session?.user?.name!}
            </p>
          </div>
          <div className=" flex flex-col items-start space-y-2 mt-5">
            <LinkNewTab href="https://discord.gg/ChW9x5nF">
              <div className=" text-white flex items-center justify-center space-x-2 cursor-pointer">
                <img
                  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png"
                  alt="Discord Logo"
                  className=" w-4 h-4 object-contain"
                />
                <p className=" text-sm font-semibold">Flash Discord</p>
              </div>
            </LinkNewTab>
            <div
              onClick={() => signOut()}
              className=" text-white flex items-center justify-center space-x-2 cursor-pointer hover:text-purple-500"
            >
              <ArrowRightOnRectangleIcon className=" h-4 w-4" />
              <p className=" text-sm font-semibold">Sign Out</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
