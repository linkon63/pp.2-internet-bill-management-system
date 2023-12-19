import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase.config";
import ClientDashboardTable from "../../client/home/components/ClientDashboardTable";

export default function AdminComplains() {
  const [states, setState] = useState({ complains: [], totalComplains: 0 });

  const fetchComplains = async () => {
    // console.log("FetchComplains");
    const email = sessionStorage.getItem("email");
    const complainsRef = collection(db, "complains");
    //   const q = query(complainsRef, where("email", "==", email));
    const q = query(complainsRef);
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

  useEffect(() => {
    fetchComplains();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
    <div className="px-2 border border-red-800">
        <ClientDashboardTable complains={states.complains} />
      </div>
  </div>;
}
