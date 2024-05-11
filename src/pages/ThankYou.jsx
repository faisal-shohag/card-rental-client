import React from "react";
import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
    const data = useParams()
    console.log(data);
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "#eaeced",
    },
    table: {
      backgroundColor: "#eaeced",
      width: "100%",
    },
    innerTable: {
      borderCollapse: "collapse",
      backgroundColor: "#ffffff",
      border: "1px solid #f0f0f0",
      width: "50%",
    },
    redTopBorder: {
      borderTop: "4px solid #ff0000",
    },
    centerAlign: {
      textAlign: "center",
    },
    noteContainer: {
      padding: "20px 40px",
      fontFamily: "Open Sans,Helvetica,Arial,sans-serif",
      fontSize: 16,
      lineHeight: 1.4,
      color: "#333",
    },
    payButton: {
      background: "#ff0000",
      display: "inline-block",
      padding: "15px 25px",
      color: "#fff",
      borderRadius: 6,
    },
    regards: {
      fontFamily: "Open Sans,Helvetica,Arial,sans-serif",
      fontSize: 14,
      lineHeight: 1.4,
      color: "#777",
    },
  };
  return (
    <>
      {/* <div class="content thank-you-page">
        <div class="wrapper-1">
          <div class="wrapper-2">
            <h1>Thank you !</h1>
            <p>Thanks for your booking. </p>
            <p>you should receive a confirmation email soon </p>
            <br></br>
            <Link to="/" class="go-home">
              go home
            </Link>
          </div>
        </div>
      </div> */}
      {/* Invoice Template */}
      <body style={styles.body}>
        <table style={styles.table}>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <table align="center" style={styles.innerTable}>
                <tr style={styles.redTopBorder}>
                  <td align="left" style={{ padding: "15px 20px 20px" }}>
                    <table width="100%">
                      <tr>
                        <td>
                          <img
                            style={{ width: 200 }}
                            src="https://i.ytimg.com/vi/1V7HKQ_5_Mw/maxresdefault.jpg"
                            width="220px"
                            alt="Company Logo"
                          />
                        </td>
                        <td align="right">
                          <span>Inovice no: #1234</span>
                          <br />
                          <span style={{ padding: "5px 0", display: "block" }}>
                            22-10-2017
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    style={{
                      padding: 20,
                      borderTop: "1px solid #f0f0f0",
                      background: "#fafafa",
                      ...styles.centerAlign,
                    }}
                  >
                    <div>Total Due:</div>
                    <h2
                      style={{
                        margin: "10px 0",
                        color: "#333",
                        fontWeight: 500,
                        fontSize: 48,
                      }}
                    >
                      $707.60
                    </h2>
                    <div
                      style={{ lineHeight: 1.4, fontSize: 14, color: "#777" }}
                    >
                      For Abc company, Issued on 1 Sept, 2017
                      <br />
                      by XYZ company
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={styles.noteContainer}>
                    <div>
                      Note: For sales and marketing activity in July 2017{" "}
                    </div>
                    <div>
                      <br />
                    </div>
                    <div style={styles.payButton}>Pay Invoice</div>
                    <div style={{ color: "#777", padding: 5 }}>
                      Due by 30 Sept, 2017
                    </div>
                    <div>
                      <br />
                    </div>
                  </td>
                </tr>
                <tr style={{ borderTop: "1px solid #eaeaea" }}>
                  <td align="center">
                    <div style={styles.regards}>
                      Regards,
                      <br />
                      XYZ company
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </>
  );
};

export default ThankYou;
