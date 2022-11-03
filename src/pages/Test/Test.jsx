

export const GetCustomerTemplate = (
    { firstName,
        lastName,
        contactNumber,
        address,
        pinCode,
        orders,
        total }
) => {
    return <div
        dangerouslySetInnerHTML={{
            __html: `<html lang="en-US">

            <head>
                <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
                <title>Credentials for Login</title>
                <meta name="description" content="" />
                <style type="text/css">
                    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
            
                    a:hover {
                        text-decoration: underline !important;
                    }
                </style>
            </head>
            
            <body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8" leftmargin="0">
                <!--100% body table-->
                <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8" style="
                          @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
                          font-family: 'Open Sans', sans-serif;
                        ">
            
            
            
                    <tr>
                        <td>
                            <table style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto" width="100%" border="0"
                                align="center" cellpadding="0" cellspacing="0">
            
                                <tr>
                                    <td>
                                        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style="
                                      max-width: 670px;
                                      background: #fff;
                                      border-radius: 3px;
                                      -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                                      -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                                      box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                                    ">
                                            <tr>
                                                <td>
                                                    <img style="width: 100%;" src="${process.env.DASHBOARD_BASE_URL
                            }/assets/Header.png" alt="">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="height: 32px">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 0 35px">
            
                                                    <table>
                                                        <tr>
                                                            <p style="
                                              font-family: 'Manrope';
                                              font-style: normal;
                                              font-weight: 400;
                                              font-size: 16px;
                                              line-height: 24px;
                                              letter-spacing: -0.015em;
                                              color: #3D3D3D;
                                              ">Hi ${firstName} 👋</p>
                                                        </tr>
            
                                                        <tr>
                                                            <p style="
                                              margin-top: 12px;
                                              font-family: 'Manrope';
                                              font-style: normal;
                                              font-size: 16px;
                                              font-weight: 400;
                                              letter-spacing: -0.015em;
                                              line-height: 24px;
                                              color: #3D3D3D;
                                              ">Kudos to you for choosing a healthy oil alternative 🎉 <br />
                                                                Your order has been successfully placed with us.<br />
                                                                This e-mail contains your order details for your reference:</p>
                                                        </tr>
            
                                                        <tr>
                                                            <td style="
                                                  display: flex;
                                                  align-items: flex-start;
                                                  padding: 24px;
                                                  border-radius: 8px;
                                                  border: 1px solid #E7E6E6;
                                                  border-radius: 8px;
                                                  flex-direction: column;
                                                          ">
                                                                <table style="width: 100%; border: 0;table-layout:auto;"
                                                                    cellspacing="0" cellpadding="0">
                                                                    ${orders.map((order) => {
                                                                    return `
                                                                    <tr>
                                                                        <td style="position: relative; width:fit-content;">
                                                                            <div style="position: relative; width: fit-content;">
                                                                                <img style="width: 108px;  border-radius: 4px;" src="${process.env
                                        .DASHBOARD_BASE_URL
                                    }${order.image.slice(
                                        1
                                    )}" alt="">
                                                                                <div style="position: absolute; 
                                                                      height: 20px;
                                                                      width: 20px;
                                                                      border-radius: 50%;
                                                                      display: flex;
                                                                      justify-content: center;
                                                                      background-color: #0E390E;
                                                                      color: white;
                                                                      top: -10px;
                                                                      right: -10px;
                                                                      ">${order.count}</div>
                                                                            </div>
                                                                        </td>
                                                                        <td style="padding-left: 16px ;">
                                                                            <p style="font-family: 'Manrope';
                                                                      font-style: normal;
                                                                      font-weight: 700;
                                                                      font-size: 18px;
                                                                      line-height: 24px;
                                                                      margin:0px;
                                                                      letter-spacing: -0.01em;
                                                                      color: #140A08;">${order.name
                                                                                }</p>
                                                                            <p style="font-family: 'Manrope';
                                                                  font-style: normal;
                                                                  font-weight: 500;
                                                                  font-size: 16px;
                                                                  line-height: 20px;
                                                                  letter-spacing: -0.01em;
                                                                  color: #726C6B;
                                                                  margin: 4px 0 0 0;
                                                                  ">${order.quantity}</p>
                                                                            <p style="font-family: 'Manrope';
                                                                  font-style: normal;
                                                                  font-weight: 800;
                                                                  font-size: 24px;
                                                                  line-height: 28px;
                                                                  letter-spacing: -0.015em;
                                                                  margin: 16px 0 0 0;
                                                                  color: #140A08;">₹ ${order.price
                                                                                }.00</p>
                                                                        </td>
                                                                    </tr>
            
                                                                    <tr style="height: 24px ;"></tr>`;
                                                                    })}
            
            
            
                                                                    <tr style="background: #FAFAFA;
                                                          border-radius: 4px;
                                                          ">
            
                                                                        <td style="padding: 16px;">
                                                                            <p style="font-family: 'Manrope';
                                                                  font-style: normal;
                                                                  font-weight: 500;
                                                                  font-size: 18px;
                                                                  line-height: 24px;
                                                                  /* identical to box height, or 133% */
                                                                  
                                                                  letter-spacing: -0.01em;
                                                                  
                                                                  /* Neutrals/Neutral60 */
                                                                  
                                                                  color: #726C6B;
                                                                  ">
                                                                                Total
                                                                            </p>
                                                                        </td>
                                                                        <td style="display: flex; padding: 16px;">
                                                                            <p style="margin-left: auto;font-family: 'Manrope';
                                                                  font-style: normal;
                                                                  font-weight: 800;
                                                                  font-size: 24px;
                                                                  line-height: 28px;
                                                                  letter-spacing: -0.015em;
                                                                  color: #140A08;">₹ ${total}.00 </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
            
            
                                                            </td>
            
                                                        </tr>
            
                                                        <td>
            
                                                            <div style="margin-top: 24px;
                                                
                                              align-items: flex-start;
                                              padding: 24px;
                                              border-radius: 8px;
                                              border: 1px solid #E7E6E6;
                                              border-radius: 8px;
                                              ">
                                                                <p style="font-family: 'Manrope';
                                          margin: 0px;
                                          font-style: normal;
                                          font-weight: 400;
                                          font-size: 16px;
                                          line-height: 150%;
                                          letter-spacing: -0.02em;
                                          color: #3D3D3D;">Delivering to ${firstName} ${lastName}, ${address} ${pinCode} </p>
            
                                                                <p style="
                                          font-family: 'Manrope';
                                          margin: 16px 0px 0px 0px;
                                          font-style: normal;
                                          font-weight: 400;
                                          font-size: 16px;
                                          line-height: 150%;
                                          letter-spacing: -0.02em;
                                          color: #3D3D3D;">Contact Number: ${contactNumber}</p>
            
                                                        </td>
            
            
                                            </tr>
            
                                            <tr>
                                                <td>
                                                    <p style="font-family: 'Manrope';
                                                  font-style: normal;
                                                  font-weight: 400;
                                                  font-size: 14px;
                                                  line-height: 20px;
                                                  letter-spacing: -0.015em;
                                                  color: #726C6B;
                                                  margin: 8px 0 0 0;
                                                  ">Something is not right? Call us on <strong> +91 6261 867 936</strong>
                                                    </p>
                                                    </ td>
            
                                            </tr>
                                            <tr>
            
                                                <td style="display: flex;
                                                  flex-direction: row;
                                                  align-items: flex-start;
                                                  padding: 20px 16px;
                                                  margin: 32px 0 0 0;
                                                  border: 1px solid #72510D;
                                                  border-radius: 8px;
                                                  ">
            
            
            
                                                    <p style="font-family: 'Manrope';
                                                     font-style: normal;
                                                     font-weight: 800;
                                                     margin: 0px 0px 0px 10px;
                                                     font-size: 18px;
                                                     line-height: 24px;
                                                     letter-spacing: -0.015em;
                                                     color: #72510D;">
                                                        We’ll deliver to your doorstep as soon as possible
                                                    </p>
            
                                                </td>
            
                                            </tr>
            
                                            <tr>
            
                                                <table style="margin-top: 32px;
                                              background: linear-gradient(90deg, #228B22 0%, #89C01C 100%);
                                              border-radius: 8px;
                                              padding: 32px;
                                              display: flex;
                                              flex-direction: row;
                                              ">
            
                                                    <tr>
            
                                                        <td>
            
                                                            <p style="margin: 0px ;font-family: 'Manrope';
                                                  font-style: normal;
                                                  font-weight: 800;
                                                  font-size: 24px;
                                                  line-height: 28px;
                                                  letter-spacing: -0.015em;
                                                  color: #FFFFFF;">Keep ordering from <br />
                                                                Parampara Cold Pressed Oils</p>
            
                                                        </td>
            
                                                        <td style="display: flex; margin-left: auto;">
                                                            <a href="javascript:void(0)" target="_blank" style="
                                    background: #fff;
                                    text-decoration: none !important;
                                    font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            /* identical to box height, or 114% */
            
            text-align: center;
            letter-spacing: -0.01em;
            
            /* Brand/Primary/Primary60 */
            
            color: #228B22;
            display: inline-block;
            padding: 10px 16px;
            height: fit-content;
            margin: auto;
                                    border-radius: 4px;
                                  ">See products</a>
                                                        </td>
            
                                                    </tr>
            
                                                </table>
            
                                            </tr>
            
                                        </table>
            
            
            
                                    </td>
                                </tr>
                                <tr>
                                    <td style="height: 32px">&nbsp;</td>
                                </tr>
                                <tr style="background-color: #FAFAFA; ">
                                    <!-- <td style="height: 40px">&nbsp;</td> -->
            
                                    <td style="text-align: center; ">
                                        <table style="padding: 0 75px;">
                                            <tr>
                                                <td style="height: 32px">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>
            
                                                    <img style-="width:150px;"
                                                        src="https://parampara-landing.web.app/static/media/LogoHorizontal.5779d6fa3b14e47ff007b2276ebb3935.svg"
                                                        alt="">
                                                </td>
                                                <td></td>
            
                                            </tr>
                                            <tr>
                                                <td style="height: 32px">&nbsp;</td>
                                            </tr>
            
                                            <tr>
                                                <td style="background-color:#F4F9F4 ; ">
                                                    <img style-="max-width:150px;" src="${process.env.DASHBOARD_BASE_URL
                            }/assets/Footer.png" alt="">
                                                </td>
                                            </tr>
                                        </table>
            
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
            
                    <tr>
                        <td style="height: 20px">&nbsp;</td>
                    </tr>
                    <tr>
                        <td style="text-align: center">
                            <p style="
                                      font-size: 14px;
                                      color: rgba(69, 80, 86, 0.7411764705882353);
                                      line-height: 18px;
                                      margin: 0 0 0;
                                    "></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="height: 80px">&nbsp;</td>
                    </tr>
                </table>
                <!--/100% body table-->
            </body>
            
            </html>`}}
    />
}