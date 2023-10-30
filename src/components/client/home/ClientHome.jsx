import { FaShoppingBasket, FaSignal } from "react-icons/fa";
import {
  BsFillPersonFill,
  BsFillPipFill,
  BsFillBugFill,
  BsFillChatHeartFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
export default function ClientHome() {
  const [cardStatus, setCardStatus] = useState({});
  useEffect(() => {

  }, []);
  return (
    <div className="h-full bg-white">
      <div className="h-11/12">
        <div className="border w-100  100 p-3 rounded flex justify-between items-center">
          <h2 className="font-bold text-2xl px-2">Welcome to Net Vision</h2>
          <div className="border rounded-3xl p-3 bg-indigo-600">
            <BsFillPersonFill className="text-white" />
          </div>
        </div>
        <div className="  bg-blue-lightest mt-10 grid grid-gap gap-4 w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ps-12">
          <div className="bg-sky-500 w-5/6 h-48 rounded shadow-md flex card text-yellow-50">
            <div className="w-full flex flex-col">
              <div className="p-4 pb-0 flex-1">
                <div className="flex items-center">
                  <div className="text-4xl font-light">
                    <BsFillPipFill />
                  </div>
                  <div>
                    <h3 className="text-grey-darkest font-bold ms-2">
                      Payment Status
                    </h3>
                  </div>
                </div>
                <div className="text-xs flex items-center mb-4">
                  <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                  Your payment of this month
                </div>
                <span className="text-5xl text-grey-darkest">
                  500<span className="text-lg">tk / Month</span>
                </span>
                <div className="flex items-center mt-4">
                  <div className="pr-2 text-xs">
                    <i className="fas fa-wifi text-green"></i> For WiFi service
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-green-200 w-5/6 h-48 rounded shadow-md flex card text-gray-900">
            <div className="w-full flex flex-col">
              <div className="p-4 pb-0 flex-1">
                <div className="flex items-center">
                  <div className="text-4xl font-light">
                    <BsFillBugFill />
                  </div>
                  <div>
                    <h3 className="text-grey-darkest font-bold ms-2">
                      Complains
                    </h3>
                  </div>
                </div>
                <div className="text-xs flex items-center mb-4">
                  <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                  Total complains from you
                </div>
                <span className="text-5xl text-grey-darkest">
                  10<span className="text-lg"> / in this Month</span>
                </span>
                <div className="flex items-center mt-4">
                  <div className="pr-2 text-xs">
                    <i className="fas fa-wifi text-green"></i> WiFi
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-5/6 h-48 rounded shadow-md flex card text-sky-500">
            <div className="w-full flex flex-col">
              <div className="p-4 pb-0 flex-1">
                <div className="flex items-center">
                  <div className="text-4xl font-light">
                    <BsFillChatHeartFill />
                  </div>
                  <div>
                    <h3 className="text-grey-darkest font-bold ms-2">
                      Solved Complains
                    </h3>
                  </div>
                </div>
                <div className="text-xs flex items-center mb-4">
                  <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                  Total solved complains from the service provider
                </div>
                <span className="text-5xl text-grey-darkest">
                  06<span className="text-lg">/in this Month</span>
                </span>
                <div className="flex items-center mt-4">
                  <div className="pr-2 text-xs">
                    <i className="fas fa-wifi text-green"></i> We take care
                    about you
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ClientDashboard /> */}
    </div>
  );
}
