import { FaShoppingBasket, FaSignal } from "react-icons/fa";
import {
  BsFillPersonFill,
  BsFillPipFill,
  BsFillBugFill,
  BsFillChatHeartFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import ClientDashboardTable from "./components/ClientDashboardTable";
export default function ClientHome() {
  const [states, setState] = useState({ complains: [], totalComplains: 0 });
  useEffect(() => {
    fetchComplains();
  }, []);

  const fetchComplains = async () => {
    // console.log("FetchComplains");
    const email = sessionStorage.getItem("email");
    const complainsRef = collection(db, "complains");
    const q = query(complainsRef, where("email", "==", email));
    const totalComplains = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      totalComplains.push(doc.data());
    });
    console.log("FetchComplains", totalComplains);
    setState({
      ...states,
      complains: totalComplains,
      totalComplains: totalComplains.length,
    });
  };

  return (
    <div className="h-full bg-white">
      <div className="h-11/12 border-3">

        <div className="border w-100  100 p-3 rounded flex justify-between items-center">
          <h2 className="font-bold text-2xl px-2">Welcome to Net Vision</h2>

          <div className="border rounded-3xl p-3 bg-indigo-600">
            <BsFillPersonFill className="text-white" />
          </div>
        </div>

        {/* <div className="pt-4 grid grid-gap gap-4 w-full grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ps-4 pe-4">
          <div className="bg-sky-500 rounded-xl p-4">
            <div className="p-4 text-white font-bold flex justify-between items-center">
              <p className="flex justify-start items-center text-lg">
                <BsFillPipFill /> <span className="ps-2">Payment Status</span>
              </p>
              <p className="text-lg font-light">500 tk/m</p>
            </div>
          </div>
          <div className="bg-green-200 rounded-xl p-4">
            <div className="p-4 text-dark font-bold flex justify-between items-center">
              <p className="flex justify-start items-center text-lg">
                <BsFillPipFill /> <span className="ps-2">Complains</span>
              </p>
              <p className="text-lg font-light">
                {states.totalComplains && states.totalComplains} in total
              </p>
            </div>
          </div>
          <div className="bg-yellow-500 rounded-xl p-4">
            <div className="p-4 text-white font-bold flex justify-between items-center">
              <p className="flex justify-start items-center text-lg">
                <BsFillChatHeartFill />{" "}
                <span className="ps-2">Solve Problems</span>
              </p>
              <p className="text-lg font-light">5 recent</p>
            </div>
          </div>
        </div> */}
        <div class="col-12 md:col-6 lg:col-3">
          <div class="surface-card shadow-2 p-3 border-round">
            <div class="flex justify-content-between mb-3">
              <div>
                <span class="block text-500 font-medium mb-3">Orders</span>
                <div class="text-900 font-medium text-xl">152</div>
              </div>
              <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
              </div>
            </div>
            <span class="text-green-500 font-medium">24 new </span>
            <span class="text-500">since last visit</span>
          </div>
        </div>
        {/* <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
          <div class="grid">
            <div class="col-12 md:col-6 lg:col-3">
              <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                  <div>
                    <span class="block text-500 font-medium mb-3">Orders</span>
                    <div class="text-900 font-medium text-xl">152</div>
                  </div>
                  <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                  </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
              </div>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
              <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                  <div>
                    <span class="block text-500 font-medium mb-3">Revenue</span>
                    <div class="text-900 font-medium text-xl">$2.100</div>
                  </div>
                  <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                  </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
              </div>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
              <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                  <div>
                    <span class="block text-500 font-medium mb-3">Customers</span>
                    <div class="text-900 font-medium text-xl">28441</div>
                  </div>
                  <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                  </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-500">newly registered</span>
              </div>
            </div>
            <div class="col-12 md:col-6 lg:col-3">
              <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                  <div>
                    <span class="block text-500 font-medium mb-3">Comments</span>
                    <div class="text-900 font-medium text-xl">152 Unread</div>
                  </div>
                  <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-comment text-purple-500 text-xl"></i>
                  </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
              </div>
            </div>
          </div>
        </div> */}

        <div className="">
          <div className="w-6/6">
            <ClientDashboardTable
              complains={states.complains}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
