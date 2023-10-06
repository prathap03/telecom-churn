"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //Basic
  const [cid, setCid] = useState(null);
  const [cstate, setCstate] = useState(null);
  const [ctenure, setCtenure] = useState(null);
  const [carea, setCarea] = useState(null);
  const [voice, setVoice] = useState(null);
  const [nvoice, setNVoice] = useState(null);
  const [cintl, setCintl] = useState(null);
  const [ccs, setCcs] = useState(null);

  //Day

  const [dcd, setDcd] = useState(null);
  const [tdc, setTdc] = useState(null);
  const [cdc, setCdc] = useState(null);

  //Night

  const [ncd, setNcd] = useState(null);
  const [tnc, setTnc] = useState(null);
  const [cnc, setCnc] = useState(null);

  //Evening

  const [ecd, setEcd] = useState(null);
  const [tec, setTec] = useState(null);
  const [cec, setCec] = useState(null);

  //International

  const [icd, setIcd] = useState(null);
  const [tic, setTic] = useState(null);
  const [cic, setCic] = useState(null);

  //file

  const [file, setFile] = useState(null);

  const submit = () => {
    if (
      cid &&
      cstate &&
      ctenure &&
      carea &&
      voice &&
      nvoice &&
      ccs &&
      dcd &&
      tdc &&
      cdc &&
      ncd &&
      tnc &&
      cnc &&
      ecd &&
      tec &&
      cec &&
      icd &&
      tic &&
      cic
    ) {
      console.log("DATA");
      console.log("net call duration", ncd + ecd + icd + dcd);
      let netcd = ncd + ecd + icd + dcd;
      let tnetc = tec + tdc + tnc;
      let cnetc = cec + cnc + cdc;
      //international_plan	voice_mail_plan	number_vmail_messages	total_intl_minutes	total_intl_calls	total_intl_charge	number_customer_service_calls	total_net_minutes	total_net_calls	total_net_charge

      let data = {
        cid: cid,
        data: [cintl, voice, nvoice, icd, tic, cic, ccs, netcd, tnetc, cnetc],
      };
      console.log(data);
    } else {
      alert("Enter All the Required Details");
    }
  };

  return (
    <div className="h-screen flex flex-col text-black w-[100%] overflow-auto bg-[#F4F6F8]">
      <Head>
        <title>Churn Prediction</title>
      </Head>

      <div className="bg-white flex justify-start gap-2 p-2 items-center  shadow-md h-[4rem]">
        {/* <h1>Title Bar</h1> */}

        <div className="flex flex-col">
          <div className="h-[0.75rem] md:h-[1.5rem] transition-all w-[1.5rem] md:w-[3rem] bg-red-500"></div>
          <div className="h-[0.75rem] md:h-[1.5rem] transition-all w-[1.5rem] md:w-[3rem] bg-[#731717]"></div>
        </div>
        <h1 className="font-semibold transition-all text-[1.2rem]  md:text-[2rem] ">
          Churn Prediction
        </h1>
      </div>
      <div className="flex items-center justify-center h-[15vh] transition-all  md:h-[30vh] ">
        <div className="flex flex-col gap-1 md:gap-2 items-center justify-center  h-[90%] outline-dashed outline-1 shadow-md rounded-md  w-[80%] bg-white">
          <Image
            className="md:mb-[1.5rem] mb-[0.5rem] transition-all scale-[70%] md:scale-100"
            src="/upload.png"
            width="100"
            height="100"
          />
          <h1 className="p-1 font-semibold text-white text-[0.7rem] transition-all bg-blue-500 mb-3 md:mb-0 rounded-full md:p-2 hover:cursor-pointer hover:bg-blue-700">
            Select Churn Report (csv/xlsx)
          </h1>
          <h1 className="hidden transition-all ease-linear md:block font-semibold md:text-[0.7rem] lg:text-[1.1rem]">
            or drag & drop your files here
          </h1>
        </div>
      </div>
      <div className="ml-[1rem] md:ml-[3rem]">
        <h1 className="font-semibold md:text-[2rem]  ">Churn Details</h1>
      </div>
      <div className="flex justify-center ">
        <div className="flex  w-[95%]  flex-col md:flex-row justify-around items-center p-4 gap-4 bg-[#EEEBEB] shadow-md   rounded-md">
          <div className="bg-[#FFDBDB]/[80%] md:w-[38%] lg:w-[28%] w-[98%] flex flex-col md:flex-row gap-2 backdrop-blur-md p-2 rounded-xl md:h-[98%] shadow-md ">
            <div className="flex flex-col gap-2 h-[100%] md:w-[50%] w-[100%] 0 p-2">
              <div className="flex  flex-col gap-[0.04rem]">
                <h1 className="md:text-[1.2rem]">Customer Id</h1>
                <input
                  onBlur={(e) => {
                    setCid(e.target.value);
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>

              <div className="flex flex-col gap-[0.04rem]">
                <h1>Customer State</h1>
                <select
                  onChange={(e) => {
                    setCstate(parseInt(e.currentTarget.value));
                  }}
                  className="h-[1.5rem] shadow-md"
                >
                  <option value={null} default select>
                    Select State
                  </option>
                  <option value="AK">AK</option>
                  <option value="AL">AL</option>
                  <option value="AR">AR</option>
                  <option value="AZ">AZ</option>
                  <option value="CA">CA</option>
                  <option value="CO">CO</option>
                  <option value="CT">CT</option>
                  <option value="DC">DC</option>
                  <option value="DE">DE</option>
                  <option value="FL">FL</option>
                  <option value="GA">GA</option>
                  <option value="HI">HI</option>
                  <option value="IA">IA</option>
                  <option value="ID">ID</option>
                  <option value="IL">IL</option>
                  <option value="IN">IN</option>
                  <option value="KS">KS</option>
                  <option value="KY">KY</option>
                  <option value="LA">LA</option>
                  <option value="MA">MA</option>
                  <option value="MD">MD</option>
                  <option value="ME">ME</option>
                  <option value="MI">MI</option>
                  <option value="MN">MN</option>
                  <option value="MO">MO</option>
                  <option value="MS">MS</option>
                  <option value="MT">MT</option>
                  <option value="NC">NC</option>
                  <option value="ND">ND</option>
                  <option value="NE">NE</option>
                  <option value="NH">NH</option>
                  <option value="NJ">NJ</option>
                  <option value="NM">NM</option>
                  <option value="NV">NV</option>
                  <option value="NY">NY</option>
                  <option value="OH">OH</option>
                  <option value="OK">OK</option>
                  <option value="OR">OR</option>
                  <option value="PA">PA</option>
                  <option value="RI">RI</option>
                  <option value="SC">SC</option>
                  <option value="SD">SD</option>
                  <option value="TN">TN</option>
                  <option value="TX">TX</option>
                  <option value="UT">UT</option>
                  <option value="VA">VA</option>
                  <option value="VT">VT</option>
                  <option value="WA">WA</option>
                  <option value="WI">WI</option>
                  <option value="WV">WV</option>
                  <option value="WY">WY</option>
                </select>
              </div>

              <div className="flex flex-col gap-[0.04rem]">
                <h1>Customer Tenure (in Months)</h1>
                <input
                  onBlur={(e) => {
                    setCtenure(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>

              <div className="flex flex-col gap-[0.04rem]">
                <h1>Customer Area Code</h1>
                <select
                  onChange={(e) => {
                    setCarea(parseInt(e.currentTarget.value));
                  }}
                  name="area"
                  className="h-[1.5rem] shadow-md"
                >
                  <option value={null} default select>
                    Select Area
                  </option>
                  <option value="408">408</option>
                  <option value="415">415</option>
                  <option value="510">510</option>
                </select>
              </div>

              <div className="flex flex-col gap-[0.04rem]">
                <h1>Voice Mail Subscription</h1>
                <select
                  onChange={(e) => {
                    setVoice(parseInt(e.currentTarget.value));
                  }}
                  name="area"
                  className="h-[1.5rem] shadow-md"
                >
                  <option value={null} default select>
                    Yes/No
                  </option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="flex flex-col gap-[0.04rem]">
                <h1>International Tariff</h1>
                <select
                  onChange={(e) => {
                    setCintl(parseInt(e.currentTarget.value));
                  }}
                  name="area"
                  className="h-[1.5rem] shadow-md"
                >
                  <option value="default" default select>
                    Yes/No
                  </option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              <div className="flex flex-col gap-[0.04rem]">
                <h1>No of Voice Mail</h1>
                <input
                  onBlur={(e) => {
                    setNVoice(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="flex h-[100%] md:w-[50%]  p-2">
              <div className="flex  md:w-auto  w-[100%] flex-col gap-[0.04rem]">
                <h1>Calls to Customer Service</h1>
                <input
                  onBlur={(e) => {
                    setCcs(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div className="flex h-[100%] md:w-[20%] w-[98%] transition-all  flex-col gap-2 ">
            <div className="bg-[#FFDBDB]/[80%] p-2 flex flex-col  gap-2 backdrop-blur-md rounded-xl h-[50%] shadow-md w-[100%]">
              <div className="flex flex-col p-2 gap-[0.04rem]">
                <h1>Day Call Duration (mins)</h1>
                <input
                  onBlur={(e) => {
                    setDcd(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col p-2 gap-[0.04rem]">
                <h1>Total Day Calls</h1>
                <input
                  onBlur={(e) => {
                    setTdc(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col p-2 gap-[0.04rem]">
                <h1>Cumulative Day Calls Charges</h1>
                <input
                  onBlur={(e) => {
                    setCdc(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="bg-[#FFDBDB]/[80%]  flex flex-col gap-2  backdrop-blur-md rounded-xl h-[47%]  shadow-md w-[100%]">
              <div className="flex flex-col p-2 gap-[0.04rem]">
                <h1>Intl. Call Duration (mins)</h1>
                <input
                  onBlur={(e) => {
                    setIcd(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex p-2 flex-col gap-[0.04rem]">
                <h1>Total Intl. Calls</h1>
                <input
                  onBlur={(e) => {
                    setTic(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex p-2 flex-col gap-[0.04rem]">
                <h1>Cumulative Intl. Calls Charges</h1>
                <input
                  onBlur={(e) => {
                    setCic(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div className="flex-grow     h-[100%] w-[98%] md:w-auto transition-all  flex md:flex-row flex-col justify-start gap-4">
            <div className="bg-[#FFDBDB]/[80%] backdrop-blur-md rounded-xl h-max shadow-md w-[100%] md:w-max p-2">
              <div className="flex flex-col p-2 gap-[0.04rem]">
                <h1>Night Call Duration (mins)</h1>
                <input
                  onBlur={(e) => {
                    setNcd(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex p-2 flex-col gap-[0.04rem]">
                <h1>Total Night Calls</h1>
                <input
                  onBlur={(e) => {
                    setTnc(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex p-2 flex-col gap-[0.04rem]">
                <h1>Cumulative Night Calls Charges</h1>
                <input
                  onBlur={(e) => {
                    setCnc(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="bg-[#FFDBDB]/[80%] backdrop-blur-md rounded-xl h-max shadow-md w-[100%] md:w-max p-2">
              <div className="flex flex-col p-2 gap-[0.04rem]">
                <h1>Evening Call Duration (mins)</h1>
                <input
                  onBlur={(e) => {
                    setEcd(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex p-2 flex-col gap-[0.04rem]">
                <h1>Total Evening Calls</h1>
                <input
                  onBlur={(e) => {
                    setTec(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex p-2 flex-col gap-[0.04rem]">
                <h1>Cumulative Evening Calls Charges</h1>
                <input
                  onBlur={(e) => {
                    setCec(parseInt(e.target.value));
                  }}
                  className="shadow-md"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow flex-shrink-0 m-2 md:m-0">
        <button
          onClick={submit}
          className="p-2  font-semibold text-white bg-[#29C8EB] hover:cursor-pointer hover:bg-[#29C8EB]/[80%] transition-all rounded-xl text-[1.3rem]"
        >
          ANALYZE
        </button>
      </div>
    </div>
  );
}
