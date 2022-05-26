import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate, Link, useParams } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import Loading from "../shared/Loading.js";
const MyOrders = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const {
    data: data,
    isLoading,
    refetch,
  } = useQuery(["order", user?.email], () =>
    fetch(`http://localhost:5000/order?email=${user?.email}`, {
      method: "GET",
      headers: {
        // 'authorization': Bearer ${localStorage.getItem('accessToken')}
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
        <h2>My Appointments: {data.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-warning'>pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <p><span className='text-black text-bold btn btn-xs btn-success'>Paid</span></p>
                                </div>}
                                    {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p> */}
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
  );
};

export default MyOrders;