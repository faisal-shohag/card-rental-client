import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
  const data = useParams();
  const [getLocalData, setLocalData] = useState({});
  //console.log(data);
  useEffect(() => {
    const data = localStorage.getItem("car"); // Replace 'key' with your actual storage key
    if (data) {
      if (data) {
        setLocalData(JSON.parse(data));
      }
    }
  }, []);
  console.log(getLocalData);

  return (
    <>
      <div
        className="mt-10"
        style={{
          maxWidth: "600px",
          margin: "auto",
          padding: "16px",
          border: "1px solid #eee",
          fontSize: "16px",
          lineHeight: "24px",
          fontFamily: "Inter, sans-serif",
          color: "#555",
          backgroundColor: "#F9FAFC",
        }}
      >
        <table style={{ fontSize: "12px", lineHeight: "20px" }}>
          <thead>
            <tr>
              <td style={{ padding: "0 16px 18px 16px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div
                      style={{
                        color: "#1A1C21",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "900",
                        lineHeight: "normal",
                      }}
                    >
                      Thank You For Your Booking
                    </div>
                    <p>We Will Contact You Soon !!</p>
                    <hr></hr>
                    <div>demo@email.com</div>
                    <div>+44 7766002333</div>
                  </div>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <table
                style={{
                  backgroundColor: "#FFF",
                  padding: "20px 16px",
                  border: "1px solid #D7DAE0",
                  width: "100%",
                  borderRadius: "12px",
                  fontSize: "12px",
                  lineHeight: "20px",
                  tableLayout: "fixed",
                }}
              >
                <tbody>
                  <tr></tr>
                  <tr>
                    <td style={{ verticalAlign: "top", paddingBottom: "35px" }}>
                      <span style={{ color: "#1A1C21" }}>
                        <b>Client Name :</b> {getLocalData.name}
                      </span>
                      <div style={{ color: "#5E6470" }}>
                        <b># ID </b>1234567
                      </div>
                      <div style={{ color: "#5E6470" }}>
                      <b>Phone :</b> {getLocalData.phone}
                      </div>
                      <div style={{ color: "#5E6470" }}>
                      <b>Email :</b>{getLocalData.email}
                      </div>
                    </td>

                    <td
                      style={{
                        verticalAlign: "top",
                        paddingBottom: "35px",
                        textAlign: "right",
                      }}
                    >
                      <div style={{ fontWeight: "700", color: "#1A1C21" }}>
                        Pick-up
                      </div>
                      <div style={{ color: "#5E6470" }}>
                        {getLocalData.pick}
                      </div>

                      <div style={{ fontWeight: "700", color: "#1A1C21" }}>
                        Drop-off
                      </div>
                      <div style={{ color: "#5E6470" }}>
                        {getLocalData.drop}
                      </div>
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: "#eeee" }}>
                    <th
                      style={{
                        textAlign: "left",
                        color: "#1A1C21",
                        padding: "2px 5px",
                      }}
                    >
                      Car
                    </th>
                    <td style={{ textAlign: "right", padding: "2px 5px" }}>
                      {getLocalData.carName}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        color: "#1A1C21",
                        padding: "2px 5px",
                      }}
                    >
                      Pickup Date & Time
                    </th>
                    <td style={{ textAlign: "right", padding: "2px 5px" }}>
                      {getLocalData.pickTime}
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#eeee" }}>
                    <th
                      style={{
                        textAlign: "left",
                        color: "#1A1C21",
                        padding: "2px 5px",
                      }}
                    >
                      Round trip Date & Time
                    </th>
                    <td style={{ textAlign: "right", padding: "2px 5px" }}>
                      {getLocalData.roundTime ? getLocalData.roundTime : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <th
                      style={{
                        textAlign: "left",
                        color: "#1A1C21",
                        padding: "2px 5px",
                      }}
                    >
                      Time Booked
                    </th>
                    <td style={{ textAlign: "right", padding: "2px 5px" }}>
                      {getLocalData.bookedTime}
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#eeee" }}>
                    <td
                      style={{
                        textAlign: "left",
                        paddingBottom: "13px",
                        paddingTop: "15px",
                        padding: "2px 5px",
                      }}
                    >
                      <div style={{ color: "#5E6470" }}>Invoice number</div>
                      <div style={{ fontWeight: "700", color: "#1A1C21" }}>
                        #AB2324-01
                      </div>
                    </td>
                    <td
                      style={{
                        textAlign: "end",
                        paddingBottom: "13px",
                        padding: "2px 5px",
                      }}
                    >
                      <div style={{ color: "#5E6470" }}>Invoice date</div>
                      <div style={{ fontWeight: "700", color: "#1A1C21" }}>
                        {getLocalData.bookedTime}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </tr>
          </tbody>
        </table>
      </div>
      <center>
        <Link to='/' className="btn btn-accent mt-5 mb-5">Back Home</Link>
      </center>
    </>
  );
};

export default ThankYou;
